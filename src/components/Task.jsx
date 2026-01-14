import "./Task.css"

const Task = ({titulo, categoria, nivel, status}) => {
    return (
        <>

            <div className="card">
                <div className="card-content">
                    <p className="card-title">
                        {titulo}
                    </p>

                    <p className="card-para">
                        {categoria}
                    </p>

                    <p className="card-para">
                        {nivel}
                    </p>

                    <p className="card-para">
                        {status}
                    </p>
                </div>
            </div>


        </>
    );
}
 
export default Task;