// Levels:
// 1: Absolute Beginner (Words, Greetings)
// 2: Beginner (Simple Sentences)
// 3: Intermediate (Conversational)
// 4: Upper Intermediate (Complex Grammar)
// 5: Advanced/Fluent (Idioms, News, Abstract)

export const corpus = [
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

    // --- LEVEL 2: BEGINNER (Simple Sentences) ---
    { id: 'l2_1', level: 2, category: 'Intro', hindi: 'मेरा नाम राज है', transliteration: 'Mera naam Raj hai', english: 'My name is Raj' },
    { id: 'l2_2', level: 2, category: 'Intro', hindi: 'मैं भारत से हूँ', transliteration: 'Main Bharat se hoon', english: 'I am from India' },
    { id: 'l2_3', level: 2, category: 'Needs', hindi: 'मुझे पानी चाहिए', transliteration: 'Mujhe paani chahiye', english: 'I want water' },
    { id: 'l2_4', level: 2, category: 'Needs', hindi: 'मुझे भूख लगी है', transliteration: 'Mujhe bhookh lagi hai', english: 'I am hungry' },
    { id: 'l2_5', level: 2, category: 'Travel', hindi: 'बाथरूम कहाँ है?', transliteration: 'Bathroom kahan hai?', english: 'Where is the bathroom?' },
    { id: 'l2_6', level: 2, category: 'Travel', hindi: 'यह कितने का है?', transliteration: 'Yeh kitne ka hai?', english: 'How much is this?' },
    { id: 'l2_7', level: 2, category: 'Feelings', hindi: 'मैं खुश हूँ', transliteration: 'Main khush hoon', english: 'I am happy' },
    { id: 'l2_8', level: 2, category: 'Feelings', hindi: 'मैं थक गया हूँ', transliteration: 'Main thak gaya hoon', english: 'I am tired' },
    { id: 'l2_9', level: 2, category: 'Action', hindi: 'चलो चलते हैं', transliteration: 'Chalo chalte hain', english: 'Let\'s go' },
    { id: 'l2_10', level: 2, category: 'Action', hindi: 'रुको', transliteration: 'Ruko', english: 'Stop' },
    { id: 'l2_11', level: 2, category: 'Family', hindi: 'यह मेरी माँ है', transliteration: 'Yeh meri maa hai', english: 'This is my mother' },
    { id: 'l2_12', level: 2, category: 'Family', hindi: 'मेरे दो भाई हैं', transliteration: 'Mere do bhai hain', english: 'I have two brothers' },
    { id: 'l2_13', level: 2, category: 'Time', hindi: 'अभी क्या समय हुआ है?', transliteration: 'Abhi kya samay hua hai?', english: 'What time is it now?' },
    { id: 'l2_14', level: 2, category: 'Time', hindi: 'मुझे देर हो रही है', transliteration: 'Mujhe der ho rahi hai', english: 'I am getting late' },
    { id: 'l2_15', level: 2, category: 'Weather', hindi: 'आज बहुत गर्मी है', transliteration: 'Aaj bahut garmi hai', english: 'It is very hot today' },

    // --- LEVEL 3: INTERMEDIATE (Conversational) ---
    { id: 'l3_1', level: 3, category: 'Social', hindi: 'आपसे मिलकर अच्छा लगा', transliteration: 'Aapse milkar accha laga', english: 'It was nice meeting you' },
    { id: 'l3_2', level: 3, category: 'Social', hindi: 'आप क्या काम करते हैं?', transliteration: 'Aap kya kaam karte hain?', english: 'What work do you do?' },
    { id: 'l3_3', level: 3, category: 'Social', hindi: 'क्या आप मेरे साथ चलेंगे?', transliteration: 'Kya aap mere saath chalenge?', english: 'Will you come with me?' },
    { id: 'l3_4', level: 3, category: 'Food', hindi: 'खाने में मिर्च कम डालना', transliteration: 'Khane mein mirch kam daalna', english: 'Put less chili in the food' },
    { id: 'l3_5', level: 3, category: 'Food', hindi: 'क्या यह शाकाहारी है?', transliteration: 'Kya yeh shakahari hai?', english: 'Is this vegetarian?' },
    { id: 'l3_6', level: 3, category: 'Travel', hindi: 'स्टेशन जाने का रास्ता कौन सा है?', transliteration: 'Station jaane ka raasta kaun sa hai?', english: 'Which is the way to the station?' },
    { id: 'l3_7', level: 3, category: 'Travel', hindi: 'क्या आप धीरे बोल सकते हैं?', transliteration: 'Kya aap dheere bol sakte hain?', english: 'Can you speak slowly?' },
    { id: 'l3_8', level: 3, category: 'Health', hindi: 'मेरी तबीयत ठीक नहीं है', transliteration: 'Meri tabiyat theek nahi hai', english: 'I am not feeling well' },
    { id: 'l3_9', level: 3, category: 'Health', hindi: 'मुझे सर दर्द हो रहा है', transliteration: 'Mujhe sar dard ho raha hai', english: 'I have a headache' },
    { id: 'l3_10', level: 3, category: 'Shopping', hindi: 'क्या आप इसका दाम कम करेंगे?', transliteration: 'Kya aap iska daam kam karenge?', english: 'Will you lower the price?' },
    { id: 'l3_11', level: 3, category: 'Shopping', hindi: 'मुझे यह रंग पसंद नहीं है', transliteration: 'Mujhe yeh rang pasand nahi hai', english: 'I don\'t like this color' },
    { id: 'l3_12', level: 3, category: 'Plans', hindi: 'हम कल फिल्म देखने जाएंगे', transliteration: 'Hum kal film dekhne jayenge', english: 'We will go to watch a movie tomorrow' },
    { id: 'l3_13', level: 3, category: 'Plans', hindi: 'क्या तुम फ्री हो?', transliteration: 'Kya tum free ho?', english: 'Are you free?' },
    { id: 'l3_14', level: 3, category: 'Opinion', hindi: 'मुझे लगता है यह सही है', transliteration: 'Mujhe lagta hai yeh sahi hai', english: 'I think this is correct' },
    { id: 'l3_15', level: 3, category: 'Opinion', hindi: 'आपकी क्या राय है?', transliteration: 'Aapki kya raay hai?', english: 'What is your opinion?' },

    // --- LEVEL 4: UPPER INTERMEDIATE (Complex Grammar) ---
    { id: 'l4_1', level: 4, category: 'Grammar', hindi: 'अगर बारिश हुई, तो हम नहीं जाएंगे', transliteration: 'Agar baarish hui, toh hum nahi jayenge', english: 'If it rains, we will not go' },
    { id: 'l4_2', level: 4, category: 'Grammar', hindi: 'जब तक तुम नहीं आओगे, मैं इंतज़ार करूँगा', transliteration: 'Jab tak tum nahi aaoge, main intezaar karunga', english: 'Until you come, I will wait' },
    { id: 'l4_3', level: 4, category: 'Work', hindi: 'मुझे यह प्रोजेक्ट कल तक खत्म करना है', transliteration: 'Mujhe yeh project kal tak khatam karna hai', english: 'I have to finish this project by tomorrow' },
    { id: 'l4_4', level: 4, category: 'Work', hindi: 'क्या हम मीटिंग को अगले हफ्ते के लिए टाल सकते हैं?', transliteration: 'Kya hum meeting ko agle hafte ke liye taal sakte hain?', english: 'Can we postpone the meeting to next week?' },
    { id: 'l4_5', level: 4, category: 'Story', hindi: 'उसने कहा कि वह व्यस्त था', transliteration: 'Usne kaha ki woh vyast tha', english: 'He said that he was busy' },
    { id: 'l4_6', level: 4, category: 'Story', hindi: 'बचपन में मैं बहुत शरारती था', transliteration: 'Bachpan mein main bahut sharaarti tha', english: 'In childhood, I was very naughty' },
    { id: 'l4_7', level: 4, category: 'Emotion', hindi: 'मुझे तुम्हारी बहुत याद आ रही थी', transliteration: 'Mujhe tumhari bahut yaad aa rahi thi', english: 'I was missing you a lot' },
    { id: 'l4_8', level: 4, category: 'Emotion', hindi: 'वह अपनी सफलता पर बहुत खुश है', transliteration: 'Woh apni safalta par bahut khush hai', english: 'He is very happy about his success' },
    { id: 'l4_9', level: 4, category: 'Hypothetical', hindi: 'अगर मेरे पास पैसे होते, तो मैं दुनिया घूमता', transliteration: 'Agar mere paas paise hote, toh main duniya ghoomta', english: 'If I had money, I would travel the world' },
    { id: 'l4_10', level: 4, category: 'Passive', hindi: 'यह काम किया जा चुका है', transliteration: 'Yeh kaam kiya ja chuka hai', english: 'This work has been done' },

    // --- LEVEL 5: ADVANCED/FLUENT (Idioms, News, Abstract) ---
    { id: 'l5_1', level: 5, category: 'Idioms', hindi: 'दाल में कुछ काला है', transliteration: 'Daal mein kuch kaala hai', english: 'Something is fishy (Lit: Something black in the lentils)' },
    { id: 'l5_2', level: 5, category: 'Idioms', hindi: 'नाच न जाने आँगन टेढ़ा', transliteration: 'Naach na jaane aangan tedha', english: 'A bad workman blames his tools' },
    { id: 'l5_3', level: 5, category: 'Idioms', hindi: 'उसकी बातों ने मेरे जले पर नमक छिड़क दिया', transliteration: 'Uski baaton ne mere jale par namak chidak diya', english: 'His words rubbed salt in my wounds' },
    { id: 'l5_4', level: 5, category: 'News', hindi: 'सरकार ने नई शिक्षा नीति की घोषणा की है', transliteration: 'Sarkar ne nayi shiksha niti ki ghoshna ki hai', english: 'The government has announced a new education policy' },
    { id: 'l5_5', level: 5, category: 'News', hindi: 'अर्थव्यवस्था में सुधार के संकेत मिल रहे हैं', transliteration: 'Arthvyavastha mein sudhaar ke sanket mil rahe hain', english: 'Signs of improvement are being seen in the economy' },
    { id: 'l5_6', level: 5, category: 'Abstract', hindi: 'सफलता का कोई शॉर्टकट नहीं होता', transliteration: 'Safalta ka koi shortcut nahi hota', english: 'There is no shortcut to success' },
    { id: 'l5_7', level: 5, category: 'Abstract', hindi: 'समय ही सबसे बड़ा मरहम है', transliteration: 'Samay hi sabse bada marham hai', english: 'Time is the greatest healer' },
    { id: 'l5_8', level: 5, category: 'Formal', hindi: 'कृपया इस मामले पर तत्काल ध्यान दें', transliteration: 'Kripaya is maamle par tatkaal dhyaan dein', english: 'Please pay immediate attention to this matter' },
    { id: 'l5_9', level: 5, category: 'Formal', hindi: 'मैं आपके प्रस्ताव से सहमत नहीं हो सकता', transliteration: 'Main aapke prastaav se sehmat nahi ho sakta', english: 'I cannot agree with your proposal' },
    { id: 'l5_10', level: 5, category: 'Culture', hindi: 'अतिथि देवो भव', transliteration: 'Atithi Devo Bhava', english: 'The guest is equivalent to God' }
];
