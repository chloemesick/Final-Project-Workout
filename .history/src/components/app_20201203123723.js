import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddWorkoutPage from "../pages/add-workout-page"
import EditWorkout from "./edit-workout"
import EditWorkoutLog from "./edit-workout";
import AccountPage from "../pages/account-page"
import WorkoutsPage from "../pages/workouts-page"
import NotFoundPage from "../components/not-found-page";
import { auth } from "../data/firebase";
import Nav from "./nav";

function AuthenticatedRoute(props) {
  const { isAuthenticated, children, ...routeProps } = props;
  return <Route {...routeProps}>{isAuthenticated ? children : <Redirect to="/account" />} </Route>;
}

function App() {
  const [user, setUser] = useState(null);
  const isAuthenticated = user !== null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <WorkoutsPage />
        </Route>

        <Route path="/add">
          <AddWorkoutPage />
        </Route>

        <Route path="/edit/:id">
          <EditWorkoutLog />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
