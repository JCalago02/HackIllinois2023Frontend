import "../ListViewSwitches/ListViewSwitches.css"
import ItemCard from "../ItemCard/ItemCard";
import { useCallback, useState } from "react";

function ListViewSwitches(props) {

    const [list, setList] = useState(props.list);
    const [textLimiter, setTextLimiter] = useState("");
    const [vendorLimiter, setVendorLimiter] = useState("");
    const [maxPrice, setMaxPrice] = useState(-1);
    const [minPrice, setMinPrice] = useState(-1);

    const searchInputHandler = useCallback((event) => {
        setTextLimiter(event.target.value)
    }, []);
    const selectInputHandler = useCallback((event) => {
        setVendorLimiter(event.target.value)
    }, []);
    const minPriceHandler = useCallback((event) => {
        if (event.target.value.length != 0) {
            setMinPrice(event.target.value)
        } else {
            
            setMinPrice(-1)
        }
    },[])
    const maxPriceHandler = useCallback((event) => {
        if (event.target.value != 0) {
            setMaxPrice(event.target.value)
        } else {
            setMaxPrice(-1)
        }
    },[])

    function handleClick() {
        setList(props.list.filter((item) => {
            return (item.vendor.includes(vendorLimiter) && 
            item.itemName.includes(textLimiter) &&
            (minPrice == -1 || item.price >= minPrice) &&
            (maxPrice == -1 || item.price <= maxPrice));
        }));
        console.log(list);
    }
    const vendorOptions =[
        {
            label: "None",
            value:""
        },
        {
            label: "Cannon Keys",
            value:"Cannon Keys"
        },
        {
            label: "Dangkeebs",
            value:"Dangkeebs"
        },
        {
            label: "KBDFans",
            value:"KBDFans"
        },
        {
            label: "Kono",
            value:"Kono"
        },

    ]
    return (
        <div className="list-view">
            <div className="list-header-title">{props.title}</div>
            <div className="searchbar-container">
                <label className="input"for={"search-select"}>Search:</label>
                <input className="input input-text " type={"text"} name={"Search"} onChange={searchInputHandler}></input>
                <label className="input text-small" for={"vendor-select"}>Vendor:</label>
                <select className="input" onChange={selectInputHandler}>
                    {vendorOptions.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <label className="input text-small" for={"input search-select"}>Min Price($):</label>
                <input className="input input-text text-small" type={"number"} name={"Search"} onChange={minPriceHandler}></input>
                <label className="input" for={"search-select"}>Max Price($):</label>
                <input className="input input-text text-small" type={"number"} name={"Search"} onChange={maxPriceHandler}></input>
                <button className="input button" onClick={handleClick}>Submit Changes</button>
            </div>
            <ul className="list-container">
                {list.map((item, index) => {
                    const className = `column-${index % 4}`
                    return (<div className={className} key={index}>
                        <ItemCard item={item} className={className}></ItemCard>
                        </div>);
                })}
            </ul>
        </div>
    )
    
}

export default ListViewSwitches;