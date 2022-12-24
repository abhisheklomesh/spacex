import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex items-center justify-center gap-4 bg-home-image h-[calc(100vh-4.35rem)] bg-cover ">
      <Link
        to="/payloads"
        className="text-4xl text-white py-4 px-8 border-2 border-slate-100"
      >
        Payloads
      </Link>
      <Link
        to="/History"
        className="text-4xl text-white py-4 px-8 border-2 border-slate-100"
      >
        History
      </Link>
    </div>
  );
};

export default Home;
