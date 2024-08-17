
import Header from "./Components/Header/Header";
import new_collections from "./Assets/new_collections";
import { Form, Route,Routes } from "react-router-dom";
import all_product from "./Assets/all_product";
import ItemCollection from "./Components/ItemCollection/ItemCollection.jsx";
import { useState } from "react";
import Hero from "./Components/Hero/Hero";
import men_offer from "./Assets/banner_mens.png"
import kid_offer from "./Assets/banner_kids.png"
import women_offer from "./Assets/banner_women.png"
import Offer from "./Components/Offer/Offer";
import Cart from "./Components/Cart/Cart";
import { store } from "./store";
import { Provider } from 'react-redux';


function App() {
  const [category,setCategory]=useState("shop")

  const filteredByCategoryItems=all_product.filter((item)=>{
    return item.category===category
  })
  return (
   <>
    <Provider store={store}>
    <Header category={category} setCategory={setCategory}/>
   
   <Routes>
     <Route path="/shopper-e-commerce" element={<> 
     <Hero/>
      <ItemCollection
       title ="New Collections" 
       arrayOfItems={new_collections}/> 
        </>}
      />
     <Route path='kids' element={<><Offer  image={kid_offer} /><ItemCollection  title ="Kids Collections" arrayOfItems={filteredByCategoryItems}/> </>} />
     <Route path='women'  element={<><Offer  image={women_offer} /><ItemCollection  title ="Women Collections" arrayOfItems={filteredByCategoryItems}/> </>} />
     <Route path='men' element={<><Offer  image={men_offer} /><ItemCollection  title ="Men Collections" arrayOfItems={filteredByCategoryItems}/> </>} />
     <Route path="cart" element={<Cart />} />

   </Routes>
    </Provider>
    </>
   
   
   
  );
}

export default App;
