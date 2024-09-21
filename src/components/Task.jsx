/* eslint-disable react/prop-types */
function Task({description}) {
    return (
        <div className="task">
            <div className = "task-checkbox"></div>
            <p className="task-description">{description}</p>
        </div>
    )
}

export default Task;