import React from 'react';
import PropTypes from 'prop-types';

import RouterHandler from './state/router/RouterHandler';
import GlobalStyle from './shared/ui/GlobalStyle';

const Providers = ({ children }) => (
    <>
        <GlobalStyle />
        {children}
    </>
);
Providers.propTypes = {
    children: PropTypes.node.isRequired,
};

const App = () => {
    return (
        <Providers>
            <RouterHandler />
        </Providers>
    );
};
export default App;
