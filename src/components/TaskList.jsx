import { BookAlert } from 'lucide-react';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks }) => {
    const handleDescricao = (task) => {
        alert(task.descricao || 'Descrição não disponível.');
    };

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div key={task.id} className="task-row">
                    <Task titulo={task.titulo} categoria={task.categoria} nivel={task.nivel} status={task.status} />
                    <button title="Descrição" className="action-button" onClick={() => handleDescricao(task)}>
                        <BookAlert size={20} />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
