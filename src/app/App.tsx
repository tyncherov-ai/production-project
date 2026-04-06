import { Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { getUserInited, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from 'widgets/Footer';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

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
          <main className="app__content">{inited && <AppRouter />}</main>
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
