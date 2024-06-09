import { FC, useMemo, useState } from "react";
import { Filter } from "@/features";
import { TodoTask, Task } from "@/entities/task";
import { Count } from "@/shared";
import { TASKS } from "../consts";
import { getUniqId } from "@/shared/lib/getUniqId";
import s from './todoList.module.scss';

export const TodoList: FC = () => {
  const [tasks, setTasks] = useState<Task[]>(TASKS);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [input, setInput] = useState<string>('');
  const tasksList: Task[] = useMemo(() => {
    switch (activeFilter) {
      case 'Active': {
        return tasks.filter(task => !task.isCompleted);
      }
      case 'Complited': {
        return tasks.filter(task => task.isCompleted);
      }
      default: {
        return tasks;   
      }
    }
  }, [tasks, activeFilter]);
  const count = useMemo(() => tasks.reduce((acc, curr) => {return curr.isCompleted ? acc : acc + 1}, 0), [tasks]);

  const addTask = (): void => {
    if (input) {
      const newTask = {
        id: getUniqId(),
        description: input,
        isCompleted: false
      }
      setTasks([...tasks, newTask]);
      setInput('');
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  }

  const onClear = (): void => {
    let newTasks = tasks.filter(task => !task.isCompleted);
    setTasks(newTasks);
  }

  const changeCompleted = (id: number): void => {
    let newTasks = tasks.map(task => {return task.id === id ? {...task, isCompleted: !task.isCompleted} : task});
    setTasks(newTasks);
  }

  return (
    <div className={s['list']}>
      <div className={s['add']}>
        <input className={s['input']} placeholder="What needs to be done?" onInput={onChange} value={input}/>
        <button onClick={() => addTask()} className={s['add-task']}>+</button>
      </div>
      <ul>
        {
          tasksList.map(task => {
            return (
              <li key={task.id} className={s['list-item']}>
                <TodoTask task={task} changeCompleted={(id) => changeCompleted(id)}/>
              </li>
            )
          })
        }
      </ul>
      <div className={s['toolBar']}>
        <Count count={count}/>
        <Filter activeFilter={activeFilter} changeFilter={setActiveFilter}/>
        <button onClick={onClear}>Clear Completed</button>
      </div>
    </div>
  );
}