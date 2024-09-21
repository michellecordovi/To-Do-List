import InputBox from "./InputBox";
import TasksGrid from "./TasksGrid";

function TasksBox(){
    return (
        <section id="to-do-section">
            <InputBox />
            <TasksGrid />
        </section>
    )
}

export default TasksBox;