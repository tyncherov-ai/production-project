import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Footer } from 'widgets/Footer';
import { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'dark' ? 'dark' : 'light',
    );
  }, [theme]);

  return (
    <div className="app">
      <Suspense fallback="">
        <Sidebar />
        <div className="wrapper">
          <Navbar />
          <main className="page">
            <AppRouter />
          </main>
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
