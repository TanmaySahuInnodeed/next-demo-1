export const config = { amp: "hybrid" };
import styles from "../styles/Layout.module.css";
import logo2 from "../public/vercel.svg";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Image src={logo2} alt="logo-img" width="100px" height="100px" />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
