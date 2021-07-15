import randstring from 'randomstring'; //kad stavimo ./ ispred onda traži u src
import randnum from 'random-num'; // kad importam dobro je provjeriti što modul traži

function App() {
  return (
    <div>
      { randstring.generate() }
      <p>
        Pobjednik je pod rednim brojem : { randnum(1,50)}
      </p>
    </div>  //u reactu mora postojati parent element,  sa {} uvlačimo JS kao i sa template literalima
  );
}

export default App;
