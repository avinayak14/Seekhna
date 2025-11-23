import React, { useEffect, useState } from 'react';
import useSpeech from '../hooks/useSpeech';

const PronunciationChecker = ({ targetText, onClose }) => {
    const { startListening, stopListening, isListening, transcript, hasRecognitionSupport } = useSpeech();
    const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect', null

    useEffect(() => {
        if (transcript) {
            // Simple fuzzy matching or direct comparison
            // Remove punctuation and extra spaces
            const cleanTranscript = transcript.trim();
            const cleanTarget = targetText.trim();

            // Check if target is contained in transcript or vice versa (for partial matches)
            // or if they are close enough.
            // For now, let's just check if the transcript contains the key words or is a close match.
            // Since Hindi STT might be tricky, we'll be lenient.

            if (cleanTranscript.includes(cleanTarget) || cleanTarget.includes(cleanTranscript)) {
                setFeedback('correct');
            } else {
                setFeedback('incorrect');
            }
        }
    }, [transcript, targetText]);

    const handleToggleRecord = (e) => {
        e.stopPropagation();
        if (isListening) {
            stopListening();
        } else {
            setFeedback(null);
            startListening();
        }
    };

    if (!hasRecognitionSupport) {
        return <div style={{ color: 'red', fontSize: '0.8rem' }}>Browser not supported</div>;
    }

    return (
        <div
            className="pronunciation-checker"
            onClick={(e) => e.stopPropagation()}
            style={{
                marginTop: '1rem',
                padding: '1rem',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '0.5rem',
                width: '100%'
            }}
        >
            <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                {isListening ? 'Listening...' : 'Tap mic to speak'}
            </div>

            <button
                className={`btn btn-circle ${isListening ? 'pulse' : ''}`}
                onClick={handleToggleRecord}
                style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: isListening ? '#ef4444' : 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                }}
            >
                {isListening ? '⏹' : '🎙'}
            </button>

            {transcript && (
                <div style={{ marginTop: '1rem', fontSize: '1rem' }}>
                    You said: <span className="hindi-text" style={{ color: 'white' }}>{transcript}</span>
                </div>
            )}

            {feedback === 'correct' && (
                <div style={{ color: '#4ade80', marginTop: '0.5rem', fontWeight: 'bold' }}>
                    ✅ Excellent!
                </div>
            )}

            {feedback === 'incorrect' && (
                <div style={{ color: '#f87171', marginTop: '0.5rem' }}>
                    ❌ Try again
                </div>
            )}
        </div>
    );
};

export default PronunciationChecker;
