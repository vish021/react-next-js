import React from 'react';
import User from '../../component/User';

const authIndexPage = (props) => (
    <div>
        <h1> The Auth Main Page from { props.appName }</h1>
        <User name="Max" age="29"/>
    </div>
);

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: 'Super App (Auth)'});
        }, 1000);
    });

    return promise;
};

export default authIndexPage;