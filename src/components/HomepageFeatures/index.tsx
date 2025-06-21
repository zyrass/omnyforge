import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
    linkA: string;
    linkALabel: string;
    linkB: string;
    linkBLabel: string;
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
        linkA: '/admin-sys/introduction',
        linkALabel: 'Voir la doc Système',
        linkB: '/admin-reseau/introduction',
        linkBLabel: 'Voir la doc Réseau',
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
        linkA: '/developpements/introduction',
        linkALabel: 'Voir la doc Développement',
        linkB: '/cloud/introduction',
        linkBLabel: 'Voir la doc Cloud',
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
        linkA: '/devsecops/introduction',
        linkALabel: 'Voir la doc DevSecOps',
        linkB: '/cybersecurity/introduction',
        linkBLabel: 'Voir la doc Cybersécurité',
    },
];

function Feature({
    title,
    Svg,
    description,
    linkA,
    linkALabel,
    linkB,
    linkBLabel,
}: FeatureItem) {
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
                <p style={{ textAlign: 'justify' }}>{description}</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                }}
            >
                <Link
                    className={
                        (styles.docLink, 'button button--secondary button--md')
                    }
                    to={linkA}
                >
                    {linkALabel}
                </Link>
                <Link
                    className={
                        (styles.docLink, 'button button--secondary button--md')
                    }
                    to={linkB}
                >
                    {linkBLabel}
                </Link>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <>
            <section className={styles.features}>
                <div className="container">
                    <h2
                        className="text--center"
                        style={{
                            textTransform: 'uppercase',
                            margin: '4rem auto 1rem',
                        }}
                    >
                        Documentations
                    </h2>
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
            <section
                className={(styles.parrainage, styles.textDynamic)}
                style={{
                    padding: '4rem 0',
                }}
            >
                <div className="container">
                    <h2
                        className="text--center"
                        style={{
                            // color: 'white',
                            textTransform: 'uppercase',
                            margin: '4rem auto 2rem',
                        }}
                    >
                        Parrainage
                    </h2>
                    <div className="row">
                        <div
                            className={clsx('col col--6')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <figure className="text--center">
                                <img
                                    src="/img/dyma-icon.png"
                                    alt="Logo officiel de Dyma.fr"
                                    width="100px"
                                />
                                <figcaption
                                    style={{ fontStyle: 'italic' }}
                                    className="text-dynamic"
                                >
                                    Logo officiel de la plateforme de Dyma
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className={clsx('col col--6')}
                            // style={{ color: 'white' }}
                        >
                            <p>
                                <strong>Dyma</strong> est bien plus qu’une
                                simple plateforme d’apprentissage :{' '}
                                <strong>
                                    c’est l’un de mes alliés incontournables
                                </strong>
                                dans mon parcours de développeur. Je m’y suis
                                inscrit le <strong>2 juillet 2025</strong>, et
                                depuis, j’y ai tellement appris que j’ai pu
                                <strong>
                                    obtenir ma certification de Développeur
                                    Fullstack avec les félicitations du jury
                                </strong>{' '}
                                dans un centre de formation professionalisant et
                                ce, sans difficulté, tant la qualité des cours
                                m’a permis d’aller droit à l’essentiel.
                            </p>
                            <p>
                                Avec{' '}
                                <strong>
                                    plus de 49 technologies couvertes
                                </strong>{' '}
                                (&nbsp;<em>à la date où j’écris ces lignes</em>
                                &nbsp;), Dyma offre un contenu à la fois{' '}
                                <strong>
                                    technique, structuré et constamment
                                    actualisé
                                </strong>
                                . Les formations sont mises à jour
                                régulièrement, ce qui vous permet de rester à
                                jour{' '}
                                <strong>
                                    même après avoir terminé un cours
                                </strong>{' '}
                                : chaque mise à jour vous redonne accès au
                                contenu révisé, sans surcoût.
                            </p>
                            <p>
                                Si vous ne possédez pas encore de compte Dyma ou
                                d’abonnement actif, je vous invite à utiliser
                                <strong>
                                    mon lien de parrainage ci-dessous
                                </strong>
                                .
                                <br />
                                <strong>
                                    Vous recevrez 20€ de crédit sur la
                                    plateforme, et je bénéficierai également
                                    d’un bonus équivalent. C’est une belle
                                    manière de commencer à apprendre tout en me
                                    soutenant dans mon propre parcours.
                                </strong>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <Link
                            className={
                                (styles.docLink,
                                'button button--secondary button--lg')
                            }
                            style={{
                                margin: '2rem auto',
                            }}
                            to={'https://dyma.fr/r/5d52bd274e7aec730eb90fde'}
                        >
                            Cliquer ici pour activer votre bonus de 20€ sur
                            Dyma.fr
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
