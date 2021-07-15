import React from 'react';
import City from './components/City';
import Country from './components/Country';

class App extends React.Component {
  state = {
    city : "Zagreb",
    country : "Hrvatska"
  };

  changeState =() =>{
    const newCity = this.state.city === "Zagreb" ? "Osijek" ? "Rijeka" : "Zagreb" : "Osijek";
    this.setState({city: newCity});
    
  }

  render(){

    const {city, country} = this.state;

    return (
      <div>
        <City city= { city }/>
        <Country country = { country }/>
        <button onClick={this.changeState}>Promjeni grad</button>
      </div>  //u reactu mora postojati parent element
    );
  };
}
//this.changeState je pointer na listener
export default App;
