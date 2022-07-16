import styles from "./styles.module.scss";

import { FormEvent } from "react";

export function Welcome() {
  function onSubmitForm(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.presentation}>
          <img src="/assets/logo.svg" alt="Logo" />
          <h1>Agência especializada em SEO & Apaixonada por Vendas</h1>
          <p>Agência especializada em SEO, apaixonada por ajudar empresas a venderem mais no Google através de metodologia comprovada, pessoas criativas e foco em resultados.</p>

          <div className={styles.achievements}>
            <h5>Direto de quem <b>#confia</b></h5>

            <div className={styles.companies}>
              {Array.from(Array(4)).map((item, index) => (
                <div key={index} className={styles.company}>
                  <img src="/assets/your-logo.svg" alt="Logo" />

                  <div>
                    <h5>Lorem Ipsum</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.form}>
          <img src="/assets/woman.svg" alt="Woman" />

          <form onSubmit={onSubmitForm}>
            <h1>Quer aumentar seu tráfego?</h1>

            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Site" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Telefone" />

            <button type="submit">Falar com Especialista</button>
          </form>
        </div>
      </div>
    </div>
  );
}