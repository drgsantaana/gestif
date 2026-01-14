import { Check } from "lucide-react";
import "./Task.css"

const Task = ({titulo, categoria, nivel, status}) => {
    return (
        <>

            
        
        <div className="dashboard">
            <div className="task-card">
                <h2 className="task-title">{titulo}</h2>
                <div className="task-meta">
                    <span className="meta-item">
                        <span className="category">{categoria}</span>
                    </span>
                    <span className="meta-item">
                        <span className="level">{nivel}</span>
                    </span>
                    <span className="meta-item">
                        <span className="status completed">

                            {status && <Check />}



                        </span>
                    </span>
                </div>
                {/* <p className="task-description">Set up secure user authentication with JWT tokens and password hashing.</p>
                <button className="action-button">View Implementation Details</button> */}
            </div>
        </div>


        </>
    );
}
 
export default Task;