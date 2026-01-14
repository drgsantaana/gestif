import { BookAlert } from 'lucide-react';
import Task from './Task';

const TaskList = ({ tasks }) => {
    const handleDescricao = () => {
        alert(descricao);
    };

    return (
        <div
            className="task-list"
            style={{
                padding: '1em',
                border: '1px solid #ddd',
                borderRadius: '0.5em',
                maxWidth: '400px',
                margin: '0 auto',
                backgroundColor: '#f9f9f9',
            }}
        >
            {tasks.map((task) => (
                <div>
                    <Task
                        key={task.id}
                        titulo={task.titulo}
                        categoria={task.categoria}
                        nivel={task.nivel}
                        status={task.status}
                    />
                    <button>
                        <BookAlert />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
