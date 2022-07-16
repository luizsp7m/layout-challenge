import styles from "./styles.module.scss";

export function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h5>Quem somos</h5>
          <h1>Sobre a <br /> <span>Netlinks</span></h1>
        </div>

        <div className={styles.presentation}>
          <p>Somos uma agência especializada em SEO, apaixonada em ajudar empresas a venderem mais no Google, através de metodologia comprovada, pessoas criativas e foco em resultados</p>

          <div className={styles.information}>
            <div className={styles.card}>
              <h1>80</h1>
              <h5>casos de <br /> sucesso</h5>
            </div>

            <div className={`${styles.card} ${styles.selected}`}>
              <h1>30</h1>
              <h5>colaboradores dedicados</h5>
              <span>Sem freelancers</span>
            </div>

            <div className={styles.card}>
              <h1>5</h1>
              <h5>anos de <br /> CNPJ</h5>
            </div>

            <div className={styles.card}>
              <h1>0</h1>
              <h5>reclamações</h5>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <h5>Unidades</h5>

          <div className={styles.location}>
            <div className={styles.address}>
              <div>
                <img src="/assets/picker.svg" alt="Location" />
              </div>

              <div>
                <h5>Belo Horizonte</h5>
                <p>
                  Endereço: R. Juiz Achilles Velloso, 160 <br />
                  Bairro Estoril, BH - CEP 30494-180 <br />
                  Telefone: (31) 4042-5566
                </p>
              </div>
            </div>

            <div className={styles.address}>
              <div>
                <img src="/assets/picker.svg" alt="Location" />
              </div>

              <div>
                <h5>São Paulo</h5>
                <p>
                  Endereço: Rua Flórida, 1738 Cj 121 <br />
                  Bairro Brooklin, SP - CEP 04565-001 <br />
                  Telefone: (11) 2500-2228
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}