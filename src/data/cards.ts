export interface Project{
    id: number;
    title: string;
    description: string;
    image: string;
    tools: string [];
    link: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Notes App',
        description: 'A React-based web app for adding, deleting, and searching notes, utilizing state to manage data and array map to display the note list',
        image: 'notes.png',
        tools: ['js.png', 'react.png', 'Vite.js.png'],
        link: 'https://imarod.github.io/notes-app/',
    },
    {
        id: 2,
        title: 'Restaurants Catalog',
        description: 'A restaurant catalog app utilizing IndexedDB for offline data storage, showcasing restaurant details, and tested with Jest for reliability.',
        image: 'resto.png',
        tools: ['js.png', 'Webpack.png', 'Jest.png'],
        link: 'https://web-testing-alpha.vercel.app/',
    },
    {
        id: 3,
        title: 'ColdBrew',
        description: 'A web app for searching alcoholic beverages via API, displaying detailed drink info with a responsive and dynamic UI.',
        image: 'coldbrew.png',
        tools: ['js.png', 'Postman.png', 'Webpack.png'],
        link: 'https://imarod.github.io/Cocktail-Recipes/',
    },
    {
        id: 4,
        title: 'Bookshelf App',
        description: 'A React-based app for managing, categorizing, and searching books with dynamic state management and modern UI',
        image: 'bookshelf.png',
        tools: ['js.png', 'react.png', 'Vite.js.png', 'Tailwind CSS.png'],
        link: 'https://imarod.github.io/Bookshelf/',
    }
]