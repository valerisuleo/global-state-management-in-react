import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCounter } from '../../views/lessons/part_2-working_with_context/context/counter/context';
import { useTheme } from '../../views/lessons/part_2-working_with_context/context/theme/context';
import Button from '../../library/components/button/button';
import { IBtn } from '../../library/components/button/interfaces';

const NavbarComponent = () => {
    // USING DATA CONTEXT INSTEAD OF useCounter()
    // const { event } = useDataContext();
    const { count } = useCounter();
    const { handleDarkMode, isDarkMode } = useTheme();
    const [isOpen, setOpen] = useState(false);
    const [btnProps, setProps] = useState<IBtn>({
        label: 'Dark Mode',
        type: 'button',
        isDarkMode,
        onEmitEvent: handleDarkMode,
        classes: {
            contextual: 'dark',
            size: 'md',
        },
    });

    useEffect(() => {
        setProps((prevState) => ({
            ...prevState,
            label: isDarkMode ? 'Light Mode' : 'Dark Mode',
            classes: {
                ...prevState.classes,
                contextual: isDarkMode ? 'light' : 'dark',
            },
        }));
    }, [isDarkMode]);



    const toggleBurgerMenu = () => {
        setOpen((prevState) => {
            const newState = !prevState;
            return newState;
        });
    };

    return (
        <nav
            className={`navbar navbar-expand-lg bg-${
                isDarkMode ? 'dark' : 'light'
            }`}
            style={{ borderBottom: '1px solid white' }}
        >
            <div className={`container-fluid`}>
                <Link
                    className={`navbar-brand ${isDarkMode && 'text-white'}`}
                    to="/"
                >
                    State Management
                </Link>
                <button
                    onClick={toggleBurgerMenu}
                    className="navbar-toggler"
                    type="button"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse d-flex justify-content-between ${
                        isOpen ? 'show' : ''
                    }`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    isDarkMode && 'text-white'
                                }`}
                                to="exercises/context-counter"
                            >
                                Context Counter {count}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    isDarkMode && 'text-white'
                                }`}
                                to="exercises/reducer-todos"
                            >
                                Reducer Todos
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <Button {...btnProps} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
