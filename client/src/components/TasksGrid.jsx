import Task from "./Task";
import { useState, useEffect } from "react";

function TasksGrid() {
	const [tasks, setTasks] = useState([])
	const [completedTasks, setCompletedTasks] = useState([]);
	const [tasksLeft, setTasksLeft] = useState(tasks.length);

	//will pickup the data from tasks in the backend whenever this is rendered
	useEffect(() => {
		fetch('http://localhost:8000/tasks')
			.then((res) => {
				if(res.ok){
					return res.json();
				} else {
					throw new Error('unable to retreive data')
				}
			})
			.then((data) => {
				setTasks(data);
				setTasksLeft(data.filter(task => !task.completed).length)
			})
			.catch(error => {
				console.log(error.message);
			})
		
	}, [])

	useEffect(() => {
		setTasksLeft(() => {
			return tasks.length - completedTasks.length;
		});
	}, [completedTasks]);

	return (
		<div id="tasks-grid">
			<h2>Your tasks: </h2>

			<div id="to-do-list">
				{tasks.map((task, index) => (
					<Task
						key={index}
						tasks={tasks}
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
