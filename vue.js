const app = Vue.createApp({
    data(){
        return {
            //About
            about_tittle: 'Project Description',
            about: [
                {
                    tittle:'Data Analysis with Python', 
                    description:'On this project random csv data was pulled from kaggle for data analysis. It starts from the basics of making dataframes using arrays, dictionaries, and csv data In the descriptive data analysis pivot tables were used to summarise the data from csv imports and to visualise the data in a a form of graphs and pie charts. Pandas, numpy and matplotlib are the modules used in this project.', 
                    img_alt:'jupyter_notebook', 
                    image_url:'includes/png/python_analysis.png',
                    carousel:'carousel-item active'
                },{
                    tittle:'Machine Learning', 
                    description:'Building and training a model to predict car prices in the future using Linear Regression. Some Machine Learning libraries from sklearn used are model_selection, linear_model and metrix.', 
                    img_alt:'machine_learning', 
                    image_url:'includes/png/machine_learning.png',
                    carousel:'carousel-item'
                },{
                    tittle:'Laravel Relational DB with Authentication', 
                    description:'User Management admin to manage the permissions role for each user on a web application and Product Management admin to perform crud operations to manage product\'s categories and tags.', 
                    img_alt:'advanced_reelations_withauth', 
                    image_url:'includes/png/advanced_reelations_withauth.png',
                    carousel:'carousel-item'
                },{
                    tittle:'Visual Analysis for Covid Stats', 
                    description:'On this project an open source JSON data was used to analyse covid stats during the year 2020. The technology used in this project is Vue.js, HTML, CSS, Bootstrap5 and Github pages to host it.', 
                    img_alt:'covid_stats', 
                    image_url:'includes/png/covid_stats.png',
                    carousel:'carousel-item'
                },{
                    tittle:'Users API Integration', 
                    description:'Basic data retrieval from an API to storage in a database and data presentation. OOP principles applied using the Laravel framework and MVC architecture.', 
                    img_alt:'users_api', 
                    image_url:'includes/png/users_api.png',
                    carousel:'carousel-item'
                },{
                    tittle:'Shopping Cart', 
                    description:'Creating a shopping cart with Vue.js and managing the state of the cart, displaying the cart items, and handling user interactions such as adding and removing items.', 
                    img_alt:'shopping_cart', 
                    image_url:'includes/png/shopping_cart.png',
                    carousel:'carousel-item'
                },{
                    tittle:'API Intergration', 
                    description:'Product retrieval from an API and Javascript DOM manipulation to select product color and size. PHP Laravel Sanctum authentication was used to build the API.', 
                    img_alt:'product_retrieval', 
                    image_url:'includes/png/product_retrieval.png',
                    carousel:'carousel-item'
                },
            ],
            

            //Project history
            project_history_tittle: 'Project History',
            project_history: [
                {
                    name:'Vue', image_url:'includes/png/github.png', img_alt:'github', link:'https://github.com/TerenceManyike/Vue'
                },{
                    name:'Laravel', image_url:'includes/png/github.png', img_alt:'github', link:'https://github.com/TerenceManyike/Laravel'
                },{
                    name:'JavaScript', image_url:'includes/png/github.png', img_alt:'github', link:'https://github.com/TerenceManyike/JavaScript'
                },{
                    name:'My Portfolio', image_url:'includes/png/github.png', img_alt:'github', link:'https://github.com/TerenceManyike/MyPortfolio'
                },{
                    name:'Users API Integration', image_url:'includes/png/github.png', img_alt:'github', link:'https://github.com/TerenceManyike/usersAssessment'
                },{
                    name:'Covid Stats API Integration', image_url:'includes/png/github.png', img_alt:'github', link:'https://github.com/TerenceManyike/Assessment-1'
                },{
                    name:'Laravel Relational DB with Authentication', image_url:'includes/png/github.png', img_alt:'github', link:'https://github.com/TerenceManyike/CubeAssessment'
                },{
                    name:'Fundamentals of OOP', image_url:'includes/png/github.png', img_alt:'github', link:'https://github.com/TerenceManyike/OOP'
                },{
                    name:'Data Analysis with Python', image_url:'includes/png/github.png', img_alt:'github', link:'https://github.com/TerenceManyike/pythonDataAnalysis'
                },{
                    name:'Machine Learning using Linear Regression', image_url:'includes/png/github.png', img_alt:'github', link:'https://github.com/TerenceManyike/Machine-Learning'
                },
            ],

            //Profile section
            profile_tittle: 'My Portfolio',
            profiles: [
                {
                    name:'Profile', 
                    image_url:'includes/Profile.jpg', 
                    img_alt:'About my profile', 
                    link:'profile.html',
                    description: 'I\'m a PHP full stack junior developer. I\'m a designer who cares about your story.'
                },{
                    name:'Education', 
                    image_url:'includes/Education.jpg', 
                    img_alt:'About my education', 
                    link:'San/index.html',
                    description: 'Studying abroad gave me the chance to see a side of my major that I have never been exposed to.'
                },{
                    name:'Resume Builder', 
                    image_url:'includes/Projects.jpg', 
                    img_alt:'About my projects', 
                    link:'My_projects.html',
                    description: 'Create a resume for free that will stand out using a CV generator built with care.'
                },
            ]
        }
    }
})
