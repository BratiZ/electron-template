import * as React from 'react';
import { ReactElement } from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '_/view/app';
import './renderer.sass';
import { ipcRenderer } from "electron";
import { Provider } from 'react-redux';
import store from '_/view/store';
import Counter from '_/view/counter/counter';

const MainView = (): ReactElement => {
    ipcRenderer
        .invoke("custom_action")
        .then(console.log)
        .catch(console.error);

    return (
        <Provider store={store}>
            <div className="app">
                <p>Hello</p>
                some random text
                <App/>
                <Counter/>
            </div>
        </Provider>
    );
}

ReactDOM.render(<MainView/>, document.getElementById('app'));

export default MainView;
