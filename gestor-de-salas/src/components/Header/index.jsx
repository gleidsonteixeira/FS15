

const Header = () => {
    return(
      <>
        <header>
            <div className="logo">
                Logo
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/salas">Salas</a>
                    </li>
                    <li>
                        <a href="/responsaveis">Responsáveis</a>
                    </li>
                    <li>
                        <a href="/eventos">Eventos</a>
                    </li>
                </ul>
            </nav>
        </header>
      </>
    );
  }
  
export default Header;