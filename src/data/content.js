export const categories = [
    {
        id: 'greetings',
        title: 'Greetings & Basics',
        description: 'Essential phrases for starting a conversation.',
        phrases: [
            {
                id: 'g1',
                hindi: 'नमस्ते',
                transliteration: 'Namaste',
                english: 'Hello / Greetings',
                audioText: 'नमस्ते'
            },
            {
                id: 'g2',
                hindi: 'आप कैसे हैं?',
                transliteration: 'Aap kaise hain?',
                english: 'How are you? (Formal)',
                audioText: 'आप कैसे हैं'
            },
            {
                id: 'g3',
                hindi: 'मैं ठीक हूँ, धन्यवाद',
                transliteration: 'Main theek hoon, dhanyavaad',
                english: 'I am fine, thank you',
                audioText: 'मैं ठीक हूँ, धन्यवाद'
            },
            {
                id: 'g4',
                hindi: 'फिर मिलेंगे',
                transliteration: 'Phir milenge',
                english: 'See you again',
                audioText: 'फिर मिलेंगे'
            }
        ]
    },
    {
        id: 'family',
        title: 'Family & Relatives',
        description: 'Connecting with family members.',
        phrases: [
            {
                id: 'f1',
                hindi: 'यह मेरे पिताजी हैं',
                transliteration: 'Yeh mere pitaji hain',
                english: 'This is my father',
                audioText: 'यह मेरे पिताजी हैं'
            },
            {
                id: 'f2',
                hindi: 'आपकी माताजी कैसी हैं?',
                transliteration: 'Aapki mataji kaisi hain?',
                english: 'How is your mother?',
                audioText: 'आपकी माताजी कैसी हैं'
            },
            {
                id: 'f3',
                hindi: 'बड़ा भाई / छोटा भाई',
                transliteration: 'Bada bhai / Chota bhai',
                english: 'Elder brother / Younger brother',
                audioText: 'बड़ा भाई, छोटा भाई'
            }
        ]
    },
    {
        id: 'professional',
        title: 'Professional Intro',
        description: 'Introducing yourself in a work setting.',
        phrases: [
            {
                id: 'p1',
                hindi: 'मेरा नाम [Name] है',
                transliteration: 'Mera naam [Name] hai',
                english: 'My name is [Name]',
                audioText: 'मेरा नाम है'
            },
            {
                id: 'p2',
                hindi: 'मैं एक सॉफ्टवेयर इंजीनियर हूँ',
                transliteration: 'Main ek software engineer hoon',
                english: 'I am a software engineer',
                audioText: 'मैं एक सॉफ्टवेयर इंजीनियर हूँ'
            },
            {
                id: 'p3',
                hindi: 'आपसे मिलकर खुशी हुई',
                transliteration: 'Aapse milkar khushi hui',
                english: 'Pleased to meet you',
                audioText: 'आपसे मिलकर खुशी हुई'
            }
        ]
    }
];

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
