import { FC } from "react";
import s from './mainLayout.module.scss';

type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({children}) => {
  return (
    <main className={s.main}>
      {children}
    </main>
  );
}