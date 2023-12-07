import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h2 className="text-5xl font-bold text-orange-500 my-3">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised
                    <br></br>
                    words which dont look even slightly believable. </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="text-center my-5">
                <button className="btn btn-outline">More Service</button>
            </div>
        </div>
    );
};

export default Services;