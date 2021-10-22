import * as React from 'react';
import { ReactElement } from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '_/view/app';
import './renderer.sass';
import { ipcRenderer } from "electron";

const MainView = (): ReactElement => {
    ipcRenderer
        .invoke("custom_action")
        .then(console.log)
        .catch(console.error);

    return (
        <div className="app">
            <p>Hello</p>
            some random text
            <App/>
        </div>
    );
}

ReactDOM.render(<MainView/>, document.getElementById('app'));

export default MainView;
