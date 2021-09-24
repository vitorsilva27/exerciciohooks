import React from 'react';
import Produto from './Components/Produtos/intex';

function App() {
  const [dados, setDados] = React.useState(null);

  async function handleClick(event){
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.
      innerText}`, 

    );
    const json = await response.json();
      setDados(json); 
  }


  return (
    <>
      <button onClick={handleClick}>Tablet</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>
      {dados && <Produto dados={dados}/>}
    </>
  );
}

export default App;
