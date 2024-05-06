import React from "react";
import "../styles/Texts.css"; 
import Navbar from "../components/Navbar";
import {useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { GetAllUsersFromAdmin } from "../hooks/UserHook";

const AllUserAdmin= () =>{
    const navigate = new useNavigate()
    const cook = new Cookies()
    const IdUser = cook.get(`id`)
    const {data:result , isSuccess} = GetAllUsersFromAdmin(IdUser)
    const UsersComplete = isSuccess && result.data // obtener todos los usarios
    console.log(UsersComplete)
    const handleNavigateUsers = (index) => { // Pasa el índice del artículo como argumento
        navigate(`/OneUser/${index + 1}`); // Añade el índice al URL
    };
    return(
        <div className="rp-cont">
      <Navbar />
      <h1>Listado de usuarios</h1>
      <div id="article-m" className="scrollable">
        <div id="aricle-mar">
          {isSuccess && UsersComplete.map((User, index) => (
            <div key={index} className="cat-article">
              <div id="texts-uno">
                <button
                  id="btn-texts-uno"
                  onClick={() => handleNavigateUsers(index)}
                >
                  <h2 id="titulo-variosm">{User.userName}</h2>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}
export default AllUserAdmin;