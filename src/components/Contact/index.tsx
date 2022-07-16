import styles from "./styles.module.scss";

import { FormEvent, Fragment } from "react";

export function Contact() {
  function onSubmitForm(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src="/assets/man.svg" alt="Man" />
          </div>

          <div className={styles.form}>
            <h5>Vamos</h5>
            <h1>conversar?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum porta arcu vel vulputate. Morbi quis egestas dui. Integer nibh mauris, pulvinar eu tempus eget, facilisis et nunc.</p>

            <form onSubmit={onSubmitForm}>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Seu site" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Telefone" />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </footer>
    </Fragment>
  );
}