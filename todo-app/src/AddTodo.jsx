import { useRef } from "react";

const AddTodo = ({ addTodo }) => {

    const todoName = useRef(null);
    const todoDate = useRef(null);

    const addNewTodo = (e) => {
        e.preventDefault();
        let name = todoName.current.value;
        let date = todoDate.current.value;

        todoName.current.value = '';
        todoDate.current.value = '';

        addTodo(name, date);

    }

    return <form onSubmit={addNewTodo}>
        <div className="container text-center mt-4 mb-4">
            <div className="row">
                <div className="col">
                    <input type="text" className="col-8 form-control" placeholder="Enter your todo" aria-label="First name" ref={todoName} />
                </div>
                <div className="col">
                    <input type="date" className="col-8 form-control" aria-label="Last name" ref={todoDate} />
                </div>
                <div className="col">
                    <button type='submit' className='col-4 btn btn-success'>Add</button>
                </div>
            </div>
        </div>
    </form>
}

export default AddTodo;