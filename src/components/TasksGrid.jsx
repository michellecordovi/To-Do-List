import Task from "./Task";
import tasks from "../../data";

function TasksGrid() {


    return (
        <div id="tasks-grid">
            <h2>Your tasks: </h2>

            <div id="to-do-list">
                {tasks.map(task => (
                    <Task 
                        key={task.description} 
                        description={task.description} 
                        competed={task.completed} 
                    />
                ))}
            </div>

            <div id="task-filters">
                <span id="items-left">0 Items left</span>

                <div id="filter-options">
                    <span>All</span>
                    <span>Active</span>
                    <span>Complete</span>
                </div>

                <span id="clear-completed">Clear Complete</span>
            </div>
        </div>
    )
}

export default TasksGrid;