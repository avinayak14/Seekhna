import React, { useState } from 'react';
import useSpeech from '../hooks/useSpeech';
import PronunciationChecker from './PronunciationChecker';
import './Flashcard.css';

const Flashcard = ({ phrase }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showPractice, setShowPractice] = useState(false);
    const { speak } = useSpeech();

    const handleFlip = () => {
        if (!showPractice) {
            setIsFlipped(!isFlipped);
        }
    };

    const handleSpeak = (e) => {
        e.stopPropagation();
        speak(phrase.audioText || phrase.hindi);
    };

    const handlePractice = (e) => {
        e.stopPropagation();
        setShowPractice(!showPractice);
    };

    return (
        <div
            className={`flashcard-container ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
        >
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <div className="flashcard-english">{phrase.english}</div>
                    <div className="flashcard-hint">Tap to reveal Hindi</div>
                </div>
                <div className="flashcard-back">
                    {!showPractice ? (
                        <>
                            <div className="hindi-text flashcard-hindi">{phrase.hindi}</div>
                            <div className="flashcard-transliteration">{phrase.transliteration}</div>

                            <div className="flashcard-actions" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                <button
                                    className="btn btn-sm"
                                    onClick={handleSpeak}
                                    style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                                >
                                    🔊 Listen
                                </button>
                                <button
                                    className="btn btn-sm"
                                    onClick={handlePractice}
                                    style={{ background: 'rgba(245, 158, 11, 0.2)', color: 'var(--color-secondary)', padding: '0.5rem 1rem', fontSize: '0.9rem', border: '1px solid var(--color-secondary)' }}
                                >
                                    🎙 Practice
                                </button>
                            </div>
                        </>
                    ) : (
                        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="hindi-text" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{phrase.hindi}</div>
                            <PronunciationChecker targetText={phrase.audioText || phrase.hindi} />
                            <button
                                className="btn btn-sm"
                                onClick={handlePractice}
                                style={{ marginTop: '1rem', background: 'transparent', color: 'var(--text-muted)', fontSize: '0.8rem', padding: '0.2rem' }}
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
