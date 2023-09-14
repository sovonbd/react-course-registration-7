import PropTypes from "prop-types";

const Cart = ({ cartItem, cartPrice, remCredit, totalCredit }) => {
  return (
    <div className="bg-white rounded-lg p-4 space-y-4 text-[#1C1B1B80]">
      <h3 className="text-lg font-bold text-[#2F80ED]">Credit Hour Remaining {remCredit} hr</h3>
      <hr />
      <h3 className="text-xl font-bold text-[#1C1B1B]">Course Name</h3>
      {cartItem.map((item, idx) => (
        <li className="list-decimal " key={idx}>
          {item.title}
        </li>
      ))}
      <hr />
      <p className="font-medium ">Total Credit Hour : {totalCredit}</p>
      <hr />
      <p className="font-semibold">Total Price : {cartPrice.toFixed(2)} USD</p>
    </div>
  );
};

Cart.propTypes = {
  cartItem: PropTypes.array.isRequired,
  cartPrice: PropTypes.number.isRequired,
  remCredit: PropTypes.number.isRequired,
  totalCredit: PropTypes.number.isRequired,
};

export default Cart;
