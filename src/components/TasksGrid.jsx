import Task from "./Task";
import tasks from "../../data";
import {useState, useEffect} from 'react'

function TasksGrid() {
    const [completedTasks, setCompletedTasks] = useState([])
    const [tasksLeft, setTasksLeft] = useState(tasks.length);

    useEffect(() => {
       setTasksLeft(() => {
            return tasks.length - completedTasks.length
       })
    }, [completedTasks])

    return (
		<div id="tasks-grid">
			<h2>Your tasks: </h2>

			<div id="to-do-list">
				{tasks.map((task, index) => (
					<Task
						key={index}
						description={task.description}
                        completedTasks={completedTasks}
                        setCompletedTasks={setCompletedTasks}
					/>
				))}
			</div>

			<div id="task-filters">
				<span id="items-left">{tasksLeft} items left</span>

				<div id="filter-options">
					<span className="filter-option">All</span>
					<span className="filter-option">Active</span>
					<span className="filter-option">Complete</span>
				</div>

				<span id="clear-completed">Clear Complete</span>
			</div>
		</div>
	);
}

export default TasksGrid;