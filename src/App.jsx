// import logo from './assets/JOlogo.jpg';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';

const projects = [
  {
    id: 1,
    url: '/TheWildOasisBookingFeature.mp4',
    title: 'Self study Booking App',
    tech: 'React, Styled Components, React Router, React icons, React Query, React Hot Toast, React Hook Form, reCharts, React Error Boundary, AWS (Elastic Beanstalk)',
    problem: 'Manage hotel bookings',
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
    problem: "Modernize Client's website",
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
    problem: 'Create Client website',
    solution: "Modern, responsive website showcasing Client's work.",
    site: 'https://ginazphoto.com',
    github: 'https://github.com/MrJonnyOrtiz/ginaZphoto-React',
    description:
      'This client needed to showcase their photography work. I created a modern, responsive website that featured their photography in an elegant carousel as well as a contact form for visitors. I created a CI/CD pipeline using Github Actions to continuously deploy new photography content as I add it.',
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
    github: 'https://github.com/MrJonnyOrtiz/ginaZphoto-React',
    description:
      'Foodie Trekker is an intuitive and minimalist web application. Upon logging in, users can add new places to their list, record visit and meals details, and search for new restaurants and bars. The app also includes features like filtering by preferences (liked, disliked, favorite, wishlist), sorting places, and a Google Maps integration to visualize places.',
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects projects={projects} />} />
          <Route
            path="projects/:projectId"
            element={<Project projects={projects} />}
          />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
