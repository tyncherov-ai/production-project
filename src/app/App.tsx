import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Footer } from 'widgets/Footer';
import { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

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
          <main className="page">{inited && <AppRouter />}</main>
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
