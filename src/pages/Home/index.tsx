import styles from "./styles.module.scss";

import { Welcome } from "../../components/Welcome";
import { About } from "../../components/About";
import { Employees } from "../../components/Employees";
import { Customers } from "../../components/Customers";
import { Contact } from "../../components/Contact";
import { Timeline } from "../../components/Timeline";
import { Carousel } from "../../components/Carousel";

export function Home() {
  return (
    <div>
      <Welcome />
      <Timeline />
      <About />
      <Carousel />
      <Employees />
      <Customers />
      <Contact />
    </div>
  );
}