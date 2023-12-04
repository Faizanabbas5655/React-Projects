const Todos = ({ todo, deleteTodo }) => {

    const handleDelete = (name) => {
        deleteTodo(name);
    }

    return <div className="container text-center mt-4">
        <div className="row">
            <div className="col">
                <p>{todo.name}</p>
            </div>
            <div className="col">
                <p>{todo.date}</p>
            </div>
            <div className="col">
                <button type='submit' className='col-4 btn btn-danger' onClick={() => handleDelete(todo.name)}>delete</button>
            </div>
        </div>
    </div>
}

export default Todos;