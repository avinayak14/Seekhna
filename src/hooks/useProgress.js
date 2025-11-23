import { useState, useEffect } from 'react';

const STORAGE_KEY = 'seekhna_progress_v1';

const useProgress = () => {
    const [learnedIds, setLearnedIds] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(learnedIds));
    }, [learnedIds]);

    const toggleLearned = (phraseId) => {
        setLearnedIds(prev => {
            if (prev.includes(phraseId)) {
                return prev.filter(id => id !== phraseId);
            } else {
                return [...prev, phraseId];
            }
        });
    };

    const isLearned = (phraseId) => learnedIds.includes(phraseId);

    const getCategoryProgress = (categoryPhrases) => {
        if (!categoryPhrases || categoryPhrases.length === 0) return 0;
        const learnedCount = categoryPhrases.filter(p => learnedIds.includes(p.id)).length;
        return Math.round((learnedCount / categoryPhrases.length) * 100);
    };

    const getTotalProgress = (allCategories) => {
        const totalPhrases = allCategories.reduce((acc, cat) => acc + cat.phrases.length, 0);
        if (totalPhrases === 0) return 0;
        const learnedCount = learnedIds.length; // Assuming learnedIds only contains valid IDs
        return Math.round((learnedCount / totalPhrases) * 100);
    };

    return {
        learnedIds,
        toggleLearned,
        isLearned,
        getCategoryProgress,
        getTotalProgress
    };
};

export default useProgress;
