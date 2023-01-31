import React from 'react';

export function WithSuspense <WCP> (WrappedComponent: React.ComponentType<WCP>)  {
    return (props: WCP) =>{
        let {...restProps} = props
        return <React.Suspense fallback={<div>...loading</div>}>
            <WrappedComponent {...restProps}/>
                </React.Suspence>


        }
}

