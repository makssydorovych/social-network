import React, {ReactChildren} from "react";
import {ReduxStoreType} from "./redux/redux-store";
import {StoreType} from "./redux/store";

const StoreContext = React.createContext({} as ReduxStoreType);

export type ProviderType = {
    store: ReduxStoreType,
    children: any
}
export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContext;