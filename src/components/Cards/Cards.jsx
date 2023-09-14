import PropTypes from "prop-types";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="container p-14 bg-[#F3F3F3]">
      <h3 className="pb-12 text-3xl font-bold text-center text-[#1C1B1B]">Course Registration</h3>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, idx) => (
            <Card card={card} key={idx}></Card>
          ))}
        </div>
        <div className="w-3/5">
            <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {};

export default Cards;
