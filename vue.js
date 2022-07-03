const app = Vue.createApp({
    data(){
        return {
            //About
            about_tittle: 'About and Services',
            about: [
                {
                    tittle:'ONLINE CHAT', 
                    description:'Connect with your Customers on demand. Our live-chat solution is simple, reliable, easy to use! Hosted,       secure, and only requires a small snippet of HTML code be added to your website.', 
                    img_alt:'Online_service', 
                    image_url:'includes/png/Onlinechat.png',
                    carousel:'carousel-item active'
                },{
                    tittle:'CONTACTS', 
                    description:'This will help you communicate easily and quickly with Customers, Consumers, Constituents, in a cost-effective and preferred way.', 
                    img_alt:'contacts', 
                    image_url:'includes/png/Contacts.png',
                    carousel:'carousel-item'
                },{
                    tittle:'VIEW DATE', 
                    description:'This will help you communicate easily and quickly with Customers, Consumers, Constituents, in a cost-effective and preferred way.', 
                    img_alt:'viewdate', 
                    image_url:'includes/png/Viewdate.png',
                    carousel:'carousel-item'
                },{
                    tittle:'REQUEST A QUOTE', 
                    description:'Request a quote for affordable WEB services and more, scroll down to find contact form and for other enquiries.', 
                    img_alt:'requestquote', 
                    image_url:'includes/png/Requestaquote.png',
                    carousel:'carousel-item'
                },{
                    tittle:'PAYMENT METHOD', 
                    description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 
                    img_alt:'paymentmethod', 
                    image_url:'includes/png/Paymentmethod.png',
                    carousel:'carousel-item'
                },{
                    tittle:'CREATE RESUME', 
                    description:'Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!', 
                    img_alt:'resume', 
                    image_url:'includes/png/Resume.png',
                    carousel:'carousel-item'
                },{
                    tittle:'WEB SERVICES', 
                    description:'Safe, secure, reliable web hosting for your website or other business needs. With flexible packages and support available, you can rest assured that we’ll keep you connected and online.', 
                    img_alt:'webservices', 
                    image_url:'includes/png/Webservices.png',
                    carousel:'carousel-item'
                },{
                    tittle:'WHAT\'S NEW', 
                    description:'No news update yet!..', 
                    img_alt:'news', 
                    image_url:'includes/png/Whatsnew.png',
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
                },
            ]
        }
    }
})