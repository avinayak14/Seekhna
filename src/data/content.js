import { categories } from './vocab';

export { categories };

export const scenarios = [
    {
        id: 's1',
        title: 'Meeting a Relative',
        description: 'Practice greeting an elder relative.',
        steps: [
            {
                id: 1,
                speaker: 'Relative',
                hindi: 'अरे बेटा, कैसे हो?',
                transliteration: 'Are beta, kaise ho?',
                english: 'Hey child, how are you?',
                audioText: 'अरे बेटा, कैसे हो'
            },
            {
                id: 2,
                speaker: 'User',
                hint: 'Say: I am fine, uncle/aunt.',
                expected: ['main theek hoon', 'theek hoon', 'main accha hoon'],
                hindi: 'मैं ठीक हूँ, अंकल/आंटी',
                transliteration: 'Main theek hoon, uncle/aunty'
            },
            {
                id: 3,
                speaker: 'Relative',
                hindi: 'घर पर सब कैसे हैं?',
                transliteration: 'Ghar par sab kaise hain?',
                english: 'How is everyone at home?',
                audioText: 'घर पर सब कैसे हैं'
            },
            {
                id: 4,
                speaker: 'User',
                hint: 'Say: Everyone is fine.',
                expected: ['sab theek hain', 'sab badhiya hain'],
                hindi: 'सब ठीक हैं',
                transliteration: 'Sab theek hain'
            }
        ]
    }
];
