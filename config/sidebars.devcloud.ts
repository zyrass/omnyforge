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
    devCloudSidebar: [
        'introduction',
        {
            type: 'category',
            label: 'Stacks',
            items: [
                {
                    type: 'category',
                    label: 'TALL',
                    items: [
                        {
                            type: 'category',
                            label: 'Apprentissage Progressif',
                            items: [
                                'stacks/tall/apprentissage-progressif/feuille-de-route',
                                'stacks/tall/apprentissage-progressif/fondations',
                                'stacks/tall/apprentissage-progressif/interface-laravel-avec-vues',
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default sidebars;
