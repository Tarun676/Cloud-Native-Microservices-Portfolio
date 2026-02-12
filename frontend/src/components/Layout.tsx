import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
            <Navbar />
            <main className="pt-16">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
