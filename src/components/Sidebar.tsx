import { PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';
import stylesSidebar from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={stylesSidebar.sidebar}>
      <img
        className={stylesSidebar.cover}
        src="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50"
      />

      <div className={stylesSidebar.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/54822837?v=4"/>
        <strong>Jorge Gonzaga</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil</a>
      </footer>
    </aside>
  );
}
