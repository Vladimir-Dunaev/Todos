import { FC, memo } from "react";
import { Task } from "../model/types";
import cn from 'classnames';
import s from './task.module.scss';

type TodoTaskProps = {
  task: Task;
  changeCompleted: (id: number) => void;
}

export const TodoTask: FC<TodoTaskProps> = memo(({task, changeCompleted}) => {
  const { description, isCompleted } = task;
  const checked = isCompleted ? s['checked'] : '';

  return (
    <div className={s.task}>
      <button className={cn(s['button'], checked)} onClick={() => changeCompleted(task.id)}></button>
      <p className={cn(s['text'], checked)}>{description}</p>
    </div>
  );
})