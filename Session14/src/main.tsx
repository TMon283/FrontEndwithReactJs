import { createRoot } from 'react-dom/client'
import Register from './components/PTIT_CNTT4_IT104_Session14_Bai07/Register.tsx'
import Login from './components/PTIT_CNTT4_IT104_Session14_Bai08/Login.tsx'
import TodoList from './components/PTIT_CNTT4_IT104_Session14_Bai09/TodoList.tsx'
import TodoApp from './components/PTIT_CNTT4_IT104_Session14_Bai10/TodoApp.tsx'

createRoot(document.getElementById('root')!).render(
  <>
  <Register></Register>
  <Login></Login>
  <TodoList></TodoList>
  <TodoApp></TodoApp>
  </>
)
