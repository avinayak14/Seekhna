import React, { useState } from 'react';
import useSpeech from '../hooks/useSpeech';
import './Flashcard.css'; // Reusing flashcard styles

const ReviewSession = ({ dueItems, onComplete, onSubmitReview }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const { speak } = useSpeech();

    const currentItem = dueItems[currentIndex];

    if (!currentItem) {
        return (
            <div className="review-complete animate-fade-in" style={{ textAlign: 'center', padding: '2rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎉 Session Complete!</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    You have reviewed all due items for now. Come back later!
                </p>
                <button className="btn btn-primary" onClick={onComplete}>Back to Dashboard</button>
            </div>
        );
    }

    const handleReveal = () => {
        setIsRevealed(true);
        speak(currentItem.hindi);
    };

    const handleGrade = (grade) => {
        onSubmitReview(currentItem.id, grade);

        if (currentIndex < dueItems.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setIsRevealed(false);
        } else {
            // Session finished
            onComplete();
        }
    };

    return (
        <div className="review-session animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-muted)' }}>
                <span>Reviewing</span>
                <span>{currentIndex + 1} / {dueItems.length}</span>
            </div>

            <div className="flashcard-container" style={{ minHeight: '300px', cursor: 'default' }}>
                <div className="flashcard-inner" style={{ transform: isRevealed ? 'rotateY(180deg)' : 'none' }}>

                    {/* FRONT */}
                    <div className="flashcard-front" onClick={!isRevealed ? handleReveal : undefined} style={{ cursor: 'pointer' }}>
                        <div className="flashcard-english" style={{ fontSize: '2rem' }}>{currentItem.english}</div>
                        <div className="flashcard-hint" style={{ marginTop: '1rem' }}>Tap to reveal</div>
                    </div>

                    {/* BACK */}
                    <div className="flashcard-back">
                        <div className="hindi-text flashcard-hindi" style={{ fontSize: '2.5rem' }}>{currentItem.hindi}</div>
                        <div className="flashcard-transliteration" style={{ fontSize: '1.2rem', color: 'var(--color-secondary)' }}>
                            {currentItem.transliteration}
                        </div>
                        <button
                            className="btn btn-sm"
                            onClick={(e) => { e.stopPropagation(); speak(currentItem.hindi); }}
                            style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.1)' }}
                        >
                            🔊 Listen
                        </button>
                    </div>
                </div>
            </div>

            {/* CONTROLS */}
            {isRevealed && (
                <div className="review-controls animate-fade-in" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.5rem' }}>
                    <button
                        className="btn"
                        style={{ background: '#ef4444', color: 'white', fontSize: '0.9rem' }}
                        onClick={() => handleGrade(1)}
                    >
                        Again
                    </button>
                    <button
                        className="btn"
                        style={{ background: '#f59e0b', color: 'white', fontSize: '0.9rem' }}
                        onClick={() => handleGrade(3)}
                    >
                        Hard
                    </button>
                    <button
                        className="btn"
                        style={{ background: '#3b82f6', color: 'white', fontSize: '0.9rem' }}
                        onClick={() => handleGrade(4)}
                    >
                        Good
                    </button>
                    <button
                        className="btn"
                        style={{ background: '#22c55e', color: 'white', fontSize: '0.9rem' }}
                        onClick={() => handleGrade(5)}
                    >
                        Easy
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReviewSession;
