import './App.css';
import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import {Navigation} from "./components/Navigation";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import Libraries from "./pages/Libraries";

class App extends React.Component {




    render() {
        return (
            <BrowserRouter>
                <Navigation/>
                <div className='container pt-4'>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/libraries' component={Libraries}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
