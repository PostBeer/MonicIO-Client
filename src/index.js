import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './mobx/userStore';
import ProjectsStore from "./mobx/projectsStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            projects: new ProjectsStore()
        }}>
            <App/>
        </Context.Provider>
    </React.StrictMode>
);

export default root;

