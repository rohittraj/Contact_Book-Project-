import React,{useState, useEffect} from 'react'
import '../App.css'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

const Edit = () => {
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name:"",
        email:"",
        contact:"",
        address:""
    })
    const {name, email, contact, address} = user;
    const clickChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
        console.log({[e.target.name]:e.target.value});
    }   
    const clickSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/contact/${id}`, user);   
        history.push("/");       
    }
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3000/contact/${id}`);
        setUser(result.data)
    }
    useEffect(() => {
      loadUser();
    },[]);

    return(
        <div className="container">
        <form onSubmit={e => clickSubmit(e)}>    
        <div className="form-group">
        <h3>Edit Contact</h3>
          <input onChange={e => clickChange(e)} type="text" className="form-control" name="name" value={name} id="name" aria-describedby="helpId" placeholder="Enter Your Name" required/>
          <input onChange={e => clickChange(e)} type="email" className="form-control" name="email" value={email} id="email" aria-describedby="emailHelpId" placeholder="Enter Your Email" required/>
          <input onChange={e => clickChange(e)} type="text" className="form-control" name="contact" value={contact} id="contact" placeholder="Enter Your Phone Number" required/>
          <input onChange={e => clickChange(e)} type="text" className="form-control" name="address" value={address} id="address" placeholder="Enter Your Address" required/>            
          <button className="btn btn-outline-dark addUserBtn">Edit</button> 
        </div>
        </form>
        </div>
    )
}

export default Edit;