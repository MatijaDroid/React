import React from 'react';
import UserClass from './components/user/UserClass';

class App extends React.Component
{
  state = {
    users :[
      { id: 1, name: 'Ivan', years:30 },
      { id: 2,name: 'Marko', years:35 },
      { id: 3,name: 'Ana', years:25 },
      { id: 4,name: 'Štef', years:55 }
    ]
  };
  
  changeYears =() =>{
    const { users } = this.state;

    const newUsers = users.map(user => { // mapiranje niza da dobijemo podatke za svakog usera, umjesto petlji koristimo map i imamo anonimnu arrow funkciju 
      return { ...user, years: user.years + 1 }; // spread operator za nizove, nije cijeli niz kloniran nego element po element
    });
    this.setState({users : newUsers}); // reflektirajuća promjena stanja se radi preko setState
  }
  
  handleNameChange = (event, index) =>{ // u eventu
    const { users } = this.state;
    const newUsers = [...users]; //kloniranje users-a pošto mijenjamo jednog onda je ovo bolje jer ne utječemo na ostale
    newUsers[index].name = event.target.value;
    this.setState({users : newUsers})
  }

  render(){
    const { users } = this.state;
    return (
    <div>
      <h1>Hello!!!</h1>
      <button onClick={this.changeYears}>Change years</button>
      {
        users.map((user, index) => (
          <UserClass // dovoljna je jedna komponenta usera
          key = { user.id }
          name={ user.name } 
          years={ user.years }
          onNameChange={(event) => this.handleNameChange(event, index)} // pozivanje preko anonimne funkcije gdje šaljemo event i key liste
        />
        )) //uglate zagrade koristimo jer JSX gleda {} kao otvaranje i zatvaranje javascripta
      }
    </div>
    )  //u reactu mora postojati parent element
  };
}

export default App;


//  <UserChildren/>  <UserFunction/>   <UserClass/>  su child komponenete App-a
