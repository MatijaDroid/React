import React from 'react';
import  {
    Form,
    Button,
    FormControl,
    InputGroup
}  from 'react-bootstrap';
class TodoForm extends React.Component{ // ima svoj state preko kojeg prikupljamo podatke 

    state = {
        newTask: ''
    };

    ref = React.createRef();

    handleChange = e => {  // hvata event value i kroz setState postavlja value newTask-a
        const newTask = e.target.value;
        this.setState({newTask});
    }

    handleAddTodo = e =>{
        e.preventDefault(); // da se ne okida default da ga nema imali bi refresh odmah i nesmije se događati u reactu!!
        const {newTask} = this.state;
        const {addTodo} = this.props;

        if(!newTask){ //!newTask je if not newTask ovime zaustavljamo upisivanje taska koji nema nikakvu vrijednost
            return;
        }
        addTodo(newTask);

        this.setState({newTask : ''}); //resetiranje input polja

        if(this.ref.current){
            this.ref.current.focus();// pozivanje metode fokus na ref koji smo postavili prije
        }
    }

    render(){
        const {newTask} = this.state;
        return (
            <Form>
                <InputGroup size="lg">
                    <FormControl 
                        placeholder="Add new task"
                        onChange = {this.handleChange}
                        value = {newTask}
                        ref = {this.ref} //referenca od input polja preko kojeg objekta možemo na button staviti autFocus na input polje
                        autoFocus
                    />
                    <InputGroup.Append>
                        <Button 
                            size="lg"
                            variant = "outline-secondary"
                            onClick = {this.handleAddTodo}
                            type = "submit"
                        >
                            Add
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        );
    }
}

export default TodoForm;