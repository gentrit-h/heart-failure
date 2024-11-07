import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Header from '../Header/Header';
import Sidebar from '../Dashboard/Sidebar';

const MainLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
<div className="min-h-screen flex">
  <div>
    <Sidebar />
  </div>

  <div
  data-layername="dashboard"
  className="flex overflow-hidden flex-wrap bg-blue-700 w-full h-full"
>
  <main
    data-layername="mainWrap"
    className="flex flex-col flex-1 shrink self-start pt-3 basis-0 min-w-[240px] max-md:max-w-full"
  >
    <div
      data-layername="main"
      className="flex flex-col pt-2.5 pb-12 w-full bg-white rounded-tl-3xl max-md:max-w-full"
      style={{ maxHeight: 'calc(100vh - 12px)' }}
    >
      <Header />
      <div className="flex-1 overflow-y-auto px-[35px]">
        <Outlet />
      </div>
    </div>
  </main>
</div>


</div>
  );
};

export default MainLayout;