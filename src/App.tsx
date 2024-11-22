import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './components/Layout/MainLayout';
import LoginPage from './pages/LoginPage';
import PatientsPage from './pages/PatientsPage';
import ConnectivityPage from './pages/connectivityPage';
import { useAuth } from './context/AuthContext';
import Dashboard from './components/Dashboard/Dashboard';
import Cmems from './components/Cmems/Cmems';
import Cieds from './components/CIEDS/Cieds';
import Patients from './components/Patient/Patients';
// import PatientSummary from './components/PatientSummary/PatientSummary';
import NewLoginPage from './pages/NewLoginPage';
import { RecoilRoot } from 'recoil';
import Connectivity from './components/Connectivity/Connectivity';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  if (!user?.isAuthenticated) {
      const storedUser = sessionStorage.getItem('user');
      if(JSON.parse(storedUser)?.isAuthenticated){
        return <>{children}</>;
    }
    console.log("user",user)
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<NewLoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
                    <RecoilRoot>

              <MainLayout />
              </RecoilRoot>

            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="connectivity" element={<Connectivity />} />
          <Route path="patients" element={<Patients />} />
          <Route path="cmems" element={<Cmems />} />
          <Route path="cieds" element={<Cieds />} />
          <Route path="settings" element={<ConnectivityPage />} />

        </Route>
      </Routes>
    </AuthProvider>

  );
}

export default App;
// 

// function App() {
//   return (
//     <div style={{width: '100vw', height: '100vh'}}>
//  <Dashboard /> 
//     </div>
//   );
// }

// export default App