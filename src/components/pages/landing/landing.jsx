import { landingData } from '@/components';
import styles from './landing.module.css';

export const LandingPage = () => {
  return (
    <div className={styles.mainContainer}>
      {landingData.map(({ title, description, cta, id }) => {
        return (
          <div className={styles.bodyContainer} key={id}>
            <h1>{title}</h1>
            {Array.isArray(description) ? (
              description.map((paragraph, index) => {
                return <p key={index}>{paragraph}</p>;
              })
            ) : (
              <p>{description}</p>
            )}
            <button>{cta}</button>
          </div>
        );
      })}
    </div>
  );
};
