import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'seekhna_srs_v1';

// SuperMemo-2 Algorithm Constants
const DEFAULT_EF = 2.5; // Ease Factor
const MIN_EF = 1.3;

const useSRS = () => {
    const [srsData, setSrsData] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(srsData));
    }, [srsData]);

    // Grade: 0-5
    // 5: perfect response
    // 4: correct response after a hesitation
    // 3: correct response recalled with serious difficulty
    // 2: incorrect response; where the correct one seemed easy to recall
    // 1: incorrect response; the correct one remembered
    // 0: complete blackout.
    const submitReview = useCallback((phraseId, grade) => {
        setSrsData(prev => {
            const current = prev[phraseId] || { repetition: 0, interval: 0, ef: DEFAULT_EF };

            let { repetition, interval, ef } = current;

            if (grade >= 3) {
                if (repetition === 0) {
                    interval = 1;
                } else if (repetition === 1) {
                    interval = 6;
                } else {
                    interval = Math.round(interval * ef);
                }
                repetition += 1;
            } else {
                repetition = 0;
                interval = 1;
            }

            // Update Ease Factor (EF)
            // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
            const newEf = ef + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
            ef = Math.max(newEf, MIN_EF);

            const nextDueDate = new Date();
            nextDueDate.setDate(nextDueDate.getDate() + interval);
            nextDueDate.setHours(0, 0, 0, 0); // Normalize to midnight

            return {
                ...prev,
                [phraseId]: {
                    repetition,
                    interval,
                    ef,
                    dueDate: nextDueDate.toISOString(),
                    lastReviewed: new Date().toISOString()
                }
            };
        });
    }, []);

    const getDueItems = useCallback((allPhrases) => {
        const now = new Date();
        now.setHours(23, 59, 59, 999); // End of today

        return allPhrases.filter(phrase => {
            const data = srsData[phrase.id];
            // If never reviewed, it's "new" (can be treated as due or separate queue)
            // For simplicity, we'll treat unreviewed items as NOT due unless explicitly added to learning queue.
            // BUT for this v3 fluency engine, let's say all Level 1 items are "due" initially, or we just return items that ARE in SRS and due.

            if (!data) return false; // Not yet started learning

            return new Date(data.dueDate) <= now;
        });
    }, [srsData]);

    const startLearning = useCallback((phraseId) => {
        setSrsData(prev => {
            if (prev[phraseId]) return prev; // Already learning
            return {
                ...prev,
                [phraseId]: {
                    repetition: 0,
                    interval: 0,
                    ef: DEFAULT_EF,
                    dueDate: new Date().toISOString() // Due immediately
                }
            };
        });
    }, []);

    const getStats = () => {
        const totalLearned = Object.keys(srsData).length;
        const dueCount = Object.values(srsData).filter(d => new Date(d.dueDate) <= new Date()).length;
        return { totalLearned, dueCount };
    };

    return {
        srsData,
        submitReview,
        getDueItems,
        startLearning,
        getStats
    };
};

export default useSRS;
