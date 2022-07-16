import styles from "./styles.module.scss";

interface CustomerItemProps {
  isOdd: boolean;
}

export function Customers() {
  return (
    <div>
      <div className={styles.banner}>
        <h1>Lorem <b>IPSUN DOLOR</b> sit amet</h1>
      </div>

      <div className={styles.customers}>
        {Array.from(Array(4)).map((item, index) => (
          <CustomerItem key={index} isOdd={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}

export function CustomerItem({ isOdd }: CustomerItemProps) {
  return (
    <div className={styles.customerItem} style={{ background: isOdd ? "#FFF" : "#F9F9F9" }}>
      <div className={styles.customerInformation}>
        <img src="/assets/your-logo.svg" alt="Logo" />

        <div>
          <h5>Lorem ipsum dolor</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum porta arcu vel vulputate.</p>
        </div>
      </div>

      <div className={styles.customerEarnings}>
        <div className={styles.rectangle} style={{ background: !isOdd ? "#FFF" : "#F9F9F9" }}></div>

        <div className={styles.customerEarningsBody}>
          <p><b>Lorem ipsum dolor:</b> sit amet, consectetur adipiscing</p>

          <div>
            <h5>Lorem ipsun</h5>
            <h1>XXX.XXX</h1>
            <h3>Lorem ipsum dolor</h3>
            <span></span>
            <h1>XXX%</h1>
            <h3>Lorem ipsum dolor</h3>
          </div>

          <p><b>Lorem ipsum dolor:</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
}