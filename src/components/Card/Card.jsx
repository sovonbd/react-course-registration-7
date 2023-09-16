import PropTypes from "prop-types";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoBook } from "react-icons/go";

const Card = ({ card, handleSelect }) => {
  const { image, title, description, price, credit_hours } = card;
  return (
    <div className="bg-white p-2 lg:p-4 rounded-lg space-y-4">
      <img className="mx-auto w-full" src={image} alt="" />
      <h3 className="text-lg text-[#1C1B1B] font-semibold md:h-14 lg:h-auto">{title}</h3>
      <p className="text-[#1C1B1B99] text-sm md:h-24 lg:h-auto">{description}</p>
      <div className="flex flex-row justify-between text-[#1C1B1B99] font-medium md:text-sm lg:text-base">
        <div className="flex items-center">
          <BsCurrencyDollar className="text-black" /> <span> Price : {price}</span>
        </div>
        <div className="flex items-center">
          <GoBook className="text-black" /> <span className="pl-2">Credit : {credit_hours}</span>
        </div>
      </div>
      <button onClick={() => handleSelect(card)} className="bg-[#2F80ED] text-white text-lg font-semibold w-full rounded-lg py-2">
        Select
      </button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default Card;
