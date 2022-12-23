import { useState, useEffect } from "react";
import { fakePayload as payload } from "../fakedata";
import PayloadCards from "../components/PayloadCards";

const Payloads = () => {
  const [payloads, setPayloads] = useState([...payload]);

  return (
    <>
      <section className="bg-gray-600  ">
        <div className="flex flex-col items-center justify-center bg-[rgba(0, 0, 0, 0.1)] py-20 lg:pt-32">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl capitalize text-center mb-5">
            Payloads
          </h1>

          <div className="px-5 lg:max-w-4xl lg:mx-auto xl:max-w-6xl 2xl:px-0 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 ">
            {payload.map((payload) => (
              <PayloadCards payload={payload} key={payload.payload_id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Payloads;
