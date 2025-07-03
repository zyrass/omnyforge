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
    basesSidebar: [
        'preambule',
        'introduction',
        {
            type: 'category',
            label: 'Outils de base',
            items: [
                {
                    type: 'category',
                    label: 'Markdown',
                    items: [
                        'outils/markdown/introduction',
                        'outils/markdown/fondamentaux',
                        'outils/markdown/intermediaire',
                    ],
                },
                {
                    type: 'category',
                    label: 'Git',
                    items: [
                        'outils/git/introduction',
                        'outils/git/fondamentaux',
                    ],
                },
            ],
        },
    ],
};

export default sidebars;
