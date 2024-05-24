const app = Vue.createApp({
    methods: {
      generateCV() {
        const pdfUrl = 'includes/SanManyikeUpdatedCV.pdf';
        window.open(pdfUrl, '_blank');
      }
    },
    data(){
        return {
            skillset: [
                {
                  "skill": "Linux Mint Operating System",
                  "comfortability": 70
                },
                {
                  "skill": "Windows Operating System",
                  "comfortability": 90
                }
                ,
                {
                  "skill": "MySQL",
                  "comfortability": 70
                }
                ,
                {
                  "skill": "PostgreSQL",
                  "comfortability": 50
                }
                ,
                {
                  "skill": "Quantum GIS",
                  "comfortability": 55
                }
                ,
                {
                  "skill": "XAMPP",
                  "comfortability": 90
                }
                ,
                {
                  "skill": "MySQL Workbench",
                  "comfortability": 90
                }
                ,
                {
                  "skill": "DBeaver",
                  "comfortability": 80
                }
                ,
                {
                  "skill": "C Language",
                  "comfortability": 50
                }
                ,
                {
                  "skill": "C++",
                  "comfortability": 50
                }
                ,
                {
                  "skill": "Python",
                  "comfortability": 50
                }
                ,
                {
                  "skill": "Jupyter Notebook",
                  "comfortability": 50
                }
                ,
                {
                  "skill": "R Studio",
                  "comfortability": 50
                },
                {
                  "skill": "Java",
                  "comfortability": 50
                }
                ,
                {
                  "skill": "PHP",
                  "comfortability": 72
                }
                ,
                {
                  "skill": "Laravel",
                  "comfortability": 70
                }
                ,
                {
                  "skill": "Livewire",
                  "comfortability": 69
                }
                ,
                {
                  "skill": "JavaScript",
                  "comfortability": 50
                }
                ,
                {
                  "skill": "JQuery",
                  "comfortability": 55
                }
                ,
                {
                  "skill": "Vue.js",
                  "comfortability": 55
                }
                ,
                {
                  "skill": "AJAX",
                  "comfortability": 50
                }
                ,
                {
                  "skill": "HTML",
                  "comfortability": 95
                }
                ,
                {
                  "skill": "CSS",
                  "comfortability": 60
                }
                ,
                {
                  "skill": "Tailwind",
                  "comfortability": 55
                }
                ,
                {
                  "skill": "Bootstrap",
                  "comfortability": 80
                }
                ,
                {
                  "skill": "Wix-Velo",
                  "comfortability": 50
                }
                ,
                {
                  "skill": "Maple",
                  "comfortability": 80
                }
                ,
                {
                  "skill": "Postman",
                  "comfortability": 50
                }
                ,
                {
                  "skill": "Laravel Compass",
                  "comfortability": 80
                }
                ,
                {
                  "skill": "Apache2, NGINX, tomcat",
                  "comfortability": 50
                }
            ],
            experience: [
              {
                company:'The Data Company', 
                tittle:'PHP Developer', 
                location:'Johannesburg', 
                description:'PHP Full Stack Development for a UK-based client in the Jewellery industry.', 
                duties: [
                  {
                    duty : 'Windows OS, PHP, Laravel, Livewire, Tailwind, and PostgreSQL. (STACK)'
                  },{
                    duty : 'Developing invoice systems and providing sales analytics (Descriptive and Prescriptive).'
                  },{
                    duty : 'Git source control and Azure DevOps for workflow management.'
                  }
                ], 
                start_date:'February 2024',
                end_date:'April 2024'
              },
              {
                company:'Epetstore/Cuberoute', 
                tittle:'PHP Developer', 
                location:'Johannesburg', 
                description:'PHP Full Stack Development for a sales distribution & wholesaling company in the pet specialty channel in South Africa', 
                duties: [
                  {
                    duty : 'PHP, Laravel, JavaScript, Vue.js, Bootstrap, Tailwind, and MySQL. (STACK)'
                  },{
                    duty : 'Developing modular systems and building/maintaining running promotions.'
                  },{
                    duty : 'SQL Reporting, Query optimization, and column indexing.'
                  },{
                    duty : 'Git source control and shortcut for workflow management.'
                  }
                ], 
                start_date:'September 2023',
                end_date:'January 2024'
              },
              {
                company:'MJVN Investment (Pty) Ltd', 
                tittle:'PHP Developer', 
                location:'Pretoria', 
                description:'PHP Full Stack Development for Louis Daniel and Diamond Corporation South Africa.', 
                duties: [
                  {
                    duty : 'Linux OS, PHP, Laravel, JavaScript, jQuery, Bootstrap, and MySQL. (STACK)'
                  },{
                    duty : 'MVC Architectural design pattern, building UI for E-commerce websites.'
                  },{
                    duty : 'Developing database modules and responsive web designs.'
                  },{
                    duty : 'Query optimization and table normalization using eloquent relationships.'
                  },{
                    duty : 'Integrating server-to-server APIs using Sanctum Authentication'
                  },{
                    duty : 'Writing PHP Unit test cases for CRUD operations.'
                  },{
                    duty : 'Git/Bitbucket source control and Trello for workflow management.'
                  }
                ], 
                start_date:'September 2021',
                end_date:'September 2023'
              }
            ]
        }
    }
})
