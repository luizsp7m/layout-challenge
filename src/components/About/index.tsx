import styles from "./styles.module.scss";

export function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.presentation}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className={styles.gradient}></div>
      </div>
    </div>
  );
}