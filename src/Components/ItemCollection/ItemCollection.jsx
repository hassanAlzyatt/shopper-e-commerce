import Item from "../Item/Item";
import "./ItemCollection.css"

export default function ItemCollection(props){

    return (

      <>
        <h1 id="collection-title">{props.title}</h1>
        <div className="Item-Collection-class">
            {props.arrayOfItems.map((item)=><Item {...item} />)}
        </div>
      </>
    );

}