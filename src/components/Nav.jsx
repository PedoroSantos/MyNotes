import "../styles/Nav.scss";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-content">
        <div className="buttons">
          <button className="nav-btn" onClick={() => navigate("/write")}>
            <i className="fas fa-plus" /> <span className="buttontext">Novo</span> 
          </button>
          <button className="nav-btn" onClick={() => navigate("/favorites")}>
            <i className="fas fa-star" /> <span className="buttontext">Favoritos</span>
          </button>
          <button className="nav-btn" onClick={() => navigate("/")}>
            <i className="fas fas fa-bars" /> <span className="buttontext">Todos</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
