import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
const View = () => {
    const [user, setUser] = useState({
        name:"",
        email:"",
        contact:"",
        address:""
    });
    const {id} = useParams();
    useEffect(() => {
        loadUser();
    });
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3000/contact/${id}`);
        setUser(result.data);
      }
    return (
       <div className="container text-left">
        <h3>User Id: {id}  <Link className="btn btn-outline-primary float-right" to="/">Back To Home</Link> </h3>
        <hr />
        <ul className="list-group w-70">
            <li className="list-group-item">Name : {user.name}</li>
            <li className="list-group-item">Email : {user.email}</li>
            <li className="list-group-item">Contact : {user.contact}</li>
            <li className="list-group-item">Address : {user.address}</li>
        </ul>       
       </div>
    );
}
export default View;