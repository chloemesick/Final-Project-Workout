import React from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import Workout from "./workout";
import useAllWorkouts from "../hooks/use-all-workouts";
import "./workout-listing.css";

// useEffect Hook:
// > Guide, https://reactjs.org/docs/hooks-effect.html
// > API Docs, https://reactjs.org/docs/hooks-reference.html#useeffect

function WorkoutListing(props) {
  const userId = props.user.uid;
  const [filterDayOfWeek, setFilterDayOfWeek] = useState("All");
  const [workouts, isLoading, errorMessage] = useAllWorkouts(userId);

const onFilterSubmit = (event) => {
  setFilterDayOfWeek(event.target.value);
}

  return (
    <div className="workout-container">
      <h1>Workouts</h1>
      <select className="dayOfWeek-button" value={filterDayOfWeek} onChange={onFilterSubmit}>
      <option value="All">Show all Days of the Week</option>
      <option value="S">Show only Sunday</option>
      <option value="M">Show only Medium Dogs</option>
      <option value="L">Show only Large Dogs</option>
    </select>
      </select>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      <ul className="workout-list">
        {workouts.map((workoutDoc) => {
          const workoutId = workoutDoc.id;
          const workoutData = workoutDoc.data();
          return (
            <li key={workoutId}>
              <Workout id={workoutId} data={workoutData} userId={userId} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WorkoutListing;
