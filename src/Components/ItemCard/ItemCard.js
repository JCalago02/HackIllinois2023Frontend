import "../../Components/ItemCard/ItemCard.css"
function ItemCard(props) {
    const string = props.itemURL
    return (
        <div className="item-card">
            <img className="item-image" src={props.item.imgURL}></img>
            
            <h1 className="item-name">{props.item.itemName}</h1>
            
            <p className="item-price">${props.item.price}</p>         
            <a className="item-vendor" href={props.item.itemURL}><p>Sold By:{props.item.vendor}</p></a>
            <a href={props.item.itemURL}>{string}</a>
        </div>
    )
}

export default ItemCard;