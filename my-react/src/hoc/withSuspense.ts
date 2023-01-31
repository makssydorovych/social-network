import React from 'react';

const WithSuspense = (Component: any) => {
    return (props: any) =>{
        return <React.SuspenseProps fallback={<div>...loading</div>}>
            <Component {...props}/>
                </React.SuspenceProps>


        }
};

export default WithSuspense;