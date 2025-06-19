import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// Ce code s'exécute dans Node.js - N'utilisez pas de code côté client ici (APIs navigateur, JSX...)

/**
 * Créer une sidebar vous permet de :
 *  - créer un groupe ordonné de docs
 *  - afficher une sidebar pour chaque doc de ce groupe
 *  - fournir une navigation suivant/précédent
 *
 * Les sidebars peuvent être générées depuis le système de fichiers, ou explicitement définies ici.
 * Créez autant de sidebars que vous voulez.
 */

const sidebars: SidebarsConfig = {
    itAkademySidebar: [
        'introduction',
        {
            type: 'category',
            label: 'CEC3C',
            items: [
                {
                    type: 'category',
                    label: 'Préparation, aux soutenances',
                    items: ['preparation-soutenances/t0'],
                },
                {
                    type: 'category',
                    label: 'Cours',
                    items: [
                        {
                            type: 'category',
                            label: 'Gouvernance',
                            items: ['cours/gouvernance/t60'],
                        },
                        {
                            type: 'category',
                            label: 'Technique',
                            items: [
                                'cours/technique/s2',
                                'cours/technique/s9',
                                'cours/technique/s10',
                                'cours/technique/s16',
                                'cours/technique/s40',
                                'cours/technique/s41',
                                'cours/technique/s42',
                                'cours/technique/s43',
                                'cours/technique/s44',
                                'cours/technique/s45',
                                'cours/technique/e51',
                                'cours/technique/e52',
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default sidebars;
