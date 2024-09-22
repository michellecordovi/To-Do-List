/* eslint-disable react/prop-types */
import Task from "./Task";
import { useState, useEffect } from "react";

function TasksGrid({tasks, setTasks}) {
	const [completedTasks, setCompletedTasks] = useState([]);
	const [tasksLeft, setTasksLeft] = useState(tasks.length);

	//updates # of tasks left whenever completed tasks changes
	useEffect(() => {
		setTasksLeft(() => {
			return tasks.length - completedTasks.length;
		});
	}, [completedTasks, tasks.length]);

	return (
		<div id="tasks-grid">
			<h2>Your tasks: </h2>

			<div id="to-do-list">
				{tasks.map((task, index) => (
					<Task
						key={index}
						tasks={tasks}
						setTasks={setTasks}
						description={task.description}
						completed={task.completed}
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
