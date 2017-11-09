import React from 'react';

const HeaderProjectName = ({ message }) => {
    return (
        <h2 className="HeaderProjectName text-center">
            {message}
        </h2>
    );
};

HeaderProjectName.propTypes = {
    message: React.PropTypes.string
};

export default HeaderProjectName;