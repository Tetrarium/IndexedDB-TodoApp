import s from "./header.module.sass";

const Header = () => {
  return (
    <header className={s.header}>
      <h2 className={s.title}>IndexedDB ToDo App</h2>
    </header>
  );
};

export default Header;