import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">
                    {siteConfig.tagline}

                    <hr />

                    <small>
                        <em>
                            Cette documentation est rédigée intégralement en{' '}
                            <strong>français</strong> pour renforcer l’
                            <strong>accessibilité</strong>,
                            <br /> la <strong>souveraineté numérique</strong> et
                            la pédagogie auprès des{' '}
                            <strong>publics non anglophones</strong>.
                        </em>
                    </small>

                    <hr />
                </p>
                <br />
                <div
                    className={styles.buttons}
                    style={{ display: 'flex', gap: '20px' }}
                >
                    <Link
                        className="button button--secondary button--lg"
                        to="bases-fondamentales/preambule"
                    >
                        Savoir être
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="/bases-fondamentales/introduction"
                    >
                        Fondamentaux indispensable
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="/glossaire-it/introduction"
                    >
                        Glossaire IT
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
