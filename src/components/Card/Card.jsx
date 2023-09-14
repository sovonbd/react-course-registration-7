import PropTypes from "prop-types";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoBook } from "react-icons/go";

const Card = ({ card }) => {
  const { image, title, description, price, credit_hours } = card;
  return (
    <div className="bg-white p-4 rounded-lg space-y-4">
      <img className="mx-auto w-full" src={image} alt="" />
      <h3 className="text-lg text-[#1C1B1B] font-semibold">{title}</h3>
      <p className="text-[#1C1B1B99] text-sm">{description}</p>
      <div className="flex flex-row justify-between text-[#1C1B1B99] font-medium">
        <div className="flex items-center">
          <BsCurrencyDollar /> <span> Price : {price}</span>
        </div>
        <div className="flex items-center">
          <GoBook /> <span className="pl-2">Credit : {credit_hours}</span>
        </div>
      </div>
      <button className="bg-[#2F80ED] text-white text-lg font-semibold w-full rounded-lg">Select</button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.array.isRequired,
};

export default Card;
