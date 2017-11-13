import React from 'react';

const Header = ({ message }) => {
    return (
        <div>
            <h3 className="Header text-center">
                {message}
            </h3>
            <br />
            <img src="/Ali.jpg" className="center-block img-rounded img-responsive" alt="Ali Roshanbin" height="200" width="200" />
        </div>
    );
};

Header.propTypes = {
    message: React.PropTypes.string
};

Header.defaultProps = {
    message: 'Hi, I am Ali Roshanbin and this application is my first application using Node, MongoDB and React'
};

export default Header;