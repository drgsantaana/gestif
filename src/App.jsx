import Task from './components/Task';
import './App.css';
import TaskList from './components/TaskList';

function App() {
    const tasks = [
        {
            id: 1,
            titulo: 'Aula React 01',
            categoria: 'Educação',
            nivel: 'Fácil',
            status: true,
            descricao:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex doloribus quaerat est nemo veniam esse illo labore, porro aliquid nihil sed corporis alias laborum assumenda, blanditiis qui incidunt voluptatibus.',
        },

        {
            id: 2,
            titulo: 'Aula Natação 01',
            categoria: 'Esporte',
            nivel: 'Médio',
            status: true,
            descricao:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex doloribus quaerat est nemo veniam esse illo labore, porro aliquid nihil sed corporis alias laborum assumenda, blanditiis qui incidunt voluptatibus.',
        },

        {
            id: 3,
            titulo: 'Agachar com 500kg',
            categoria: 'Esporte',
            nivel: 'Difícil',
            status: true,
            descricao:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex doloribus quaerat est nemo veniam esse illo labore, porro aliquid nihil sed corporis alias laborum assumenda, blanditiis qui incidunt voluptatibus.',
        },
    ];

    return (
        <>
            <TaskList tasks={tasks} />
        </>
    );
}

export default App;
