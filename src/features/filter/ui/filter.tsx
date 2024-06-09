import { FC, memo } from "react";
import { FILTER } from "../const";
import cn from 'classnames';
import s from './filter.module.scss';

type FilterProps = {
  activeFilter: string;
  changeFilter: (filter: string) => void;
}

export const Filter: FC<FilterProps> = memo(({activeFilter, changeFilter}) => {
  return (
    <div className={s['filter']}>
      {
        FILTER.map(filter => {
          return (
            <button 
              key={filter}
              className={cn(s['button'], activeFilter === filter ? s['active'] : '')}
              onClick={() => changeFilter(filter)}
            >
              {filter}
            </button>
          )
        })
      }
    </div>
  );
})