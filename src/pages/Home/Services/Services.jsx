import { useEffect, useState } from "react";
import Service from "../Service/Service";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const services = useServices();
  return (
    <div className="mb-4">
      <div>
        <p className="text-[#FF3811] font-bold text-center text-[20px]">
          Service
        </p>
        <h3 className="font-bold text-center text-[45px]">Our Service Area</h3>
        <p className="text-center w-[717px] mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
        <div className="my-4 grid grid-cols-3 gap-6">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
        <div className="my-10 flex justify-center items-center">
          <button className="btn btn-outline text-red-500">
            More Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
