import { Link, useNavigate } from "react-router-dom";
import './Header.css'
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";

export default function Header(props){

    
    const{category,setCategory}=props
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
    
        window.addEventListener('resize', handleResize);
        
       
      
      }, []);
      console.log(width)
    

    const [showNavbar,setShowNavbar]=useState(null)

    function toggleShowNavbar(){
        setShowNavbar((prev)=>!prev)

    }

    useEffect(()=>{
        if(width>1200){
            setShowNavbar(false)

        }
        else{
            setShowNavbar(true)
           

        }
    },[width])
  
    const navigate=useNavigate();

    const numOfItems=useSelector(state=>state.totalNumOfItems)

    function updateCategory(category){
        setCategory(category)
        if(width<1195){
            toggleShowNavbar()

        }
       
    }
  

    return(
        <>
        <i id="list-icon"class="fa-solid fa-bars" onClick={()=>toggleShowNavbar()}></i>
        <div className="header-class" style={{display:showNavbar?"none":"flex"}}>
            <div className="logo-clas">
          
                <img src={require("../../Assets/logo.png")} alt="logo" />
                <h2>SHOPPER</h2>
            </div>
            <div className="navbar-class">
                <ul>
                    <li onClick={()=>updateCategory(null)}><Link to='/shopper-e-commerce' >shop</Link>  {category==null &&<hr className="hr"/>}</li>
                    <li onClick={()=>updateCategory("men")}><Link to='men' >Men</Link> {category==="men" &&<hr className="hr"/>}</li> 
                    <li onClick={()=>updateCategory("women")}><Link to='women' >Women</Link> {category==="women" &&<hr className="hr"/>}</li>
                    <li onClick={()=>updateCategory("kid")}><Link to='kids' >Kids</Link> {category==="kid" &&<hr className="hr"/>}</li> 
                </ul>
            </div>
            <div className="login-cart-class">
                <button>Login</button>
                <img onClick={()=>{navigate("cart")
                updateCategory(null)
            }} src={require("../../Assets/cart_icon.png")} alt="cart" />
                <p id="numOfItems-class">{numOfItems}</p>
            </div>
        </div>
        </>
    );
}