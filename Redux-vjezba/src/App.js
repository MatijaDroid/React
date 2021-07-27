import { connect } from 'react-redux'; //cilj connecta je da možemo iz storea mapirati state i da to bude dostupno komponenti app
import { addToCount, subbFromCount, setCount} from './redux';

function App({ count, subbOne, addOne, reset }) { // dohvaćamo count // nakon što dodamo add,subb,set iz redux.js moram dodati i u propse isto!
  return (
    <div style={{textAlign: "center"}}>
        <p>
            <button onClick={subbOne}>-</button>  
            {/* postavljanje evenata onClick */}
            <span style={{padding: "20px"}}>Broj: {count}</span>
            <button onClick={addOne}>+</button>
        </p>
        <p>
          <button onClick={reset}>Reset</button>
        </p>
    </div>
  );
}

//metoda koja iz reduxa pokupi podatak state i mapira ga na count
const mapStateToProps = (state) =>{
  return {
    count: state
  }
}

//mapiranje metoda koje imamo u redux.js
const mapDispatchToProps = { //ovo je objekt preko kojeg mapiramo i šaljemo metode i mapiramo subbOne,addOne i reset kroz metode preko propsa, ovo moramo poslati u connectu
  addOne: () => addToCount(1),//property u objektu postaje metoda kada koristimo anonimnu funkciju da bi pozvali redux funkciju koju smo napisali
  subbOne: () => subbFromCount(1),
  reset: () => setCount(0)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App); // mičemo export default App i stavljamo connect da se spoji store i tek sad je store vezan uz komponentu 
//stavljamo u prvu zagradu da sigurno vežemo store sa komponentom
// druge zagrade su za export komponenete koju imamo