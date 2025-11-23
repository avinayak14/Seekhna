import React, { useState, useEffect, useRef } from 'react';
import useSpeech from '../hooks/useSpeech';
import './ScenarioChat.css';

const ScenarioChat = ({ scenario, onComplete }) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [messages, setMessages] = useState([]);
    const { speak, startListening, stopListening, isListening, transcript } = useSpeech();
    const messagesEndRef = useRef(null);

    const currentStep = scenario.steps[currentStepIndex];

    useEffect(() => {
        // Add initial message
        if (currentStepIndex === 0 && messages.length === 0) {
            addMessage(currentStep);
        }
    }, [currentStepIndex, messages.length, currentStep]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const addMessage = (step) => {
        setMessages(prev => [...prev, { ...step, timestamp: new Date() }]);
        if (step.speaker !== 'User') {
            // Auto-speak for partner
            setTimeout(() => speak(step.audioText || step.hindi), 500);
        }
    };

    const handleNext = () => {
        if (currentStepIndex < scenario.steps.length - 1) {
            const nextStep = scenario.steps[currentStepIndex + 1];
            setCurrentStepIndex(prev => prev + 1);
            addMessage(nextStep);
        } else {
            onComplete();
        }
    };

    const handleUserResponse = () => {
        // For now, we simulate the user "saying" the right thing or just advancing
        // In a real app, we'd validate the transcript
        handleNext();
    };

    return (
        <div className="scenario-chat-container">
            <div className="chat-header">
                <h3>{scenario.title}</h3>
                <p>{scenario.description}</p>
            </div>

            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.speaker === 'User' ? 'message-user' : 'message-partner'}`}>
                        <div className="message-bubble">
                            <div className="message-hindi">{msg.hindi}</div>
                            <div className="message-transliteration">{msg.transliteration}</div>
                            {msg.english && <div className="message-english">{msg.english}</div>}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="chat-controls">
                {currentStep && currentStep.speaker === 'User' ? (
                    <div className="user-controls">
                        <div className="hint-text">Hint: {currentStep.hint}</div>
                        <button className="btn btn-primary" onClick={handleUserResponse}>
                            ✅ I said it
                        </button>
                    </div>
                ) : (
                    <div className="partner-controls">
                        {currentStepIndex < scenario.steps.length - 1 && (
                            <button className="btn" onClick={handleNext}>
                                Next ➡
                            </button>
                        )}
                        {currentStepIndex === scenario.steps.length - 1 && (
                            <button className="btn btn-primary" onClick={onComplete}>
                                Finish Scenario 🎉
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScenarioChat;
