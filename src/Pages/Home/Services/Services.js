import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const [search, setSearch] = useState("");
  const searchRef = useRef();

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?serch=${search}&order=${
        isAsc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isAsc]);
  console.log(services);
  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold my-5">Our Service Area</h2>
        <p className="text-gray-600">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
        <input
          type="text"
          ref={searchRef}
          className="input input-bordered w-full max-w-xs"
          placeholder="Search"
        />{" "}
        <button onClick={handleSearch} className="btn mr-5 border">
          Search
        </button>
        <button className="btn" onClick={() => setIsAsc(!isAsc)}>
          {isAsc ? "asc" : "desc"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
