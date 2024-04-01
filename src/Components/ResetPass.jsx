import React, { useState }  from "react";

const ResetPass = ()=>{
    return (
        <>
        <form>
            <input type="password" placeholder="NuevaContraseña"/>
            <input type="password" placeholder="Confirmar contraseña" />
        </form>
        </>
    )
}