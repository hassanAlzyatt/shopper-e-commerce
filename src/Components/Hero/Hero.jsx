import "./Hero.css"
export default function Hero(){

    return(
        <div className="hero-class">
         <div className="hero-text">
            <h1>Exclusive<br/> <br/>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
         </div>
         <div className='hero-img'>
            <img src={require("../../Assets/exclusive_image.png")} alt="logo" />
         </div>
        </div>
    );
}