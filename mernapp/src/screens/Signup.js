import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"", geolocation:""})
    const handleSubmit =async(e)=>{
e.preventDefault();   //synthetic event
const response = fetch("http://localhost:8000/api/creatuser", {
    method:'POST',
    header:{
        'Content-Type':'application/json'
    }
    body:JSON.stringyfy()
})
    }
  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="name" Name="form-label">
            Name
          </label>
          <input type="text" Name="form-control" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" Name="form-label">
            Email address
          </label>
          <input
            type="email"
            Name="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" Name="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div Name="mb-3">
          <label for="exampleInputPassword1" Name="form-label">
            Password
          </label>
          <input
            type="password"
            Name="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" Name="btn btn-success">
<Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
          Submit
        </button>
      </form>
      </div>
    </>
  );
}
