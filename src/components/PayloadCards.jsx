import React from "react";

const PayloadCards = ({ payload }) => {
  const {
    payload_id,
    payload_type,
    orbit,
    reference_system,
    customers,
    manufacturer,
    nationality,
  } = payload;

  return (
    <article className="bg-neutral-900 p-5 xl:min-w-[22rem] lg:min-w-[18rem] md:min-w-[20rem] sm:min-w-[29.5rem] min-w-[90vw]">
      <h2 className="text-white font-bold text-xl my-1">
        {payload_id}, <span className="opacity-75 text-lg">{payload_type}</span>
      </h2>

      <ul className="text-sm text-white opacity-75 mt-2">
        <li>Orbit: {orbit}</li>
        <li>Reference System: {reference_system}</li>
      </ul>

      <h3 className="text-white font-bold text-base mt-2">Customers:</h3>
      <ul className="text-sm text-white opacity-75">
        {customers.map((customer, index) => (
          <li key={index}>{customer}</li>
        ))}
      </ul>

      <h3 className="text-white font-bold text-base mt-2">Manufacturers:</h3>
      <ul className="text-sm text-white opacity-75">{manufacturer}</ul>

      <h3 className="text-white font-bold text-base mt-2">Countries:</h3>
      <ul className="text-sm text-white opacity-75">{nationality}</ul>
    </article>
  );
};

export default PayloadCards;
