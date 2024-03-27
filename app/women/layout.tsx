import React from "react";
import styles from "./styles.module.css";

export default function WomenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  );
}
