import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import index from "./views/main";

class App extends React.Component {
    render() {
        const { store } = this.props
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Switch>
                        <Route path="/" component={index} />
                    </Switch>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;