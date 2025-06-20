import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
    linkA: string;
    linkB: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Système & Réseau',
        Svg: require('@site/static/img/accueil/sys-reseau.svg').default,
        description: (
            <>
                Développez des compétences solides en gestion des systèmes Linux
                et en administration réseau. De l'automatisation des tâches à la
                configuration des services réseau, chaque guide vous prépare à
                une expertise professionnelle.
            </>
        ),
        linkA: '/docs/admin-sys/introduction.mdx',
        linkB: '/docs/admin-reseau/introduction.mdx',
    },
    {
        title: 'Développement & Cloud',
        Svg: require('@site/static/img/accueil/dev-cloud.svg').default,
        description: (
            <>
                Apprenez à créer des applications performantes en combinant les
                stacks modernes (TALL, MERN, MEAN) avec les solutions
                d’hébergement cloud. Des projets concrets pour comprendre,
                déployer et maintenir vos outils.
            </>
        ),
        linkA: '/docs/developpements/introduction.mdx',
        linkB: '/docs/cloud/introduction.mdx',
    },
    {
        title: 'DevSecOps & Cybersécurité',
        Svg: require('@site/static/img/accueil/devsecops-cyber.svg').default,
        description: (
            <>
                Sécurisez vos projets dès leur conception. Des guides détaillés
                pour intégrer la sécurité dans vos pipelines CI/CD, détecter les
                menaces, auditer les infrastructures et comprendre les attaques
                en environnement contrôlé.
            </>
        ),
        linkA: '/docs/devsecops/introduction.mdx',
        linkB: '/docs/cybersecurity/introduction.mdx',
    },
];

function Feature({ title, Svg, description, linkA, linkB }: FeatureItem) {
    return (
        <div
            className={clsx('col col--4')}
            style={{
                marginBottom: '40px',
            }}
        >
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <a href={linkA}>Voir la doc Admin Sys</a>
                <a href={linkB}>Voir la doc Admin Réseau</a>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
