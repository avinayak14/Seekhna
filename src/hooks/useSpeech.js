import { useState, useEffect, useCallback } from 'react';

const useSpeech = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [recognition, setRecognition] = useState(null);
    const [voices, setVoices] = useState([]);

    // Initialize Speech Synthesis Voices
    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
        };

        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }, []);

    // Initialize Speech Recognition
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognitionInstance = new SpeechRecognition();
            recognitionInstance.continuous = false;
            recognitionInstance.interimResults = false;
            recognitionInstance.lang = 'hi-IN'; // Hindi India

            recognitionInstance.onstart = () => setIsListening(true);
            recognitionInstance.onend = () => setIsListening(false);
            recognitionInstance.onresult = (event) => {
                const text = event.results[0][0].transcript;
                setTranscript(text);
            };

            setRecognition(recognitionInstance);
        }
    }, []);

    const speak = useCallback((text) => {
        if (!window.speechSynthesis) return;

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'hi-IN';

        // Try to find a Hindi voice
        const hindiVoice = voices.find(v => v.lang.includes('hi'));
        if (hindiVoice) {
            utterance.voice = hindiVoice;
        }

        window.speechSynthesis.speak(utterance);
    }, [voices]);

    const startListening = useCallback(() => {
        if (recognition) {
            setTranscript('');
            recognition.start();
        } else {
            alert('Speech recognition is not supported in this browser. Try Chrome.');
        }
    }, [recognition]);

    const stopListening = useCallback(() => {
        if (recognition) {
            recognition.stop();
        }
    }, [recognition]);

    return {
        speak,
        startListening,
        stopListening,
        isListening,
        transcript,
        hasRecognitionSupport: !!recognition
    };
};

export default useSpeech;
