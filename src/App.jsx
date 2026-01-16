import TaskList from './components/TaskList';

function App() {
    const tasks = [
        {
            id: 1,
            titulo: 'Aula React 01',
            categoria: 'Educação',
            nivel: 'Alto',
            status: false,
            descricao:
                '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex doloribus quaerat est nemo veniam esse illo labore, porro aliquid nihil sed corporis alias laborum assumenda, blanditiis qui incidunt voluptatibus.',
        },

        {
            id: 2,
            titulo: 'Aula Natação 01',
            categoria: 'Esporte',
            nivel: 'Baixo',
            status: true,
            descricao:
                '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex doloribus quaerat est nemo veniam esse illo labore, porro aliquid nihil sed corporis alias laborum assumenda, blanditiis qui incidunt voluptatibus.',
        },

        {
            id: 3,
            titulo: 'Agachar com 500kg',
            categoria: 'Esporte',
            nivel: 'Alto',
            status: true,
            descricao:
                '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex doloribus quaerat est nemo veniam esse illo labore, porro aliquid nihil sed corporis alias laborum assumenda, blanditiis qui incidunt voluptatibus.',
        },
    ];

    return (
        <>
            <TaskList tasks={tasks} />
        </>
    );
}

export default App;
