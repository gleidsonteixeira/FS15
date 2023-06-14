import { createContext, useEffect, useState } from "react";
import { Ways } from "./Routes";

export const LoginContext = createContext(null);

const App = () => {

  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const logado = JSON.parse(localStorage.getItem('logado')) || false;
    setLogado(logado);
  }, []);

  return(
    <>
      <LoginContext.Provider value={{logado, setLogado}}>
        <Ways />
      </LoginContext.Provider>
    </>
  );
}

export default App;