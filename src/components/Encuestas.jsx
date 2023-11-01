import React from "react";



function Encuestas ({ encuestas }) {
    return (
        <div>
            <h2>Encuestas Disponibles</h2>

            
                {encuestas.map(encuesta => (
                    <li > {encuesta.pregunta}
                    
            <ul>
                    <li>{encuesta.opciones } </li>
                
            </ul>
            
            
           {/*} <ul>
                {encuestas.map(encuesta => (
                    <li>{encuesta.opciones}</li>
                ))}
                </ul>*/}
                    
                    </li>
                ))}

                
            


        </div>

    );
} 

export default Encuestas;