import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Daily Shop Viewer',
    icon: '🛒',
    description: (
      <>
        View the four weapon skins currently available in your daily rotation, including accurate prices (VP) and high-quality images.
      </>
    ),
  },
  {
    title: 'Multi-Account Support',
    icon: '👥',
    description: (
      <>
        Play across different accounts or regions? Log in to as many accounts as you like and switch between them instantly with a single tap.
      </>
    ),
  },
  {
    title: 'Detailed Profile Overview',
    icon: '📊',
    description: (
      <>
        Track your progress with a summary of your account level, current player card, and title at a glance.
      </>
    ),
  },
  {
    title: 'Smart Store Caching',
    icon: '⚡',
    description: (
      <>
        Save data and battery life! The app intelligently caches your store data and only fetches fresh updates when the store refreshes or on demand.
      </>
    ),
  },
  {
    title: 'Clean & Native UI',
    icon: '📱',
    description: (
      <>
        Enjoy a fast, responsive interface designed to feel right at home on your Android device.
      </>
    ),
  },
  {
    title: 'Secure Authentication',
    icon: '🔒',
    description: (
      <>
        Val Shop uses the official Riot Games authentication flow. We never see, handle, or store your account password. All tokens remain safe locally.
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className="card margin-bottom--lg shadow--md">
        <div className="card__header">
          <div className={styles.featureIconContainer}>
            <span className={styles.featureEmojiIcon}>{icon}</span>
          </div>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row margin-bottom--lg">
          <div className="col col--12 text--center">
            <Heading as="h2">Key Features</Heading>
            <p className={styles.featureSubtitle}>
              Never miss your favorite weapon skins again. View daily rotating store offers directly from your mobile device.
            </p>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row margin-top--lg">
          <div className="col col--12">
            <div className={clsx('alert alert--secondary', styles.disclaimerBox)}>
              <small>
                <strong>Disclaimer:</strong> Val Shop is an unofficial fan-made application and is not endorsed by or affiliated with Riot Games, Inc. Valorant and Riot Games are trademarks or registered trademarks of Riot Games, Inc.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

