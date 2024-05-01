import { useEffect } from "react";
import { GiToken } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "../styles/NotFound.css";

function LogOut() {

    const navigate = useNavigate()

    const cookie = new Cookies();

    const token = cookie.get('token')

    useEffect(() => {
        setTimeout(() => {
            if (token) {
                cookie.remove('id', { path: '/' });
                navigate('/')
            } else {
                navigate('/')
            }
        }, 1000)

        

    }, [token])


    return (
        <div id="logOut">
            <h1 id="logOut-h1" >Saliendo</h1>
            <img id="gif-logOut" src="https://i.gifer.com/XOsX.gif" alt="" />
            <h1 id="logOut-h1">Regrese pronto =D</h1>
        </div>
    )
}

export default LogOut
