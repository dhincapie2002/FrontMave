import { useEffect } from "react";
import { GiToken } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

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
        <div>
            saliendo ...
        </div>
    )
}

export default LogOut