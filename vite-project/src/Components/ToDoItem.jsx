// ToDoItem.jsx
export default function ToDoItem({ item, onComplete, onDelete, onEdit }) {
    return (
      <div className="flex justify-between items-center p-2 bg-gray-100 rounded-md mb-2">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onComplete(item.id)}
          className="mr-2"
        />
        <span className={`flex-1 ${item.completed ? 'line-through text-gray-500' : ''}`}>
          {item.text}
        </span>
        <button onClick={() => onEdit(item.id)} className="mr-2 text-blue-500">
          Edit
        </button>
        <button onClick={() => onDelete(item.id)} className="text-red-500">
          Delete
        </button>
      </div>
    );
  }