import axios from "axios";
import { AddTask } from "./AddTask";
import { Stats } from "./Stats";
import { TaskList } from "./TaskList";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  useEffect(() => {
    axios.get("http://localhost:3004/tasks")
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3004/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task.id !== id));
      })
      .catch(err => {
        console.error("Failed to delete task", err);
      });
  };

  const handleStatusChange = (id, newStatus) => {
    axios.patch(`http://localhost:3004/tasks/${id}`, { status: newStatus })
      .then(() => {
        setTasks(tasks.map(task => 
          task.id === id ? { ...task, status: newStatus } : task
        ));
      })
      .catch(err => {
        console.error("Failed to update status", err);
      });
  };

  return (
    <div className="dashboard">
      <div className="row">
        <TaskList
          tasks={tasks}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
        <AddTask onAdd={addTask} />
      </div>
      <Stats tasks={tasks} /> 
    </div>
  );
};