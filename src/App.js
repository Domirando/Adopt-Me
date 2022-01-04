import ReactDOM from "react-dom";
import {StrictMode} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import SearchParams from "./SearchParams";
import Test from "./test";

import Details from "./Details";
const App = () => {
    return (
        <div>
                <Router>
                    <header>
                        <Link to="/">
                            <h1>Adopt Me</h1>
                        </Link>
                    </header>
                    <Switch>
                        <Route path="/test/:id">
                            <Test />
                        </Route>
                        <Route path="/">
                            <SearchParams />
                        </Route>
                    </Switch>
                </Router>
        </div>
    )
};

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>
, document.getElementById("root"));