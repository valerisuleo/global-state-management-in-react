import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import ThemeProvider from './app/views/lessons/part_2-working_with_context/context/theme/theme';
import { CounterProvider } from './app/views/lessons/part_2-working_with_context/context/counter/provider';
import { ContextProviderComposer } from './app/views/lessons/part_2-working_with_context/context/provider-composer/provider-composer';
import { DataProvider } from './app/views/lessons/part_2-working_with_context/context/data/provider';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <ContextProviderComposer
            contexts={[
                <CounterProvider children={undefined} />,
                <ThemeProvider children={undefined} />,
                <DataProvider children={undefined} />,
            ]}
        >
            <App />
        </ContextProviderComposer>
    </BrowserRouter>
);
