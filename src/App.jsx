import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';
import styles from './App.module.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className={styles.appShell}>
          <Navbar />
          <main className={styles.main}>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
