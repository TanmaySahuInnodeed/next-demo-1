import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, CardContent } from "@mui/material";
import styles from "../styles/FactCal.module.css";
import Link from "next/link";
import Head from "next/head";

const MyPage = () => {
  const [submitted, setSubmitted] = useState(0);
  const [num, setNum] = useState(null);

  const factorial = () => {
    let i = 1,
      fact = 1;
    for (i; i <= num; i++) {
      fact = i * fact;
    }
    setSubmitted(fact);
  };

  return (
    <>
      <Head>
        <title>Factorial Calculator</title>
      </Head>
      <div className={styles.links}>
        <Link href="/">Go back to home</Link>
      </div>
      <div className={styles.root}>
        <Card className={styles.card}>
          <CardContent className={styles.container}>
            <h1>Factorial Calculator</h1>
            <div className={styles.res}>
              Result
              <h2 className={styles.num}>{submitted}</h2>
            </div>
            <TextField
              className={styles.input}
              fullWidth
              id="number"
              label="Enter Your Number Here"
              value={num}
              type="number"
              onChange={(e) => {
                e.preventDefault();
                setNum(e.target.value);
              }}
            />
            <Button
              className={styles.btn}
              variant="contained"
              onClick={factorial}
            >
              Calculate
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MyPage;
