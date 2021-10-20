import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import DisplayPoll from "./Components/DisplayPoll";
import NewPoll from "./Components/NewPoll";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/poll/:id" component={DisplayPoll}></Route>
          <Route path="/" component={NewPoll} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
