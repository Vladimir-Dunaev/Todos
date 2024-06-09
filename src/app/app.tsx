import { TodosPage } from "@/pages/TodosPage";
import { MainLayout } from "@/shared";

export function App() {
  return (
    <MainLayout>
      <TodosPage />
    </MainLayout>
  );
}