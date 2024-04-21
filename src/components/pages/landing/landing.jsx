import { landingData } from '@/components';
import styles from './landing.module.css';

export const LandingPage = () => {
  return (
    <div className={styles.mainContainer}>
      {landingData.map(({ title, description, cta, id }) => {
        return (
          <div className={styles.bodyContainer} key={id}>
            <h1>{title}</h1>

            {/* If description is a string, render as a single paragraph  */}
            {Array.isArray(description) ? (
              // If description is an array, map through it
              description.map((paragraph, index) => {
                return <p key={index}>{paragraph}</p>;
              })
            ) : (
              // If description is not an array, render it as a single paragraph
              <p>{description}</p>
            )}
            <button>{cta}</button>
          </div>
        );
      })}
    </div>
  );
};
