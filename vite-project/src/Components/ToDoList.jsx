// ToDoList.jsx
import ToDoItem from './ToDoItem';

export default function ToDoList({ items, onComplete, onDelete, onEdit }) {
  return (
    <div>
      {items.map(item => (
        <ToDoItem
          key={item.id}
          item={item}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}