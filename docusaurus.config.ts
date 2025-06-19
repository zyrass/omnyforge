import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Import conditionnel pour éviter l'erreur au premier démarrage
let docusaurusVersion = '3.8.1'; // Version par défaut
try {
    const siteMetadata = require('@generated/site-metadata');
    docusaurusVersion = siteMetadata.docusaurusVersion;
} catch (e) {
    // Ignore l'erreur si le fichier n'existe pas encore
}

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'OmnyForge',
    tagline:
        'J’apprends sans relâche pour mieux transmettre. Ici, chaque ligne de savoir est une clé pour progresser.',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Omyvia', // Usually your GitHub org/user name.
    projectName: 'Omnyforge', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fr',
        locales: ['en', 'fr'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    id: 'bases-fondamentales',
                    path: 'docs/bases-fondamentales',
                    routeBasePath: 'bases-fondamentales',
                    sidebarPath: './config/sidebars.bases.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                // blog: {
                //     showReadingTime: true,
                //     feedOptions: {
                //         type: ['rss', 'atom'],
                //         xslt: false,
                //     },
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl:
                //         'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                //     // Useful options to enforce blogging best practices
                //     onInlineTags: 'warn',
                //     onInlineAuthors: 'warn',
                //     onUntruncatedBlogPosts: 'warn',
                // },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'admin-sys',
                path: 'docs/admin-sys',
                routeBasePath: 'admin-sys',
                sidebarPath: './config/sidebars.admin-sys.ts',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'admin-reseau',
                path: 'docs/admin-reseau',
                routeBasePath: 'admin-reseau',
                sidebarPath: './config/sidebars.admin-reseau.ts',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'developpements',
                path: 'docs/developpements',
                routeBasePath: 'developpements',
                sidebarPath: './config/sidebars.dev.ts',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'devsecops',
                path: 'docs/devsecops',
                routeBasePath: 'devsecops',
                sidebarPath: './config/sidebars.devsecops.ts',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'cloud',
                path: 'docs/cloud',
                routeBasePath: 'cloud',
                sidebarPath: './config/sidebars.cloud.ts',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'cybersecurity',
                path: 'docs/cybersecurity',
                routeBasePath: 'cybersecurity',
                sidebarPath: './config/sidebars.cyber.ts',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'glossaire-it',
                path: 'docs/glossaire-it',
                routeBasePath: 'glossaire-it',
                sidebarPath: './config/sidebars.glossaire-it.ts',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'it-akademy',
                path: 'docs/it-akademy',
                routeBasePath: 'it-akademy',
                sidebarPath: './config/sidebars.it-akademy.ts',
            },
        ],
    ],

    themes: ['@docusaurus/theme-mermaid'],

    markdown: {
        mermaid: true,
    },

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Omnyforge',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'basesSidebar',
                    docsPluginId: 'bases-fondamentales',
                    position: 'left',
                    label: 'Bases Fondamentales',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'adminSysSidebar',
                    docsPluginId: 'admin-sys',
                    position: 'left',
                    label: 'Administration Système',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'adminReseauSidebar',
                    docsPluginId: 'admin-reseau',
                    position: 'left',
                    label: 'Administration Réseau',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'devSidebar',
                    docsPluginId: 'developpements',
                    position: 'left',
                    label: 'Développements',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'cloudSidebar',
                    docsPluginId: 'cloud',
                    position: 'left',
                    label: 'Cloud',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'devsecopsSidebar',
                    docsPluginId: 'devsecops',
                    position: 'left',
                    label: 'DevSecOps',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'cyberSidebar',
                    docsPluginId: 'cybersecurity',
                    position: 'left',
                    label: 'Cybersécurité',
                },

                {
                    type: 'docSidebar',
                    sidebarId: 'glossaireItSidebar',
                    docsPluginId: 'glossaire-it',
                    position: 'right',
                    label: 'Glossaire IT',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'itAkademySidebar',
                    docsPluginId: 'it-akademy',
                    position: 'right',
                    label: 'IT-Akademy',
                },
                // { to: '/blog', label: 'Blog', position: 'right' },
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Documentations',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Communauté',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'X',
                            href: 'https://x.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'Plus',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Ce projet est construit avec Docusaurus en version ${docusaurusVersion}.`,
        },
        prism: {
            theme: prismThemes.nightOwl,
            darkTheme: prismThemes.nightOwlLight,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
