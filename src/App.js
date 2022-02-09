import React, {useState, setState} from 'react';
import { marked } from 'marked';
import './App.css';

function App() {

  const [ texte, setTexte] = useState (' # `Prévisualisateur `\n \nCeci s\'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !\n\n### Cas d\'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc');

  const changeTextHandle = (e)=>{
    setTexte( e.target.value)
    console.log(setTexte);
  }

  
  function createMarkup() {
  return {
    __html: marked(texte)
  };
}


  return (
    <div className="App">
      <div className="elements">
        <div className="element">
          <textarea name="texte" id="" cols="30" rows="35" value= {texte} onChange={ changeTextHandle } ></textarea>
        </div>

        <div className="element">
          <div dangerouslySetInnerHTML={ createMarkup() }>

          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
