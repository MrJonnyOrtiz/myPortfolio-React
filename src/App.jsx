import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import CookieConsentBanner from './components/CookieConsentBanner';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import PageNotFound from './pages/PageNotFound';
import { projects } from '../data.js';

function App() {
  return (
    <BrowserRouter>
      <CookieConsentBanner />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route
            path="/projects/:projectId"
            element={<Project projects={projects} />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
        {/* Handle 404s */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
