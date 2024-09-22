function InputBox(){
    return (
		<form id="input-box">
			<div className="task-checkbox"></div>
			<input
				type="text"
				id="to-do-input"
				placeholder="Create a new todo..."
			/>
		</form>
	);
}

export default InputBox;