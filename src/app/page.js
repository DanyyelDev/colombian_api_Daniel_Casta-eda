import { TabMenu } from "app/components/TabMenu";
import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.main}>
      <TabMenu/>
    </main>
  );
}
