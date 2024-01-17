import react from "react";
import"../styles/Eventos.css";
function EventoC({image,title,dateliteral,placeliteral, description}){
    return(
        <div className="card conteiner">
            <img className="card-image"
         src={require('../images/${image}.jpeg')}
         alt="foto del evento"/>
           <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">{props.dateLiteral}</p>
                <p className="card-place">{props.placeLiteral}</p>
                <p className="card-description">{props.description}</p>
                
            </div>
        </div>
    )
}
