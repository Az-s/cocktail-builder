import React from 'react';

const CocktailsLayout = ({ children }) => {

    return (
        <div  sx={{ display: 'flex' }}>
            <div  sx={{ flexGrow: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default CocktailsLayout;