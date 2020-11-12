//Will contain a CRUD operation
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";


function EditWorkoutLogPage() {
  const { id } = useParams();

  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditMovie id={id} />
     
    </main>
  );
}

export default EditWorkoutLogPage;
