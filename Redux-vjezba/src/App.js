import { connect } from 'react-redux'; //cilj connecta je da možemo iz storea mapirati state i da to bude dostupno komponenti app


function App({ count }) { // dohvaćamo count
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

export default connect(
  mapStateToProps 
)(App); // mičemo export default App i stavljamo connect da se spoji store i tek sad je store vezan uz komponentu 
//stavljamo u prvu zagradu da sigurno vežemo store sa komponentom
// druge zagrade su za export komponenete koju imamo