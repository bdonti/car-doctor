import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={service.img} alt="Service" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>
        <p className="text-[#FF3811] font-semibold">Price: ${service.price}</p>
      </div>
      <div className="card-actions justify-center mb-5">
        <Link to={`/checkout/${service._id}`}>
          <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
