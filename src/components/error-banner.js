import React from 'react'


const ErrorBanner = ({Title, Subtitle}) => {
    return <div className="banner">

        <h1>{Title}</h1>
        <p>{Subtitle}</p>
    </div>

};

export default ErrorBanner;
