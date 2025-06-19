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
            label: 'Algorithmie',
            items: [
                'algorithmie/concepts',
                'algorithmie/complexite-big-o',
                'algorithmie/structures-donnees',
                'algorithmie/algorithmes-tableaux-listes',
                'algorithmie/algorithmes-graphes',
            ],
        },
        {
            type: 'category',
            label: 'Programmation',
            items: [
                'programmation/paradigmes',
                'programmation/concepts-fondamentaux',
                'programmation/gestion-memoire',
                'programmation/maitrise-langage',
            ],
        },
        {
            type: 'category',
            label: 'Mathématiques',
            items: [
                'mathematiques/logique-booleenne',
                'mathematiques/theorie-des-graphes',
                'mathematiques/probabilites',
                'mathematiques/mathematiques-discretes',
            ],
        },
        {
            type: 'category',
            label: 'Outils de base',
            items: [
                'outils/ide',
                'outils/markdown',
                'outils/git',
                'outils/terminal',
            ],
        },
    ],
};

export default sidebars;
