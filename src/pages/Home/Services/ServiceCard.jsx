


const ServiceCard = ({ service }) => {
    const { title, img, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price : ${price}</p>
            </div>
        </div>
    );
};

export default ServiceCard;