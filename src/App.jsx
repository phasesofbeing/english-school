import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ApplyPage from './pages/ApplyPage';
import StatusPage from './pages/StatusPage';
import TeachersPage from './pages/TeachersPage';
import SchedulePage from './pages/SchedulePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </Layout>
  );
}

export default App;