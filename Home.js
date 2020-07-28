import React, {useState, useEffect } from 'react'
import axios from 'axios';
import '../App.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const[user, setUser] = useState([]);
    useEffect(() => {
     loadUser();
    },[]);
    const loadUser = async () => {
        const result = await axios.get('http://localhost:3000/contact');
        setUser(result.data.reverse());
      }
      const dltUser = async id => {
         await axios.delete(`http://localhost:3000/contact/${id}`);
         loadUser();
      }
    return(
        <div className="container text-danger">
           <table className="table table-striped">
               <thead className="thead-dark">
                   <tr>
                   <th scope="col">Serial Number</th>
                       <th scope="col">Name</th>
                       <th scope="col">Email</th>
                       <th scope="col">Contact Number</th>
                       <th scope="col">Action</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       user.map((data, index) => (
                        <tr>
                        <td scope="row">{index+1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.contact}</td>
                        <td>
                            <Link className="btn btn-warning btn-sm mr-2" to={`/view/${data.id}`}>View</Link>
                            <Link className="btn btn-outline-primary btn-sm mr-2" to={`/edit/${data.id}`}>Edit</Link>
                            <Link className="btn btn-danger btn-sm" onClick={() => dltUser(data.id)}>Delete</Link></td>

                        </tr>
                       ))
                   }
               </tbody>
           </table>
        </div>
    );
}

export default Home;