import { connect } from 'react-redux';
import { TodoForm } from './components'; // nemoramo cijelu putanju jer imamo index.js u componentsu
import {
  addTodo
} from './redux';
import './App.css';

function App({ todos, addTodo }) {
  return (
    <div className="app">
      <h1 className="header">My Tasks</h1>
      {/* TODO: Navigacija */}
      <div className="todo-container">
        <TodoForm addTodo= { addTodo }/>  {/*prosljeđujemo propse todo komponenti */}
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return { todos: state }; // kreiranje mape state i iz stora dobijemo state
}

const mapDispatchToProps = { // mapiranje addTodo metode koja se nalazi zapravo u store-u
  addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
