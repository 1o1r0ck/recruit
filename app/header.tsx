import Image from "next/image";
import logo from "./assets/logo.svg";
import styles from "./scss/header.module.scss";

export default function Header(this: any) {
  return (
    <header>
      <div className={styles.headerInfo}>
        <Image src={logo} width={30} height={30} alt="Logo" />
        <h1 className={styles.headerTitle}>Hacker News</h1>
      </div>
      <div className="refresh">Re</div>
    </header>
  );
}
