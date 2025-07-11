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
        "Laboratoire d'expertise technique où l'apprentissage continu forge des solutions durables et innovantes.",
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

    onBrokenLinks: 'warn', // throw à remettre pour détecter les liens cassés
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr'],
    },

    // https://prismjs.com/#supported-languages
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
                blog: {
                    showReadingTime: true,
                    postsPerPage: 5,
                    blogSidebarCount: 'ALL',
                    blogSidebarTitle: 'All posts',
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: false,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
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
                id: 'infrastructure',
                path: 'docs/infrastructure',
                routeBasePath: 'infrastructure',
                sidebarPath: './config/sidebars.infrastructure.ts',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'devcloud',
                path: 'docs/dev-cloud',
                routeBasePath: 'devcloud',
                sidebarPath: './config/sidebars.devcloud.ts',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'cyber-devsecops',
                path: 'docs/cybersecurity-devsecops',
                routeBasePath: 'cyber-devsecops',
                sidebarPath: './config/sidebars.cyber-devsecops.ts',
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
                id: 'homelabs',
                path: 'docs/homelabs',
                routeBasePath: 'homelabs',
                sidebarPath: './config/sidebars.homelabs.ts',
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
                alt: 'Le logo du site adapté avec le darkmode',
                src: 'img/logo-omnyforge.svg',
                srcDark: 'img/logo-omnyforge-dark.svg',
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
                    sidebarId: 'infrastructureSidebar',
                    docsPluginId: 'infrastructure',
                    position: 'left',
                    label: 'Infrastructure & Automatisation',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'devCloudSidebar',
                    docsPluginId: 'devcloud',
                    position: 'left',
                    label: 'Développement & Écosystème Cloud',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'cyberDevSecOpsSidebar',
                    docsPluginId: 'cyber-devsecops',
                    position: 'left',
                    label: 'Cybersécurité & DevSecOps',
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
                    sidebarId: 'homelabsSidebar',
                    docsPluginId: 'homelabs',
                    position: 'right',
                    label: 'HomeLabs',
                },
                { to: '/blog', label: 'Blog', position: 'right' },
                // {
                //     href: 'https://github.com/facebook/docusaurus',
                //     label: 'GitHub',
                //     position: 'right',
                // },
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
            additionalLanguages: [
                'powershell',
                'bash',
                'markdown',
                'git',
                'php',
                'perl',
            ],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
