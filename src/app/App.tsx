import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Footer } from 'widgets/Footer';
import { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'dark' ? 'dark' : 'light',
    );
  }, [theme]);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
