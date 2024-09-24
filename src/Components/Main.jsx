import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

import Vide from "../assets/cric.mp4";

export default function Main() {
  // This would typically come from an API or database
  const tournaments = [
    {
      id: 1,
      name: "Global T20 Showdown",
      date: "2023-07-15",
      location: "Virtual Stadium Alpha",
      format: "T20",
    },
    {
      id: 2,
      name: "Intergalactic ODI Cup",
      date: "2023-08-20",
      location: "Lunar Arena",
      format: "ODI",
    },
    {
      id: 3,
      name: "Quantum Test Series",
      date: "2023-12-10",
      location: "Holographic Pitch Beta",
      format: "Test",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <header className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Zap className="mr-2 text-yellow-400" /> FutureCricket
          </Link>
          <nav className="space-x-4">
            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/register"
              className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 h-24"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Upcoming Tournaments
        </motion.h1>

        <video autoPlay muted loop className="w-1/2 m-auto rounded-3xl">
          <source src={Vide} />
        </video>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                {tournament.name}
              </h2>
              <p className="flex items-center text-blue-200 mb-2">
                <Calendar className="mr-2 text-yellow-400" /> {tournament.date}
              </p>
              <p className="flex items-center text-blue-200 mb-2">
                <MapPin className="mr-2 text-yellow-400" />{" "}
                {tournament.location}
              </p>
              <p className="flex items-center text-blue-200 mb-4">
                <Users className="mr-2 text-yellow-400" /> {tournament.format}
              </p>
              <Link
                to="/register"
                className="block w-full text-center bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300"
              >
                Register Now
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 mt-52">
        <div className="container mx-auto px-4 text-center text-blue-200 ">
          &copy; 2023 FutureCricket. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
