import { BackButton } from '@/components';
import styles from './page.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <BackButton />
    </div>
  );
};

export default NotFoundPage;
