const projects = [
    {
        name: 'my-library',
        title: 'My Library',
        stack: 'LAMP',
        frontend: ['HTML', 'CSS'],
        backend: ['PHP', 'MySQL'],
        framework: 'none',
        github: 'https://github.com/wblaket/mylibrary',
        shortDesc: 'Book cataloguing website',
        badges: [`<AiFillHtml5 />`, `<SiCss3 />`, `<SiMysql />`, `<SiPhp />`],
        description: [
            `Book cataloguing website built with PHP and MySQL.
            Utilizes MySQL to store user account information and uses PHP for session handling.`,
            `Users can upload book data and later delete, as well as search database for their books.
            The home page displays images of the books uploaded, and personalized
            stats about the user's catalogue.`,
        ]

    },    {
        name: 'jax-blog',
        title: 'Jax Blog',
        stack: 'LAMP',
        frontend: ['HTML', 'CSS'],
        backend: ['PHP', 'MySQL', 'Javascript', 'Ajax'],
        framework: 'none',
        github: 'https://github.com/wblaket/jax-blog',
        shortDesc: 'Micro-blogging website',
        description: [
            `Micro-blogging website using PHP & MySQL to store user accounts and blog posts.`,

            `Using AJAX, users can post blogs and the home page will update without refreshing.
            Search page also utilizes Ajax functions to search database based on seach terms.
            Additionally includes a page where users can update their profile information.`,
        ]
    },     {
        name: 'ticket-now',
        title: 'Ticket Now!',
        stack: 'Django',
        frontend: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        backend: ['Python', 'SQLite'],
        framework: 'Django',
        github: 'https://github.com/wblaket/ticket-now',
        shortDesc: 'IT Ticketing System',
        description: [
            `Python-based ticket management system built with Django framework.
            End-users can create and submit Incident, Reqest, Problem, and Change tickets.
            Users catagorized as technicans can update and resolve tickets.`,
        ]
    },      {
        name: 'the-302',
        title: 'The 302',
        stack: 'MERN',
        frontend: ['HTML', 'CSS', 'Bootstrap'],
        backend: ['NodeJS', 'MongoDB', 'Express'],
        framework: 'React',
        github: 'https://github.com/wblaket/tech-blog',
        shortDesc: 'Technical Blog',
        description: [
            `Tech blog built with React where readers can view articles that are stored on a
            No-SQL server. Using MongoDB and Express, users can leave upvotes and comments on articles.`,
        ]
    },{
        name: 'fetch-walker',
        title: 'Fetch Walker',
        stack: 'MERN',
        frontend: ['HTML', 'CSS', 'React', 'Semantic UI'],
        backend: ['NodeJS', 'MongoDB', 'Express'],
        framework: 'React',
        github: 'https://github.com/wblaket/dog-walker',
        shortDesc: 'Dog Walker App',
        description: [
            `App where potential dog-walkers can find and connect with local pet-owners. Users can view
            photos of the pet and other relevant details. Data for the owners and pets are stored and fetched from
            a MongoDB database.`,
        ]
    },
    {
        name: 'blake-tharp',
        title: 'BlakeTharp.dev',
        stack: 'MERN',
        frontend: ['HTML', 'CSS', 'React', 'SemanticUI'],
        backend: ['N/A'],
        framework: 'React',
        github: 'https://github.com/wblaket/blake-tharp-dev',
        shortDesc: 'Technical Blog',
        description: [
            `If you're reading this, you're here now! This is a front-end site
            built around the React framework. You can view the code for this site on Github.`
        ]
    }, {
        name: 'tic-tac-toe',
        title: 'Advanced Tic-Tac-Toe',
        stack: 'N/A',
        frontend: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        backend: ['N/A'],
        framework: 'N/A',
        github: 'https://github.com/wblaket/advanced-tictactoe',
        shortDesc: 'Tic-Tac-Toe with a unique twist!',
        description: [
            `JavaScript Tic Tac Toe game that allows users to select larger board sizes up to 6x6.
            Players can customize the win conditions as well as the board theme.
            Utilizes JQuery to customize settings and run the game.`,
        ]
    },
];

export default projects;
