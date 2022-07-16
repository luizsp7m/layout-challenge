import styles from "./styles.module.scss";

import { Welcome } from "../../components/Welcome";
import { Customers } from "../../components/Customers";
import { Contact } from "../../components/Contact";
import { Employees } from "../../components/Employees";
import { About } from "../../components/About";

export function Home() {
  return (
    <div>
      <About />
      <Employees />
      <Customers />
      <Contact />
    </div>
  );
}