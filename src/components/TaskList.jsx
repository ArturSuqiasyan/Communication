import { Task } from './Task';
export const TaskList = ({ tasks, onDelete, onStatusChange }) => {
    return <div>
        <p>TaskList</p>
        <div className="list">
           {tasks.map (task => 
            <Task 
            key={task.id} 
            task={task} 
            onDelete={onDelete}
            onStatusChange={onStatusChange}
            />
           )}
        </div>
    </div>
}