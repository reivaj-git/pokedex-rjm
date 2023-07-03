import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameTrainer } from "../store/slices/nameTrainer.slice";
import FoterHome from "../components/home/FoterHome";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSummit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(setNameTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="grid grid-rows-[1fr_auto] min-h-screen bg-gray-100">
      <section className="flex flex-col items-center justify-center px-6">
        <div >
          <img src="/logoPokedex.png" alt="Logo pokedex" className="mx-auto" />
        </div>
        <h3 className="text-2xl font-bold mt-4">Hello trainer!</h3>
        <p className="text-lg">To start, give me your name</p>

        <form onSubmit={handleSummit} className="flex mt-4">
          <input
            required
            id="nameTrainer"
            type="text"
            className="py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your name"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-400">
            Start
          </button>
        </form>
      </section>

      <FoterHome />

      <section></section>
    </main>
  );
};

export default Home;