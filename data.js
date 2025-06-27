export const projects = [
  {
    id: 1,
    url: '/TheWildOasisBookingFeature.mp4',
    title: 'Self study Booking App',
    tech: 'React, Styled Components, React Router, React icons, React Query, React Hot Toast, React Hook Form, reCharts, React Error Boundary, AWS (Elastic Beanstalk)',
    problem:
      'An online tool to manage hotel bookings, enhancing UI/UX for seamless reservations, and streamlining the booking process.',
    solution: 'Intuitive and modern web-based cabin management system.',
    site: 'http://thewildoasis-dev.us-east-1.elasticbeanstalk.com/dashboard',
    github: 'https://github.com/MrJonnyOrtiz/TheWildOasis',
    description:
      "This is a self-study project from a Udemy course. The course covered all the technologies mentioned as a code-along except deploying to AWS Elastic Beanstalk (I learned how to do that myself). The app gives a hotel owner the ability to manage all aspects of booking rooms and maintaining hotel assets (the rooms are actually cabins in the woods) plus app settings. The dashboard provides the user an overview of reservations using charts including sales, occupancy rate, duration summary, and booking activities for the current day. The new booking feature was not part of the course's code-along. I developed that feature. The user navigates to the booking page, then hits the Add booking button and enters a guest's full name. If the guest's full name is found in the database, then the app directs the user to enter booking details; otherwise, when it's not found, the user enters the guest's information to create a new guest record, then proceeds to enter the booking details. To give the app a test drive, contact me for credentials!",
  },
  {
    id: 2,
    url: '/SRDdemo202312.mp4',
    title: 'Sarasota Remodeling Web App',
    tech: 'React, React Router, Tailwind CSS, AWS (CloudFormation, S3, CloudFront, API Gateway, ACM, Lambda, SES, Route53, DynamoDB), Google ReCaptcha, Google Analytics',
    problem:
      "Transform the client's website to enhance user interaction, boost customer engagement, improve SEO performance, and drive higher conversion rates for greater business impact.",
    solution:
      "Modern, responsive web app showcasing Client's work, blog posts, and reviews.",
    site: 'https://sarasotaremodeling.com',
    github: 'https://github.com/MrJonnyOrtiz/srd-React',
    description:
      "This client needed to migrate from a very basic and limited Go Daddy website with no features other than a few images of their work to a modern, responsive and robust web app that featured their remodeling images in elegant galleries, provided a contact form for visitors, and listed their clients' reviews. This client also wanted to post blog articles on remodeling topics on a regular basis to help inform visitors on all aspects of home remodeling. I created a custom modern, responsive, and feature-rich website for the client that met all their needs. I also write and publish the blog posts on a regular basis. I created a CI/CD pipeline using Github Actions to continuously deploy new content as I add it. This client averages a message a month submitted via the contact form on the website in 2023. According to Google analytics, visitors frequent the galleries especially the kitchen and bath galleries as well as the blog posts.",
  },
  {
    id: 3,
    url: '/ginaZphotoVideo202312.mp4',
    title: 'Gina Z Photography Website',
    tech: 'React, Tailwind CSS, AWS (CloudFormation, S3, CloudFront, API Gateway, ACM, Lambda, SES, Route53), Google ReCaptcha',
    problem:
      "An interactive website to showcase the client's photography, enhancing the user experience, attracting new customers, and expanding their reach.",
    solution:
      "Modern, responsive web app showcasing Client's work with contact functionality.",
    site: 'https://ginazphoto.com',
    github: 'https://github.com/MrJonnyOrtiz/ginaZphoto-React',
    description:
      'This client needed to showcase their photography work. I created a modern, responsive web app that featured their photography in an elegant carousel as well as a contact form for visitors. I created a CI/CD pipeline using Github Actions to continuously deploy new photography content as I add it.',
  },
  {
    id: 4,
    url: '/foodieTrekker20240712.mp4',
    title: 'Foodie Trekker Web App',
    tech: 'React, React Hot Toast, Headless UI, Tailwind CSS, Google Maps, AWS (CloudFormation, S3, CloudFront, Cognito, API Gateway, ACM, Lambda, DynamoDB, SES, Route53)',
    problem:
      'Centralized web-based app for users to log their dining experiences, and plan future visits seamlessly.',
    solution:
      'Modern, responsive web app to track dining experiences (places, visits, and meals) and future plans, record details about visits (date, time, meal type), meals (entrees, sides, drinks, etc.), add personal notes on both places and meals, and discover new spots.',
    site: 'https://foodietrekker.com',
    github: 'https://github.com/MrJonnyOrtiz/foodie/tree/master',
    description:
      'Foodie Trekker is an intuitive and minimalist web application. Upon logging in, users can add new places to their list, record visit and meals details, and search for new restaurants and bars. The app also includes features like filtering by preferences (liked, disliked, favorite, wishlist), sorting places, and a Google Maps integration to visualize places.',
  },
  {
    id: 5,
    url: '', // Placeholder for sazonmnmDemo.mp4
    title: 'Sazón M&M Marketing Website',
    tech: 'HTML5, CSS3, Javascript, AWS (CloudFormation, S3, CloudFront, Route53, Security Headers Policy, ACM, OAI)',
    problem:
      'The client needed a professional online presence to showcase their food truck menu, build brand recognition, and attract new customers through an engaging digital platform.',
    solution:
      'A modern, responsive marketing website featuring product showcases, engaging content, and clear calls-to-action to drive customer interest and inquiries.',
    site: 'https://sazonmnm.com',
    github: '', // Placeholder: Create a new repo for this
    description:
      "This project involved developing a dynamic and visually appealing marketing website for Sazón M&M. The primary goal was to create a strong online brand identity and provide an engaging platform for potential customers. I implemented a responsive design ensuring optimal viewing across all devices and deployed the site on AWS for high performance and scalability. The website features sections for menu items, location, and 'about us' story. I also established a streamlined CI/CD pipeline using GitHub Actions to ensure rapid and consistent updates for new content and marketing campaigns. In the first week of the website launch, there were 160 views.",
  },
];

