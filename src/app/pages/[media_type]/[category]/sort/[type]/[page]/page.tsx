// components
import SideNav from "@/components/common/SideNav/SideNav";

// styles
import styles from "../../../../../page.module.css";

interface Params {
  params: {
    media_type: string;
    category: string;
    type: string;
    page: number;
  };
}

export default async function Page({ params }: Params) {
  return (
    <main className={styles.container}>
      <div className={styles.inner_container}>
        <SideNav />

        <div className={styles.category_list}>
          <p className={styles.category_text}>Sort Type</p>
          <div className={styles.media_list}>Page</div>
        </div>
      </div>
    </main>
  );
}
