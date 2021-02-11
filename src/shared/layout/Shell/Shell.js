import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import {
    Page
} from './Shell.styled'

const Shell = ({ children }) => {
    return (
        <>
            <Header />
            <Page>
                {children}
            </Page>
        </>
    );
};

Shell.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Shell;