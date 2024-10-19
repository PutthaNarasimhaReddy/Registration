import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    date: "", // Add date to the initial state
  });

  const { id } = useParams();

 

  const loadUser =useCallback (async () => {
    const result = await axios.get(`http://localhost:8080/api/registrations/${id}`);
    setUser(result.data);
  },[id]);
  
  useEffect(() => {
    loadUser();
  }, [loadUser]);


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id: {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b> {user.name}
                </li>
                <li className="list-group-item">
                  <b>Email:</b> {user.email} {/* Change this to display email */}
                </li>
                <li className="list-group-item">
                  <b>Date:</b> {user.date} {/* Change this to display date */}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
