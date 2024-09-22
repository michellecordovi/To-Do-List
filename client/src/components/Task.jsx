/* eslint-disable react/prop-types */
import { useState } from "react";

function Task({ tasks, description, completedTasks, setCompletedTasks }) {
	const index = tasks.findIndex((item) => item.description === description); //finds index of this particular tasks in the tasks data

	const [isComplete, setIsComplete] = useState(false);

	//This will show checkmark on a task when clicked and update tasks data
	function checkTask() {
		setIsComplete(!isComplete);

		tasks[index].completed = isComplete; //changes the value of the tasks 'completed' data when clicked
		//sets is completed state

		//pushes or splices this task from the completed tasks array to calculate how many tasks are left
		if (completedTasks.includes(description)) {
			setCompletedTasks(
				completedTasks.filter((task) => task !== description)
			);
		} else {
			setCompletedTasks([...completedTasks, description]);
		}
	}

	return (
		<div className="task">
			<div
				onClick={checkTask}
				className={
					isComplete ? "task-checkbox is-checked" : "task-checkbox"
				}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
					<path
						fill="none"
						stroke="#FFF"
						strokeWidth="2"
						d="M1 4.304L3.696 7l6-6"
					/>
				</svg>
			</div>
			<p
				className={
					isComplete
						? "task-description completed-task"
						: "task-description"
				}
			>
				{description}
			</p>
		</div>
	);
}

export default Task;
