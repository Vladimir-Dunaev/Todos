import { FC } from "react";
import cn from 'classnames';
import s from './title.module.scss';

type TitleProps = {
  title: string,
  position?: 'center' | 'left' | 'right'
}

export const Title: FC<TitleProps> = ({title, position = 'left'}) => {
  return (
    <h1 className={cn(s.title, s[`position-${position}`])}>{title}</h1>
  );
}