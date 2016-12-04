import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/app';

render(<AppContainer><App /></AppContainer>, document.querySelector("#app"));

var module: any = module

if (module && module['hot']) {
    module.hot.accept('./containers/app', () => {
        const App = require('./containers/app').default;
        render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.querySelector("#app")
        );
    });
}
