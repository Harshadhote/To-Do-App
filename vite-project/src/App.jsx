// App.jsx
import { useState } from 'react';
import Header from './Components/Header';
import ToDoList from "./Components/ToDoList";
import backgroundImage from './assets/TODO BG.jfif';

export default function App() {
  const [items, setItems] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setItems([...items, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const markComplete = id => {
    setItems(items.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)));
  };

  const deleteTask = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const editTask = id => {
    const newText = prompt('Edit task:');
    if (newText) {
      setItems(items.map(item => (item.id === id ? { ...item, text: newText } : item)));
    }
  };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <div className="p-4">
//         <div className="mb-4">
//           <input
//             type="text"
//             value={newTask}
//             onChange={e => setNewTask(e.target.value)}
//             placeholder="Add a new task"
//             className="p-2 border rounded-md w-3/4"
//           />
//           <button onClick={addTask} className="ml-2 p-2 bg-blue-500 text-white rounded-md">
//             Add
//           </button>
//         </div>
//         <ToDoList
//           items={items}
//           onComplete={markComplete}
//           onDelete={deleteTask}
//           onEdit={editTask}
//         />
//       </div>
//     </div>
//   );
// }

return (
  <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
    {/* Header component (add it if you have one) */}
    <header className="text-center text-gray-900
    p-4">
      <h1 className="text-3xl font-bold">To-Do List</h1>
    </header>

    <div className="flex justify-center items-center min-h-screen px-4">
      {/* Main content container */}
      <div className="w-full max-w-md bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
        <div className="mb-4">
          {/* Task input field */}
          <input
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="p-2 border rounded-md w-full mb-3"
          />
          {/* Add button */}
          <button onClick={addTask} className="w-full p-2 bg-blue-500 text-white rounded-md">
            Add Task
          </button>
        </div>

        {/* To-Do List */}
        <ul className="space-y-4">
          {items.map(item => (
            <li
              key={item.id}
              className={`p-3 border rounded-md flex justify-between items-center ${item.completed ? 'bg-green-100' : 'bg-white'}`}
            >
              <span className={`${item.completed ? 'line-through text-gray-500' : ''}`}>{item.text}</span>
              <div className="flex space-x-2">
                <button onClick={() => markComplete(item.id)} className="p-2 bg-yellow-500 text-white rounded-md">
                  {item.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => editTask(item.id)} className="p-2 bg-blue-500 text-white rounded-md">
                  Edit
                </button>
                <button onClick={() => deleteTask(item.id)} className="p-2 bg-red-500 text-white rounded-md">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
}