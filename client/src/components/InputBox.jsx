function InputBox(){
    return (
		<div id="input-box">
			<div className="task-checkbox"></div>
			<input
				type="text"
				id="to-do-input"
				placeholder="Create a new todo..."
			/>
		</div>
	);
}

export default InputBox;