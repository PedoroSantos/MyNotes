import '../styles/Nav.scss'
export default function Nav(){
  return(
    <nav>
        <div className='nav-content'>
          <button className="nav-btn"><i className="fas fa-plus" /> Novo</button>
          <button className="nav-btn"><i className="fas fa-star" /> Favoritos</button>
          <button className="nav-btn"><i className="fas fas fa-bars" /> Todos</button>
        </div>
        
    </nav>
  )  
}