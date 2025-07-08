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
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Infrastructure & Automatisation',
        Svg: require('@site/static/img/accueil/sys-reseau.svg').default,
        description: (
            <>
                Maîtrisez l'art de l'infrastructure moderne à travers une
                approche méthodique alliant systèmes Linux, architectures réseau
                et Infrastructure as Code. Chaque configuration détaillée
                illustre les meilleures pratiques industrielles, de
                l'automatisation des déploiements aux stratégies de monitoring
                avancées.
            </>
        ),
        linkA: '/infrastructure/introduction',
        linkALabel: "Explorer l'infrastructure",
    },
    {
        title: 'Développement & Écosystème Cloud',
        Svg: require('@site/static/img/accueil/dev-cloud.svg').default,
        description: (
            <>
                Concevez des applications robustes en exploitant la synergie
                entre développement moderne et services cloud. Des architectures
                TALL, MERN, MEAN aux pipelines CI/CD sophistiqués, découvrez
                comment transformer une idée en solution scalable et maintenir
                l'excellence opérationnelle à grande échelle.
            </>
        ),
        linkA: '/dev-cloud/introduction',
        linkALabel: 'Découvrir le développement cloud',
    },
    {
        title: 'Cybersécurité & DevSecOps',
        Svg: require('@site/static/img/accueil/devsecops-cyber.svg').default,
        description: (
            <>
                Intégrez la sécurité comme pilier fondamental de vos projets, de
                la conception à la production. Explorez les méthodologies
                d'audit, les techniques de red/blue teaming et l'implémentation
                de pipelines sécurisés. Chaque vulnérabilité analysée renforce
                votre capacité à protéger les écosystèmes numériques critiques.
            </>
        ),
        linkA: '/devsecops/introduction',
        linkALabel: 'Approfondir la cybersécurité',
    },
];

function Feature({ title, Svg, description, linkA, linkALabel }: FeatureItem) {
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
            </div>
        </div>
    );
}

const Dyma = () => {
    return (
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
                            <strong>Dyma</strong> est bien plus qu’une simple
                            plateforme d’apprentissage :{' '}
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
                            dans un centre de formation professionalisant et ce,
                            sans difficulté, tant la qualité des cours m’a
                            permis d’aller droit à l’essentiel.
                        </p>
                        <p>
                            Avec{' '}
                            <strong>plus de 49 technologies couvertes</strong>{' '}
                            (&nbsp;<em>à la date où j’écris ces lignes</em>
                            &nbsp;), Dyma offre un contenu à la fois{' '}
                            <strong>
                                technique, structuré et constamment actualisé
                            </strong>
                            . Les formations sont mises à jour régulièrement, ce
                            qui vous permet de rester à jour{' '}
                            <strong>même après avoir terminé un cours</strong> :
                            chaque mise à jour vous redonne accès au contenu
                            révisé, sans surcoût.
                        </p>
                        <p>
                            Si vous ne possédez pas encore de compte Dyma ou
                            d’abonnement actif, je vous invite à utiliser
                            <strong>mon lien de parrainage ci-dessous</strong>
                            .
                            <br />
                            <strong>
                                Vous recevrez 20€ de crédit sur la plateforme,
                                et je bénéficierai également d’un bonus
                                équivalent. C’est une belle manière de commencer
                                à apprendre tout en me soutenant dans mon propre
                                parcours.
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
                        Activer votre bonus
                        <br />
                        de 20€ sur Dyma.fr
                    </Link>
                </div>
            </div>
        </section>
    );
};

const StephaneRobertSection = () => {
    return (
        <section
            className={styles.ressources}
            style={{
                padding: '4rem 0',
                backgroundColor: 'var(--ifm-color-secondary-lightest)',
            }}
        >
            <div className="container">
                <h2
                    className="text--center"
                    style={{
                        textTransform: 'uppercase',
                        margin: '4rem auto 2rem',
                    }}
                >
                    Ressources Complémentaires
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
                                src="https://blog.stephane-robert.info/_astro/logo-devsecops2.CwbXqPy9_1ylfPw.webp" // À créer ou remplacer
                                alt="Logo officiel utilisé par Stephane Robert"
                                width="100px"
                            />
                            <figcaption style={{ fontStyle: 'italic' }}>
                                Ressource DevOps de référence
                            </figcaption>
                        </figure>
                    </div>
                    <div className={clsx('col col--6')}>
                        <p>
                            Le <strong>blog de Stéphane Robert</strong>{' '}
                            constitue une référence incontournable dans
                            l'écosystème DevOps francophone. Cette ressource
                            exceptionnelle influence ma compréhension des
                            pratiques modernes d'infrastructure et de
                            déploiement continu.
                        </p>
                        <p>
                            Plutôt que de reproduire l'excellent travail déjà
                            accompli, cette documentation s'inscrit en{' '}
                            <strong>complément</strong>, apportant une
                            perspective personnelle et des cas d'usage
                            spécifiques issus de mon parcours professionnel.
                            L'objectif est de créer un&nbsp;
                            <strong>écosystème de savoir</strong> où chaque
                            source enrichit la compréhension globale des
                            technologies.
                        </p>
                        <p>
                            Cette approche collaborative reflète l'esprit même
                            du DevOps :
                            <strong>
                                partager les connaissances pour élever le niveau
                                collectif
                            </strong>
                            et construire des solutions plus robustes et
                            innovantes ensembles.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <Link
                        className="button button--primary button--lg"
                        style={{
                            margin: '2rem auto',
                        }}
                        to="https://blog.stephane-robert.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Découvrir le blog
                        <br />
                        DevOps de Stéphane Robert
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default function HomepageFeatures(): ReactNode {
    return (
        <>
            <section
                style={{
                    backgroundColor: 'var(--ifm-color-primary-lightest)',
                }}
            >
                <div
                    className="container"
                    style={{
                        height: '16rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <p
                        style={{
                            textAlign: 'justify',
                            color: 'var(--docusaurus-highlighted-code-line-bg)',
                            fontFamily: "'Segoe UI', Roboto, sans-serif",
                            fontSize: '1.125rem',
                            lineHeight: '1.8',
                            margin: '4rem auto',
                        }}
                    >
                        L’objectif n’est pas de faire de{' '}
                        <strong>
                            l’ombre aux nombreuses formations déjà disponibles
                            en ligne
                        </strong>
                        , mais bien d’ouvrir la voie à toutes celles et ceux qui
                        souhaitent découvrir, apprendre et poser leurs premiers
                        jalons dans ce domaine passionnant qu’est
                        l’informatique.
                    </p>
                </div>
            </section>
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

            {Dyma()}
            {StephaneRobertSection()}
        </>
    );
}
