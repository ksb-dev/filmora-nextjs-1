// components
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

// hooks
// import useMode from "@/hooks/useMode";

// styles
import styles from "./InnerLayout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />

      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
