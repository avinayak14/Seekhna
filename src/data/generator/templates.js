export const templates = [
    // --- PATTERN 1: Simple Present (Subject + Object + Verb) ---
    // Ex: Main aam khata hoon (I eat mango)
    {
        id: 'tpl_simple_present',
        level: 2,
        category: 'Grammar',
        structure: ['subject', 'object', 'verb'],
        generate: (sub, obj, vrb) => {
            // Basic gender logic (simplified)
            const isFemale = sub.eng === 'Priya' || sub.eng === 'Anjali';
            const verbForm = isFemale ? vrb.hindi.split('/')[1] : vrb.hindi.split('/')[0];
            const verbTrans = isFemale ? vrb.trans.split('/')[1] : vrb.trans.split('/')[0];

            let auxiliary = 'है (hai)';
            let auxTrans = 'hai';

            if (sub.eng === 'I') {
                auxiliary = 'हूँ';
                auxTrans = 'hoon';
            } else if (sub.eng === 'You' || sub.eng === 'We' || sub.eng === 'They') {
                auxiliary = 'हैं';
                auxTrans = 'hain';
            }

            return {
                hindi: `${sub.hindi} ${obj.hindi} ${verbForm} ${auxiliary}`,
                transliteration: `${sub.trans} ${obj.trans} ${verbTrans} ${auxTrans}`,
                english: `${sub.eng} ${vrb.eng} ${obj.eng}`
            };
        }
    },

    // --- PATTERN 2: Present Continuous (Subject + Object + Verbing) ---
    // Ex: Main paani pee raha hoon (I am drinking water)
    {
        id: 'tpl_present_cont',
        level: 3,
        category: 'Grammar',
        structure: ['subject', 'object', 'verb'],
        generate: (sub, obj, vrb) => {
            const isFemale = sub.eng === 'Priya' || sub.eng === 'Anjali';
            const rootVerb = vrb.root; // e.g., khana -> kha
            const stem = rootVerb.replace('na', '');

            const raha = isFemale ? 'रही' : 'रहा';
            const rahaTrans = isFemale ? 'rahi' : 'raha';

            let auxiliary = 'है';
            let auxTrans = 'hai';
            let engAux = 'is';

            if (sub.eng === 'I') {
                auxiliary = 'हूँ';
                auxTrans = 'hoon';
                engAux = 'am';
            } else if (sub.eng === 'You' || sub.eng === 'We' || sub.eng === 'They') {
                auxiliary = 'हैं';
                auxTrans = 'hain';
                engAux = 'are';
                if (sub.eng !== 'You') { // Plural logic for raha -> rahe
                    // Simplified: We/They usually plural
                }
            }

            return {
                hindi: `${sub.hindi} ${obj.hindi} ${stem} ${raha} ${auxiliary}`,
                transliteration: `${sub.trans} ${obj.trans} ${stem} ${rahaTrans} ${auxTrans}`,
                english: `${sub.eng} ${engAux} ${vrb.eng.replace(/s$/, '')}ing ${obj.eng}` // simple heuristic
            };
        }
    },

    // --- PATTERN 3: Future Simple (Subject + Time + Object + Verb) ---
    // Ex: Main kal school jaunga (I will go to school tomorrow)
    {
        id: 'tpl_future_simple',
        level: 3,
        category: 'Future',
        structure: ['subject', 'time', 'object', 'verb'],
        generate: (sub, time, obj, vrb) => {
            const isFemale = sub.eng === 'Priya' || sub.eng === 'Anjali';
            const rootVerb = vrb.root.replace('na', '');

            let suffix = 'एगा';
            let suffixTrans = 'ega';

            if (sub.eng === 'I') {
                suffix = isFemale ? 'ऊँगी' : 'ऊँगा';
                suffixTrans = isFemale ? 'ungi' : 'unga';
            } else if (sub.eng === 'You' || sub.eng === 'We' || sub.eng === 'They') {
                suffix = 'एंगे';
                suffixTrans = 'enge';
            } else {
                suffix = isFemale ? 'एगी' : 'एगा';
                suffixTrans = isFemale ? 'egi' : 'ega';
            }

            return {
                hindi: `${sub.hindi} ${time.hindi} ${obj.hindi} ${rootVerb}${suffix}`,
                transliteration: `${sub.trans} ${time.trans} ${obj.trans} ${rootVerb}${suffixTrans}`,
                english: `${sub.eng} will ${vrb.eng.replace(/s$/, '')} ${obj.eng} ${time.eng}`
            };
        }
    }
];
