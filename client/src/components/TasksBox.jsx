import InputBox from "./InputBox";
import TasksGrid from "./TasksGrid";
import {useState, useEffect} from 'react'

function TasksBox(){
    const [tasks, setTasks] = useState([]);

	//will pickup the data from tasks in the backend on first render
	useEffect(() => {
		fetch("http://localhost:8000/tasks")
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error("unable to retreive data");
				}
			})
			.then((data) => {
				setTasks(data);
			})
			.catch((error) => {
				console.log(error.message);
			});
	}, [tasks]);

	return (
		<section id="to-do-section">
			<InputBox tasks={tasks} setTasks={setTasks} />
			<TasksGrid tasks={tasks} setTasks={setTasks} />
		</section>
	);
}

export default TasksBox;