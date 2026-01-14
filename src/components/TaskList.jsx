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
                <div key={task.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '1em', gap: '1em' }}>
                    <Task
                        key={task.id}
                        titulo={task.titulo}
                        categoria={task.categoria}
                        nivel={task.nivel}
                        status={task.status}
                    />
                    <button onClick={() => handleDescricao(task)}>
                        <BookAlert />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
