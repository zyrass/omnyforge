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
        'introduction',
        {
            type: 'category',
            label: 'Concepts essentiels',
            items: ['concepts/variables', 'concepts/fonctions'],
        },
        {
            type: 'category',
            label: 'Algorithmie',
            items: [
                'algorithmie/introduction',
                'algorithmie/complexite',
                'algorithmie/structures-donnees',
                'algorithmie/tri-recherche',
            ],
        },
        {
            type: 'category',
            label: 'Outils de base',
            items: ['outils/git', 'outils/ide', 'outils/terminal'],
        },
    ],
};

export default sidebars;
