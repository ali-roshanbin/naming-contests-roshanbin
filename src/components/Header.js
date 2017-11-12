import React from 'react';

const Header = ({ message }) => {
    return (
        <h3 className="Header text-center">
            {message}
        </h3>
    );
};

Header.propTypes = {
    message: React.PropTypes.string
};

Header.defaultProps = {
    message: 'Hi, I am Ali Roshanbin and this application is my first application using Node, MongoDB and React'
};

export default Header;