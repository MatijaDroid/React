import React, {useState} from 'react';
import UserClass from './components/user/UserClass';
import UserFunction from './components/userfunction/UserFunction';
import UserChildren from './components/userchildren/UserChildren';


function App()
{
  const [users, setUsers] = useState([
    {name: 'Ivan', years:30},
    {name: 'Marko', years:35},
    {name: 'Ana', years:25}
]);
  
  
  const changeYears =() =>{  
    const newUsers = users.map(user => { // mapiranje niza da dobijemo podatke za svakog usera, umjesto petlji koristimo map i imamo anonimnu arrow funkciju 
      return { ...user, years: user.years + 1 }; // spread operator za nizove
    });

    setUsers(newUsers);
  }

  
  return(
    <div>
      <h1>Hello!!!</h1>
      <button onClick={changeYears}>Change years</button>
      <UserClass name={users[0].name} years={users[0].years}/>
      <UserFunction name={users[1].name} years={users[1].years}/>
      <UserChildren name={users[2].name} years={users[2].years}/> 
    </div>
    );  //u reactu mora postojati parent element
}

export default App;


//  <UserChildren/>  <UserFunction/>   <UserClass/>  su child komponenete App-a
