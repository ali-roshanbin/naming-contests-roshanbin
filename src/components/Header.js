import React from 'react';

const Header = ({ message }) => {
    return (
        <h4 className="Header text-center">
            {message}
        </h4>
    );
};

Header.propTypes = {
    message: React.PropTypes.string
};

export default Header;