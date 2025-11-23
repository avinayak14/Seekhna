import { vocabulary } from './vocabulary';
import { templates } from './templates';

export const generateCorpus = () => {
    let corpus = [];
    let idCounter = 1;

    templates.forEach(tpl => {
        // Combinatorial Generation
        // This is a simplified nested loop approach. 
        // For 10k items, we need efficient loops.

        vocabulary.subjects.forEach(sub => {
            vocabulary.objects.forEach(obj => {
                vocabulary.verbs.forEach(vrb => {

                    // Pattern 3 needs Time
                    if (tpl.structure.includes('time')) {
                        vocabulary.times.forEach(time => {
                            const sentence = tpl.generate(sub, time, obj, vrb);
                            corpus.push({
                                id: `gen_${idCounter++}`,
                                level: tpl.level,
                                category: tpl.category,
                                ...sentence
                            });
                        });
                    } else {
                        // Patterns without Time
                        const sentence = tpl.generate(sub, null, obj, vrb);
                        corpus.push({
                            id: `gen_${idCounter++}`,
                            level: tpl.level,
                            category: tpl.category,
                            ...sentence
                        });
                    }

                });
            });
        });
    });

    // Shuffle the corpus to mix levels and categories
    for (let i = corpus.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [corpus[i], corpus[j]] = [corpus[j], corpus[i]];
    }

    return corpus;
};
