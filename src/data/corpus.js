import { generateCorpus } from './generator/engine';

// Manual Seed Corpus (High quality, hand-crafted)
const seedCorpus = [
    // --- LEVEL 1: ABSOLUTE BEGINNER ---
    { id: 'l1_1', level: 1, category: 'Greetings', hindi: 'नमस्ते', transliteration: 'Namaste', english: 'Hello / Greetings' },
    { id: 'l1_2', level: 1, category: 'Greetings', hindi: 'धन्यवाद', transliteration: 'Dhanyavaad', english: 'Thank you' },
    { id: 'l1_3', level: 1, category: 'Greetings', hindi: 'हाँ', transliteration: 'Haan', english: 'Yes' },
    { id: 'l1_4', level: 1, category: 'Greetings', hindi: 'नहीं', transliteration: 'Nahi', english: 'No' },
    { id: 'l1_5', level: 1, category: 'Basics', hindi: 'मैं', transliteration: 'Main', english: 'I' },
    { id: 'l1_6', level: 1, category: 'Basics', hindi: 'आप', transliteration: 'Aap', english: 'You (Formal)' },
    { id: 'l1_7', level: 1, category: 'Basics', hindi: 'पानी', transliteration: 'Paani', english: 'Water' },
    { id: 'l1_8', level: 1, category: 'Basics', hindi: 'खाना', transliteration: 'Khana', english: 'Food' },
    { id: 'l1_9', level: 1, category: 'Basics', hindi: 'घर', transliteration: 'Ghar', english: 'Home' },
    { id: 'l1_10', level: 1, category: 'Basics', hindi: 'आज', transliteration: 'Aaj', english: 'Today' },
    { id: 'l1_11', level: 1, category: 'Basics', hindi: 'कल', transliteration: 'Kal', english: 'Tomorrow / Yesterday' },
    { id: 'l1_12', level: 1, category: 'Numbers', hindi: 'एक', transliteration: 'Ek', english: 'One' },
    { id: 'l1_13', level: 1, category: 'Numbers', hindi: 'दो', transliteration: 'Do', english: 'Two' },
    { id: 'l1_14', level: 1, category: 'Numbers', hindi: 'तीन', transliteration: 'Teen', english: 'Three' },
    { id: 'l1_15', level: 1, category: 'Questions', hindi: 'क्या?', transliteration: 'Kya?', english: 'What?' },
    { id: 'l1_16', level: 1, category: 'Questions', hindi: 'कौन?', transliteration: 'Kaun?', english: 'Who?' },
    { id: 'l1_17', level: 1, category: 'Questions', hindi: 'कहाँ?', transliteration: 'Kahan?', english: 'Where?' },
    { id: 'l1_18', level: 1, category: 'Questions', hindi: 'क्यों?', transliteration: 'Kyon?', english: 'Why?' },
    { id: 'l1_19', level: 1, category: 'Questions', hindi: 'कब?', transliteration: 'Kab?', english: 'When?' },
    { id: 'l1_20', level: 1, category: 'Questions', hindi: 'कैसे?', transliteration: 'Kaise?', english: 'How?' },
    // ... (Keep existing manual entries if desired)
];

// Generate Massive Corpus
const generatedCorpus = generateCorpus();

// Export Combined Corpus
export const corpus = [...seedCorpus, ...generatedCorpus];
