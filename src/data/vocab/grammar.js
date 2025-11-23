export const grammar = {
    id: 'grammar',
    title: 'Grammar & Verbs',
    description: 'Building blocks of sentences.',
    phrases: [
        // Pronouns
        { id: 'g_pro_i', hindi: 'मैं', transliteration: 'Main', english: 'I', audioText: 'मैं' },
        { id: 'g_pro_you', hindi: 'आप', transliteration: 'Aap', english: 'You (Formal)', audioText: 'आप' },
        { id: 'g_pro_we', hindi: 'हम', transliteration: 'Hum', english: 'We', audioText: 'हम' },
        { id: 'g_pro_they', hindi: 'वे', transliteration: 'Ve', english: 'They', audioText: 'वे' },

        // Verbs
        { id: 'g_vrb_go', hindi: 'जाना', transliteration: 'Jaana', english: 'To Go', audioText: 'जाना' },
        { id: 'g_vrb_come', hindi: 'आना', transliteration: 'Aana', english: 'To Come', audioText: 'आना' },
        { id: 'g_vrb_eat', hindi: 'खाना', transliteration: 'Khana', english: 'To Eat', audioText: 'खाना' },
        { id: 'g_vrb_drink', hindi: 'पीना', transliteration: 'Peena', english: 'To Drink', audioText: 'पीना' },
        { id: 'g_vrb_speak', hindi: 'बोलना', transliteration: 'Bolna', english: 'To Speak', audioText: 'बोलना' },
        { id: 'g_vrb_listen', hindi: 'सुनना', transliteration: 'Sunna', english: 'To Listen', audioText: 'सुनना' },

        // Tenses (Examples)
        { id: 'g_tns_pres', hindi: 'मैं जाता हूँ', transliteration: 'Main jaata hoon', english: 'I go', audioText: 'मैं जाता हूँ' },
        { id: 'g_tns_past', hindi: 'मैं गया था', transliteration: 'Main gaya tha', english: 'I went', audioText: 'मैं गया था' },
        { id: 'g_tns_fut', hindi: 'मैं जाऊँगा', transliteration: 'Main jaunga', english: 'I will go', audioText: 'मैं जाऊँगा' }
    ]
};
