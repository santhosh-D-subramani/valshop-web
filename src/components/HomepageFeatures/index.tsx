import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: (props: ComponentProps<'svg'>) => ReactNode;
  description: ReactNode;
};

// Clean monochrome SVG icons
const StoreIcon = (props: ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const UsersIcon = (props: ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ProfileIcon = (props: ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <path d="M3 3h18v18H3z" strokeOpacity="0.2" strokeWidth="1.5" />
  </svg>
);

const ZapIcon = (props: ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const SmartphoneIcon = (props: ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const ShieldLockIcon = (props: ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <rect width="8" height="5" x="8" y="11" rx="1" />
    <path d="M10 11V9a2 2 0 1 1 4 0v2" />
  </svg>
);

const FeatureList: FeatureItem[] = [
  {
    title: 'Daily Shop Viewer',
    icon: StoreIcon,
    description: (
      <>
        View the four weapon skins currently available in your daily rotation, including accurate prices (VP) and high-quality images.
      </>
    ),
  },
  {
    title: 'Multi-Account Support',
    icon: UsersIcon,
    description: (
      <>
        Play across different accounts or regions? Log in to as many accounts as you like and switch between them instantly with a single tap.
      </>
    ),
  },
  {
    title: 'Detailed Profile Overview',
    icon: ProfileIcon,
    description: (
      <>
        Track your progress with a summary of your account level, current player card, and title at a glance.
      </>
    ),
  },
  {
    title: 'Smart Store Caching',
    icon: ZapIcon,
    description: (
      <>
        Save data and battery life! The app intelligently caches your store data and only fetches fresh updates when the store refreshes or on demand.
      </>
    ),
  },
  {
    title: 'Clean & Native UI',
    icon: SmartphoneIcon,
    description: (
      <>
        Enjoy a fast, responsive interface designed to feel right at home on your Android device.
      </>
    ),
  },
  {
    title: 'Secure Authentication',
    icon: ShieldLockIcon,
    description: (
      <>
        Val Shop uses the official Riot Games authentication flow. We never see, handle, or store your account password. All tokens remain safe locally.
      </>
    ),
  },
];

function Feature({ title, icon: Icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className="card margin-bottom--lg shadow--md">
        <div className="card__header">
          <div className={styles.featureIconContainer}>
            <div className={styles.iconBadge}>
              <Icon className={styles.featureSvgIcon} />
            </div>
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


