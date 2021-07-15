import {Yugo, Fiat, Zastava} from './Cars';
function App() {
  return (
    <div>
      <p>{Yugo.model}</p>
      <p>{Fiat.model}</p>
      <p>{Zastava.model}</p>
    </div>  //u reactu mora postojati parent element
  );
}

export default App;
