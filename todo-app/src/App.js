import { connect } from 'react-redux';
import { TodoForm } from './components' // nemoramo cijelu putanju jer imamo index.js u componentsu
import './App.css';

function App({ todos }) {
  return (
    <div className="app">
      <h1 className="header">My Tasks</h1>
      {/* TODO: Navigacija */}
      <div className="todo-container">

      </div>
    </div>
  );
}

function mapStateToProps(state){
  return { todos: state }; // kreiranje mape state i iz stora dobijemo state
}

export default connect(mapStateToProps)(App);
