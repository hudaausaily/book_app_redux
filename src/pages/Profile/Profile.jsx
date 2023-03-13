import React, { useEffect, useState } from 'react';
import './profile.css';
import Navbar from "../../components/Navbar/Navbar";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Profile() {

  const navigate = useNavigate();

    // const current_ID = JSON.parse(localStorage.getItem('id'));
    
    // const user_email = localStorage.getItem('email');

    const [dataUsers,setDataUsers] = useState([]);
    const [books, setBooks] = useState([]);

    const admin=useSelector(state=>state.login.admin);
    const current_ID = admin;


  

    useEffect(()=>{
      getDataUsers();
      checkLogin();
      getDataBook();

      
    },[]);
    
    const checkLogin = () =>{
      if (admin === ''){
  
        navigate('/login')
  
      }
    }
      // لعرض  بيانات المستخدم في الموقع
  const getDataUsers = () => {

    axios.get(`http://localhost:80/REACT_REDUX/book_app_redux/back_end/user.php/users/${current_ID}`)
    .then((respone)=>{
      setDataUsers(respone.data)
        console.log(respone.data);
    })
}

const getDataBook = () => {

  axios.get(`http://localhost:80/REACT_REDUX/book_app_redux/back_end/getBooksByUserId.php/${current_ID}`)
  .then(response => {
      console.log(response.data)
      setBooks(response.data);
  })
}

  return (
    <>
    {dataUsers.map((users,index)=>{

return <div key={index}>
<Navbar />

<div className='parent'>
<div className="wrapper">
        <div className="left">
          <img src={require(`../../images/${users.image}`)} alt="user" width={100} />
          <h4>{users.name}</h4>
          <p>FULL STACK DEVELOPER</p>
        </div>
        <div className="right">
          <div className="info">
            <h3>Information</h3>
            <div className="info_data">
              <div className="data">
                <h4>Email</h4>
                <p>{users.email}</p>
              </div>
              <div className="data">
                <h4>Phone</h4>
                <p>{users.phone}</p>
              </div>
            </div>
          </div>
          <div className="projects">
            <h3>Books</h3>
            <div className="projects_data">
              <div className="data">
                <h4>Name</h4>
{books.map((ele)=>{
  return <>
      <p>{ele.title}</p>
  </>
})}
              </div>
              <div className="data">
                <h4>Created at</h4>
                {books.map((ele)=>{
  return <>
      <p>{ele.created_at}</p>
  </>
})}
                {/* <p>dolor sit amet.</p> */}
              </div>
            </div>
          </div>
          <div className="social_media">
            <ul>
              <li><Link to={`/profile/${users.id}/edit`}><i className="fab fa-facebook-f" />edit</Link></li>
              {/* <li><a href="#f"><i className="fab fa-twitter" /></a></li>
              <li><a href="#f"><i className="fab fa-instagram" /></a></li> */}
            </ul>
          </div>
        </div>
      </div>
      </div>
      </div>
        })}
    </>
  )
}
