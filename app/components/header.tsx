import Image from "next/image";
import logo from "../assets/logo.svg";
import styles from "../scss/header.module.scss";
import { useQueryClient } from "react-query";

export default function Header(this: any) {
  const queryClient = useQueryClient();
  const handleRefresh = () => {
    queryClient.invalidateQueries('newsInfo'); 
  };
  return (
    <header>
      <div className={styles.headerInfo}>
        <Image src={logo} width={30} height={30} alt="Logo" />
        <h1 className={styles.headerTitle}>Hacker News</h1>
      </div>
      <div className="refresh">
        <button onClick={handleRefresh}>
          update
        </button>
      </div>
    </header>
  );
}
