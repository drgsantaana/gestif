import { BookAlert } from 'lucide-react';

const TaskList = ({ titulo, categoria, nivel, descricao }) => {
    const handleDescricao = () => {
        alert(descricao);
    };

    return (
        <div className="task-list" style={{
            padding: "1em",
            border: "1px solid #ddd",
            borderRadius: "0.5em",
            maxWidth: "400px",
            margin: "0 auto",
            backgroundColor: "#f9f9f9",
        }}>
            <Task titulo={titulo} categoria={categoria} nivel={nivel} />
            <button onClick={handleDescricao}>
                <BookAlert />
            </button>
        </div>
    );
};

export default TaskList;
