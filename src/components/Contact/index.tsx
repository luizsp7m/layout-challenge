import { FormEvent } from "react";

import styles from "./styles.module.scss";

export function Contact() {
  function onSubmitForm(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="/assets/man.svg" alt="Man" />
        </div>

        <div className={styles.form}>
          <h5>Lorem ipsum</h5>
          <h1>dolor sit amet?</h1>
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
  );
}