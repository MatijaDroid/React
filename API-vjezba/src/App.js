import React from 'react';
import Tecaj from './components/Tecaj';
import {Index as Error} from './components/Error/Index'
import {Index as Loader} from './components/Loader/Index'; //import sa aliasom

class App extends React.Component {
  constructor(props){
    super(props); // daje da dođemo do propsa 
    this.state = {
      error: null,
      isLoaded: false,
      items : []
    }
  }
  
  componentDidMount() //uvijek radimo fetch ovdje da budemo sigurni da se komponenta mountala tj da se render dogodio
  {
    fetch("https://cors-anywhere.herokuapp.com/https://api.hnb.hr/tecajn/v1") //fetch is API-ja
      .then(res => res.json())
      .then(
        (result) => { //metoda koja dohvaća
          this.setState({
            isLoaded: true,
            items: result
          }); //setiranje podataka u items
        },
        (error) =>{ //metoda za errore
          this.setState({
            isLoaded: true, //netreba nam jer imamo else if
            error
          })
        }

      );
  }

  render()
  {
    const {error, isLoaded, items} = this.state; //dohvaćanje statea
    if (error){ // ako je error onda se ovaj dio ne izvrši
      return(
        <Error error ={error}/>
      );
    } else if(!isLoaded){ // provjera dali je state isLoaded false ako je onda not false prebaci u true i ulazi se u else if
      return(
        <Loader />
      );
    } else {
      return (
        < Tecaj items={items}/> // prosljeđivanje propsa
      );
    }

  }
}

export default App;
