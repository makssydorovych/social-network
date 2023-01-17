
import {combineReducers, legacy_createStore} from 'redux';

import {dialogsReducer} from "./DialogsReducer";
import {profileReducer} from "./ProfileReducer";
import {usersReducer} from "./UsersReducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,


})
// непосредственно создаём store
 const store = legacy_createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

export type ReduxStoreType = typeof store;

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
export default store;