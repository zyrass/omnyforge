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
    infrastructureSidebar: [
        'introduction',
        {
            type: 'category',
            label: 'Administration Système',
            items: [
                'admin-sys/introduction',
                // 'languages/balisage/html',
                // 'languages/balisage/xml',
            ],
        },
        {
            type: 'category',
            label: 'Administration Réseau',
            items: [
                'admin-reseau/introduction',
                // 'languages/balisage/html',
                // 'languages/balisage/xml',
            ],
        },
        {
            type: 'category',
            label: 'Infrastructure as Code',
            items: [
                'iac/introduction',
                // 'languages/balisage/html',
                // 'languages/balisage/xml',
            ],
        },
    ],
};

export default sidebars;
