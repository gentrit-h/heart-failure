import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './components/Layout/MainLayout';
import LoginPage from './pages/LoginPage';
import PatientsPage from './pages/PatientsPage';
import ConnectivityPage from './pages/connectivityPage';
import { useAuth } from './context/AuthContext';
import Dashboard from './components/Dashboard/Dashboard';
// import PatientSummary from './components/PatientSummary/PatientSummary';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  if (!user?.isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patients" element={<PatientsPage />} />
          <Route path="analytics" element={<ConnectivityPage />} />
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