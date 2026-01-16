import { Badge, BadgeAlert, BadgeCheck, Check } from 'lucide-react';
import './Task.css';

const Task = ({ titulo, categoria, nivel, status }) => {
    return (
        <>
            <div className="dashboard">
                <div className={`task-card ${nivel === 'Alto' ? 'alto' : ''}`}>
                    <h2 className="task-title">{titulo}</h2>
                    <div className="task-meta">
                        <span className="meta-item">
                            <span className="category">{categoria}</span>
                        </span>
                        <span className="meta-item">
                            <span className="level">{nivel}</span>
                        </span>
                        <span className="meta-item">
                            <span className="status completed">{status ? <BadgeCheck /> : <Badge />}</span>
                        </span>
                        {(nivel == 'Alto') & !status ? (
                            <span className="meta-item">
                                <span className="status completed" title="Urgente">
                                    <BadgeAlert />
                                </span>
                            </span>
                        ) : (
                            <span></span>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Task;
