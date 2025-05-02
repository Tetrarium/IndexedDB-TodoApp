import s from "./mainPage.module.sass";

const MainPage = () => {
  return (
    <div className={s.container}>

      <main className={s.main}>this is the main</main>
      <footer className={s.footer}>this is the footer</footer>
    </div>
  );
};

export default MainPage;