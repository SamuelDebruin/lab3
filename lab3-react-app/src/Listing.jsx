
export default function Listing({pic, country, location, rating, price}){
    
    return(
        <div className="listings">
            <img className="picture" src={pic} alt=""/>
            <h2>{country}</h2>
            <p className="pp">{location}</p>
            <p className="rating">{rating}&#9733;</p>
            
            <p className="pp">${price}/night</p>
        </div>
        
    );
    // if (rating < 4) {
    //     <p style={color:red;}>{rating} &#9733;</p>
    // } else {
    //     <p style={color:red;}>{rating} &#9733;</p>
    // }
}