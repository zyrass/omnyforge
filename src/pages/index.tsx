import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import MyImage from '../components/MyImage';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <MyImage
                    src="img/logo-omnyforge-dark.svg"
                    alt="logo Omnyforge"
                />
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">
                    {siteConfig.tagline}

                    <small
                        style={{
                            display: 'flex',
                            justifyContent: 'start',
                            flexWrap: 'wrap',
                            borderLeft: '5px solid grey',
                            paddingLeft: '20px',
                            margin: '40px 10px',
                            color: 'lightgrey',
                        }}
                    >
                        <em style={{ textAlign: 'left' }}>
                            Documentation technique et pédagogique intégralement
                            rédigée en&nbsp;<strong>français</strong> afin de
                            démocratiser l'accès aux technologies avancées,
                            renforcer l'écosystème francophone de l'innovation
                            numérique et contribuer concrètement à la{' '}
                            <strong>souveraineté numérique</strong> par
                            l'inclusion des publics non anglophones.
                        </em>
                    </small>
                </p>
                <br />
                <div
                    className={styles.buttons}
                    style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
                >
                    <Link
                        className="button button--secondary button--lg"
                        to="bases-fondamentales/preambule"
                    >
                        Préambule
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="/bases-fondamentales/introduction"
                    >
                        Fondamentaux techniques
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="/glossaire-it/introduction"
                    >
                        Référentiel terminologique
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
