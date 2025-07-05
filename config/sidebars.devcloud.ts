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
                        'stacks/tall/presentation',
                        {
                            type: 'category',
                            label: 'Apprentissage Progressif',
                            items: [
                                'stacks/tall/apprentissage-progressif/feuille-de-route',
                                'stacks/tall/apprentissage-progressif/fondations',
                                'stacks/tall/apprentissage-progressif/interface-laravel-avec-vues',
                                {
                                    type: 'category',
                                    label: 'Étape 3 - Réactivité',
                                    items: [
                                        'stacks/tall/apprentissage-progressif/etape3/livewire-pur',
                                        'stacks/tall/apprentissage-progressif/etape3/alpinejs-pur',
                                        'stacks/tall/apprentissage-progressif/etape3/hybrid',
                                    ],
                                },
                                'stacks/tall/apprentissage-progressif/production',
                                // {
                                //     type: 'category',
                                //     label: 'Bonus - Authentification',
                                //     items: [
                                //         'stacks/tall/apprentissage-progressif/bonus/introduction',
                                //         {
                                //             type: 'category',
                                //             label: 'Breeze',
                                //             items: [
                                //                 'stacks/tall/apprentissage-progressif/bonus/breeze/livewire',
                                //                 'stacks/tall/apprentissage-progressif/bonus/breeze/alpinejs',
                                //                 'stacks/tall/apprentissage-progressif/bonus/breeze/hybrid',
                                //             ],
                                //         },
                                //         {
                                //             type: 'category',
                                //             label: 'Jetstream',
                                //             items: [
                                //                 'stacks/tall/apprentissage-progressif/bonus/jetstream/livewire',
                                //                 'stacks/tall/apprentissage-progressif/bonus/jetstream/alpinejs',
                                //                 'stacks/tall/apprentissage-progressif/bonus/jetstream/hybrid',
                                //             ],
                                //         },
                                //         {
                                //             type: 'category',
                                //             label: 'Sanctum',
                                //             items: [
                                //                 'stacks/tall/apprentissage-progressif/bonus/sanctum/livewire',
                                //                 'stacks/tall/apprentissage-progressif/bonus/sanctum/alpinejs',
                                //                 'stacks/tall/apprentissage-progressif/bonus/sanctum/hybrid',
                                //             ],
                                //         },
                                //     ],
                                // },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default sidebars;
