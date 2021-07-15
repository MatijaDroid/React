import React from 'react';
import UserClass from './components/user/UserClass';
import UserFunction from './components/userfunction/UserFunction';
import UserChildren from './components/userchildren/UserChildren';

//*************SAMO ZA POTREBE VJEŽBE*************//
const users = [
  {name: 'Ivan', years:30 },
  {name: 'Marko', years:35 },
  {name: 'Ana', years:25 }
];

//*************SAMO ZA POTREBE VJEŽBE*************//

class App extends React.Component
{
  render(){
    return (
    <div>
      <h1>Hello!!!</h1>
      <UserClass name={users[0].name} years={users[0].years}/> 
      <UserFunction name={users[1].name} years={users[1].years}/>
      <UserChildren name={users[2].name} years={users[2].years}/>
    </div>
    )  //u reactu mora postojati parent element
  };
}

export default App;


//  <UserChildren/>  <UserFunction/>   <UserClass/>  su child komponenete App-a
