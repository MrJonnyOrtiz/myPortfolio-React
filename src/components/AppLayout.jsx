import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const menu = ['Projects', 'About', 'Contact', 'Blogs'];

function AppLayout() {
  return (
    <div className="m-3 grid h-dvh max-w-full grid-rows-[100px_1fr_80px] gap-8 p-5 sm:grid-cols-[200px_1fr] sm:grid-rows-[1fr_80px]">
      <header className="">
        <Navbar menu={menu} />
        <Sidebar menu={menu} />
      </header>

      <main className="mx-auto max-w-[1200px]">
        <Outlet />
      </main>

      <footer className="flex flex-row-reverse sm:col-span-2">
        <div>
          <p className="text-center">
            &copy; {new Date().getFullYear()}&nbsp;Jonny Ortiz - All rights
            reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;
