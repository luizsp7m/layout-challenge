import styles from "./styles.module.scss";

export function Employees() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.presentation}>
          <h5>Lorem Ipsum</h5>
          <h1>Lorem <span>Ipsum</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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