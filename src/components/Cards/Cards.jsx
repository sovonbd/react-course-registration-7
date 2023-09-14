import PropTypes from "prop-types";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Card from "../Card/Card";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);
  const [remCredit, setRemCredit] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleSelect = (card) => {
    const findCard = cartItem.find((item) => item.id === card.id);
    if (findCard) {
      toast.error(<p className="text-black font-bold text-center">{card.title} is already added to the cart</p>);
      return;
    }
    // console.log(card.price);
    const remainingCredit = remCredit - card.credit_hours;
    if (remainingCredit < 0) {
      toast.error(<p className="text-black font-bold text-center">You have only {remCredit} credit hour remaining</p>);
      return;
    }
    setCartItem([...cartItem, card]);
    setCartPrice(cartPrice + card.price);
    setRemCredit(remainingCredit);
    setTotalCredit(totalCredit + card.credit_hours);
  };

  const notify = () => {
    toast("");
  };

  return (
    <div className="container px-4 py-14 lg:p-14 bg-[#F3F3F3]">
      <h3 className="pb-12 text-3xl font-bold text-center text-[#1C1B1B]">Course Registration</h3>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, idx) => (
            <Card card={card} handleSelect={handleSelect} key={idx}></Card>
          ))}
        </div>
        <div className="w-full md:w-1/2 md:mx-auto lg:w-3/5">
          <Cart cartItem={cartItem} cartPrice={cartPrice} remCredit={remCredit} totalCredit={totalCredit}></Cart>
        </div>
      </div>
      <button onClick={notify}></button>
      <ToastContainer
        className="py-4 px-4 md:py-0 md:w-max"
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

Cards.propTypes = {};

export default Cards;
