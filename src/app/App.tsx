import './styles/index.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Footer } from 'widgets/Footer';
import { useEffect } from 'react';


const App = () => {
    const { theme } = useTheme();

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            theme === "dark" ? "dark" : "light"
        );
    }, [theme]);

    return (
        <div className='app'>
            <div className='wrapper'>
                <Navbar />
                <main className="page">
                    <AppRouter />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;