export const menu = ['Projects', 'About', 'Contact', 'Blogs'];

export const skills = [
  {
    technologies:
      'HTML5, CSS3, Javascript (ES6+), React.js, Rails (exploring), AWS',
  },
  { tools: 'Git, Docker, Kanban, Business Process Modeling and Notation' },
  { practices: 'Responsive design, RESTful API design, CI/CD pipeline' },
];

export const education = [
  'B.S. Computer Science, State University of New York, New Paltz',
  'Software Engineering, State College of Florida powered by Flatiron School',
];

export const blogs = [
  {
    id: 1,
    title: 'React & Rails Project Planning Process',
    description:
      'Ready to show off your React & Rails skills on a new project and wondering (while trying not to hyperventilate) where to begin? You’ve come to the right place...',
    published: 'Aug 2 2022',
    length: '4 min read',
    url: 'https://medium.com/@imj0nny0rt1z/react-rails-project-planning-process-711839a94b20',
  },
  {
    id: 2,
    title: 'React-ed',
    description:
      'Or the wordier title I didn’t use: A Condensed Education on React. In this article, I’ll explain what React is and isn’t...',
    published: 'May 28, 2022',
    length: '3 min read',
    url: 'https://medium.com/@imj0nny0rt1z/react-ed-8b2248c8b807',
  },

  {
    id: 3,
    title: 'General Javascript Coding Best Practices',
    description:
      '“Luke, trust me” — the final words from Obi Wan before Luke Skywalker successfully destroys the Death Star in Star Wars, A New Hope. Why am I reciting these words...',
    published: 'Apr 26, 2022',
    length: '5 min read',
    url: 'https://medium.com/@imj0nny0rt1z/general-javascript-coding-best-practices-800391d91c18',
  },
];

export const funFacts = [
  'Sure, loving superhero movies might make me a nerd, but who wouldn’t want to save the world... one movie marathon at a time?',
  'Chocolate is proof that happiness can be eaten... one delicious bite at a time!',
  'Chocolate chip cookies are like hugs for your taste buds – warm, sweet, and impossible to resist!',
  'I’m not a fan of cold weather—if it’s below room temperature, count me out!',
  'I love sports – whether I’m cheering from the couch or pretending I’m a pro on the field!',
];
