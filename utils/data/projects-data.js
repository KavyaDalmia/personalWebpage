import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
<<<<<<< HEAD
        name: 'AI Powered Financial App',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
=======
        title: "YouCode Hackathon 2024" ,
        name: 'Wellness and Arc’teryx gear app',
        description1: "Extracted user insights by querying the Arc'teryx database using TypeScript and JavaScript for data collection and analysis.",
        description2: "Implemented a React-based personality quiz to assess user characteristics and preferences.",
        description3: "Integrated the OpenAI API with TypeScript for advanced data processing, leveraging data analysis techniques to recommend personalized gear selections based on user profiles.",
        tools: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'React.js', 'OpenAI API', 'Data analysis' ],
        role: 'Front-end Developer',
        code: '',
        demo: '',
        image: crefin,
        github: 'https://devpost.com/software/aviary-hmcbs6',
        devpost: '',
        linkedIn: '',
        //image1: "/expImages/youCode.png",
        image1: "/expImages/youcode2.png",
        image2: "/expImages/youcode3.png"
    },
    {
        id: 2,
        title: 'Customer Churn Case competition 2024 (SAP x WiDS Women in Data Science)',
        name: 'Effects of AI on Customer Churn for SAP',
        description1: 'Developed a machine learning model using Random Forest algorithm in Jupyter Notebooks to analyze SAP\'s churn data, resulting in improved churn prediction accuracy.',
        description2: 'Conducted comprehensive competitor research and SWOT analysis to identify key factors contributing to churn, culminating in actionable insights for reducing churn rates.',
        description3: 'Leveraged data analysis techniques and research findings to formulate a compelling pitch for SAP, outlining strategic recommendations on how to effectively mitigate churn.',
        awards: '3rd PRIZE',
        tools: ['Jupyter Notebooks', 'Machine Learning', 'Data Analysis', 'SWOT', 'Competitor Analysis', 'Research'],
        role: 'Researcher',
        code: '',
        demo: '',
        image: travel,
        github: 'https://devpost.com/software/aviary-hmcbs6',
        devpost: '',
        linkedIn: '',
        image1: "/expImages/cc1.png",
        image2: "/expImages/cc2.png",
        image3: "/expImages/cc3.png"
    },
    {
        id: 3,
        title: 'cmd-f Hackathon 2024 (NwPlus UBC)',
        name: 'Realm- AI power Reproductive Wellness',
        description1: 'Developed a cyber-security focused reproductive wellness application in Python, utilizing machine learning algorithms to provide personalized recommendations for women\'s mental and physical health based on their menstrual cycle data.',
        description2: 'Implemented Passage by 1Password for robust user authentication and security measures, ensuring the protection of user-entered data within the web application.',
        description3: 'Integrated the Cohere Retrieval Augmented Generation (RAG) API to enhance user experience by generating personalized recommendations based on predicted ovulation dates derived from machine learning predictive algorithms.',
        awards: 'Cyber Mindset from Communications Security Establishment (CSE) — Centre de la s ́ecurit ́e des t ́el ́ecommunications (CST) and 1Password sponsored Best Security Hack award ',
        tools: ['Python', 'Express.js','Web authentication', 'Passage by 1password', 'Cohere RAG API', 'Machine Learning', 'Security', 'Research'],
        role: 'Front-end and Back-end development',
        code: '',
        demo: '',
        image: travel,
        github: 'https://devpost.com/software/aviary-hmcbs6',
        devpost: '',
        linkedIn: '',
        image1: "/expImages/cmd-f1.png",
        image2: "/expImages/cmd-f2.png",
        image3: "/expImages/cmd-f3.png"
    },
    {
        id: 3,
        title: 'Database management',
        name: 'Student marketplace',
        description1: 'Developed a Facebook Student Marketplace, managing ER modeling, database design, normalization, and SQL queries. Implemented data warehousing and mining for performance optimization.',
        description2: 'Worked in a team to design and implement a database schema for a real-world entity. Used ER diagrams, schema normalization, and PHP backend for data querying.',
        description3: 'Built a user-friendly front-end interface using HTML and CSS that seamlessly integrates with the PHP backend.',
        tools: ['ER modeling', 'Database design', 'Normalisation', 'Relational Query Language (SQL)', 'Data warehousing', 'Data mining', 'PHP', 'Git'],
        role: 'Developer',
        code: '',
        demo: '',
        image: travel,
        github: 'https://devpost.com/software/aviary-hmcbs6',
        devpost: '',
        linkedIn: ''
>>>>>>> master
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },