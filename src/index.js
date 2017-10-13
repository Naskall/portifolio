import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {AppContainer} from 'react-hot-loader';

import 'theme/globalStyle';

ReactDOM.render(
    <AppContainer>
    {Routes}
    </AppContainer>,
    document.getElementById('root')
);

//Hot Module Replacemente API
if(module.hot){
    module.hot.accept('./routes',() =>{
        const Routes = require ('./routes').default;
        ReactDOM.render(
            <AppContainer>
            {Routes}
            </AppContainer>,
            document.getElementById('root')
        );
    });
}

