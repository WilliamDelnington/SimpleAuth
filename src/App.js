// import logo from './logo.svg';
import './App.css';
import AuthProvider from './context/AuthContext';
import { BrowserRouter } from 'react-router';
import AppRoutes from './routes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;