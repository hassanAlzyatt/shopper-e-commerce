import "./Offer.css"
export default function Offer(props){

    return(
        
        <div className="offer-img">
            <img src={props.image} alt ="offer"/>
        </div>
    

    );
}