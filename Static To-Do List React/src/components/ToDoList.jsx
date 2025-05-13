export default function ToDoList() {
    
    let tasks = ["Learn React", "Build a Project", "Read Documentation"];

    return (

        <div>
            <ul>
                <li>{tasks[0]}</li>
                <li>{tasks[1]}</li>
                <li>{tasks[2]}</li>
            </ul>
        </div>

    );
};