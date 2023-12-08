import { Link } from "react-router-dom";



const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-600">Price : ${price}</p>
                <div>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Book Nw</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;