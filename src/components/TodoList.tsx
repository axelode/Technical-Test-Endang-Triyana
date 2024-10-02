import { FC, useState } from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const addTodo = () => {
        if (inputValue.trim() === '') return;

        const newTodo: Todo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className='container'>
            <h1 className='header'>Todo List</h1>

            <div className='todo-form'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new todo"
                    className='input'
                    required
                />

                <button onClick={addTodo} className='button'>Add</button>
            </div>

            <div className='list'>
                {todos.map(todo => (
                    <div key={todo.id} className='content'>
                        <div className='content-left'>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                                className='check'
                            />

                            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.text}
                            </span>
                        </div>

                        <button
                            onClick={() => removeTodo(todo.id)}
                            className='button'
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
