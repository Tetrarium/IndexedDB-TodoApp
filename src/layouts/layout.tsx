import { FC, PropsWithChildren } from "react";

import Footer from "@/layouts/footer/footer";
import Header from "@/layouts/header/header";

import s from "./layout.module.sass";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.main}>
        <aside className={s.aside}>Aside</aside>
        <section className={s.content}>
          {children}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;