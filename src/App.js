import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [id, setId] = useState(1)
  const incrementCounter = () => {
    setId((previousValue) => previousValue + 1)
  }
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState([])
  const addTodo = () => {
    console.log(title)
    const newTodo = {
      todoId: id,
      title: title,
      description: description
    }
    setTodos([...todos, newTodo])
    incrementCounter()
    setTitle("")
    setDescription("")
  }

  const resetList = () => {
    setId(1) // when the list is cleared it starts from 1 again
    setTodos([]) // clears the list but starts again from the last item
    /* window.location.reload(true) */ // refreshes the page
  }

  const deleteTodo = (deleteId) => {
    const filterTodos = todos.filter((todo) => todo.todoId !== deleteId)
    setTodos(filterTodos)
  }

  return (
    <div>
      <div style={{display: 'flex'}}>
        <label>Title<input value={title} onChange={(event) => {
          console.log(event.target.value)
          setTitle(event.target.value)
        }}/></label>
        <label>Description<input value={description} onChange={(event) => {
          console.log(event.target.value)
          setDescription(event.target.value)
        }}/></label>
        <button className="addBtn" onClick={addTodo}><i class="fa-solid fa-plus"></i> ADD TODO</button>
        <button className="resetBtn" onClick={resetList}><i class="fa-solid fa-arrows-rotate"></i> RESET</button>
      </div>
      {todos.map(({todoId, title, description}) => {
      return <Todo key={todoId} id={todoId} title={title} description={description} onDelete={deleteTodo}/>
      })}
    </div>
  )
}

export default App;
