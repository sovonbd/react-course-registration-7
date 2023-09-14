import PropTypes from "prop-types";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoBook } from "react-icons/go";

const Card = () => {
  return (
    <div className="bg-white p-4 rounded-lg space-y-4">
      <img className="mx-auto" src="https://i.imgur.com/6WI4AvY.png" alt="" />
      <h3 className="text-lg text-[#1C1B1B] font-semibold">Introduction to C Programming</h3>
      <p className="text-[#1C1B1B99] text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div className="flex flex-row justify-between text-[#1C1B1B99] font-medium">
        <div className="flex items-center">
          <BsCurrencyDollar /> <span> Price : 15000</span>
        </div>
        <div className="flex items-center">
          <GoBook /> <span className="pl-2">Credit : 1hr</span>
        </div>
      </div>
      <button className="bg-[#2F80ED] text-white text-lg font-semibold w-full rounded-lg">Select</button>
    </div>
  );
};

Card.propTypes = {};

export default Card;
