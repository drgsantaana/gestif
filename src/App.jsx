import Task from "./components/Task"

function App() {

  const tasks = [
    {
      id: 1,
      titulo: "Aula React 01",
      categoria: "Educação",
      nivel: "Fácil",
      status: true
    },

    {
      id: 2,
      titulo: "Aula Natação 01",
      categoria: "Esporte",
      nivel: "Médio",
      status: true
    },

    {
      id: 3,
      titulo: "Agachar com 500kg",
      categoria: "Esporte",
      nivel: "Difícil",
      status: true
    }
  ]


  return (
    <>
      {
        tasks.map((task) => (
          <Task 
            key = {task.id}
            titulo = {task.titulo}
            categoria = {task.categoria}
            nivel = {task.nivel}
            status = {task.status}
          />
        ))
      }
    </>
  )
}

export default App;
