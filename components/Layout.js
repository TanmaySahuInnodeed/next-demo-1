export const config = { amp: "hybrid" };
import { useAmp } from "next/amp";
import styles from "../styles/Layout.module.css";
import logo1 from "../public/favicon.ico";
import logo2 from "../public/vercel.svg";
import Image from "next/image";
const Layout = ({ children }) => {
  const isAmp = useAmp();
  console.log(isAmp);
  return (
    <div className={styles.container}>
      <Image src={logo2} alt="logo-img" width="100px" height="100px" />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
