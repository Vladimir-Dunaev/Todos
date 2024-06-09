import { FC } from "react";
import { TodoList } from "@/widgets";
import { Title } from "@/shared";

export const TodosPage: FC = () => {
  return (
    <>
      <Title title='Todos' position='center'/>
      <TodoList />
    </>
  );
}