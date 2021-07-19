import Auth from './components/auth/Auth';
import Role from './components/role/Role';
import User from './components/user/User';
import Boot from './components/Boot'
import './styles/headings.css';

function App() {
  return (
    <div>
      <h1>Styles-CSS</h1> 
      <Auth />
      <Role />
      <User />
      <Boot />
    </div>  //u reactu mora postojati parent element
  );
}

export default App;
