import styles from "./styles.module.scss";

export function Employees() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.presentation}>
          <h5>Nossos líderes</h5>
          <h1>Metoria <span>de peso</span></h1>
          <p>Além de contar com um time fera de mais de 30 pessoas, a assessoria de SEO da Netlinks nasceu (diferente de outras consultorias e agências) com uma missão clara de transformar o SEO no Brasil.</p>
          <p>São 6 sócios com background formado em grandes empresas e que se juntaram para criar o produto de SEO ideal pra apoiar pequenas e médias empresas que contam com um time pequeno de marketing mas que sabem a importância de melhorar o tráfego orgânico.</p>
        </div>

        <div className={styles.employees}>
          {Array.from(Array(6)).map((item, index) => (
            <EmployeeItem key={index} />
          ))}
        </div>
      </div>

      <div className={styles.button}>
        <button>Contato</button>
      </div>
    </div>
  );
}

function EmployeeItem() {
  return (
    <div className={styles.employeeItem}>
      <img src="/assets/employee-image.svg" alt="Employee" />

      <h3>Lorem Ipsum</h3>
      <span>Lorem Ipsum</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <a href="#">
        In
      </a>
    </div>
  );
}