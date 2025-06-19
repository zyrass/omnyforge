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
    devsecopsSidebar: [
        'introduction',
        {
            type: 'category',
            label: 'Languages',
            items: [
                {
                    type: 'category',
                    label: 'Balisage',
                    items: [
                        'languages/balisage/markdown',
                        'languages/balisage/html',
                        'languages/balisage/xml',
                    ],
                },
                {
                    type: 'category',
                    label: 'Frontend',
                    items: [
                        'languages/frontend/css',
                        'languages/frontend/javascript',
                        'languages/frontend/typescript',
                    ],
                },
                {
                    type: 'category',
                    label: 'Backend',
                    items: [
                        'languages/backend/python',
                        'languages/backend/php',
                        'languages/backend/nodejs',
                        'languages/backend/rust',
                        'languages/backend/go',
                    ],
                },
                {
                    type: 'category',
                    label: 'Bases de données',
                    items: [
                        {
                            type: 'category',
                            label: 'SQL',
                            items: [
                                'databases/sql/mysql-maria',
                                'databases/sql/postgresql',
                                'databases/sql/sqlite',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'NoSQL',
                            items: [
                                'databases/nosql/mongodb',
                                'databases/nosql/redis',
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Frameworks',
            items: [
                {
                    type: 'category',
                    label: 'Librairies',
                    items: [
                        'frameworks/librairies/jquery',
                        'frameworks/librairies/react',
                    ],
                },
                {
                    type: 'category',
                    label: 'Frontend',
                    items: ['frameworks/frontend/angular'],
                },
                {
                    type: 'category',
                    label: 'Backend',
                    items: [
                        'frameworks/backend/express',
                        'frameworks/backend/laravel',
                        'frameworks/backend/symfony',
                        'frameworks/backend/django',
                        'frameworks/backend/flask',
                    ],
                },
            ],
        },
    ],
};

export default sidebars;
