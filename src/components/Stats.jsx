export const Stats = ({ tasks }) => {
    const total = tasks.length;
  
    const statusCount = tasks.reduce((acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    }, {});
  
    const completed = statusCount["completed"] || 0;
    const inProgress = statusCount["in progress"] || 0;
    const unstarted = statusCount["unstarted"] || 0;
  
    return (
      <div className="stats">
        <p>Completed: {completed}/{total}</p>
        <p>In Progress: {inProgress}/{total}</p>
        <p>Unstarted: {unstarted}/{total}</p>
      </div>
    );
  };