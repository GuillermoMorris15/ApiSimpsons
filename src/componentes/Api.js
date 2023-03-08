import React, { useEffect, useState } from "react";
import axios from "axios";
import './Api.css';

export const Api = () => {
  const [personajes, setPersonajes] = useState([]);
  

  const ApiSimpsons = "https://thesimpsonsquoteapi.glitch.me/quotes?count=num";

  const obtenerPersonajes = async () => {
    const data = await axios.get(ApiSimpsons);
    setPersonajes(data.data);
  };

  useEffect(() => {
    obtenerPersonajes();
  }, []);

  const recarga= async()=>{
   await obtenerPersonajes()
  }
  return (
    <div className="api">
      <h1>Api Simpsons</h1>
        
        <div>
            {personajes.map((personaje, index) => {
                console.log(personaje);
                return(
                    <div key={index} >
                        <h2>{personaje.character}</h2>
                        <img src={personaje.image}/>
                        <h2>{personaje.quote}</h2>

                    </div>
                )
            })}
            <button className="boton" onClick={recarga}>Recarga</button>
        </div>
     
    </div>
  );
};
