/* eslint-disable react/prop-types */
import {useState} from 'react'

function InputBox({setTasks}){
	const [inputTask, setInputTask] = useState("");

	//makes input value statedependent
	function handleChange(event){
		setInputTask(event.target.value)
	}

	//creates POST request to submit new task
	function handleSubmit(e){
		e.preventDefault();
		let completed = false;

		fetch(`http://localhost:8000/tasks?description=${inputTask}&complete=${completed}`, {
			method: 'POST',
		})
			.then(res => {
				if(res.ok){
					return res.json();
				} else {
					throw new Error('THERE WAS AN ERROR IN YOUR POST FETCH REQUEST')
				}
			})
			.then((newTask)=> {
				console.log('YOU DID IT!');
				setInputTask("");
				setTasks(prev => [...prev, newTask])
			})
			.catch(error => {
				console.log(error.message)
			})
	}

    return (
		<form id="input-box" onSubmit={handleSubmit}>
			<div className="task-checkbox"></div>
			<input
				onChange={handleChange}
				type="text"
				id="to-do-input"
				placeholder="Create a new todo..."
				value={inputTask}
			/>
		</form>
	);
}

export default InputBox;