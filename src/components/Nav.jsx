import "../styles/Nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="nav-content">

          <a href="/write">
            <button className="nav-btn">
              <i className="fas fa-plus" /> Novo
            </button>
          </a>


        <a href="/favorites">
          <button className="nav-btn">
            <i className="fas fa-star" /> Favoritos
          </button>
        </a>
        <a href="/">
          <button className="nav-btn">
            <i className="fas fas fa-bars" /> Todos
          </button>
        </a>
      </div>

    </nav>
  );
}
