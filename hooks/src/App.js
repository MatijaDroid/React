import React, {useState} from 'react'; // kada želimo samo koristiti useState bez da pišemo React.useState

function App() {
  const [count, setCount] = useState(0); // 0 je početna vrijednost i time definiramo state

  const klikniMe = () =>{
    setCount(count + 1);
  }

  return (
    <div>
    <p>Kliknuo si {count} puta.</p>
    <button onClick={ klikniMe }>
      Klikni me
    </button>
    </div>  //u reactu mora postojati parent element
  );
}

export default App;
