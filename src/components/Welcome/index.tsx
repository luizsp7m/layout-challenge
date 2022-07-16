import styles from "./styles.module.scss";

export function Welcome() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.presentation}>
          <img src="/assets/logo.svg" alt="Logo" />
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <div className={styles.footer}>
            <h5>Lorem ipsum <b>#dolor</b></h5>

            <div className={styles.list}>
              {Array.from(Array(4)).map(index => (
                <div key={index} className={styles.item}>
                  <img src="/assets/logo-circle.svg" alt="Logo" />

                  <div>
                    <h5>Lorem ipsum dolor</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.form}>
          <img src="/assets/woman.svg" alt="Woman" />
          
          <form action="">
            <h1>Lorem ipsum dolor sit amet?</h1>

            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Site" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Telefone" />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}