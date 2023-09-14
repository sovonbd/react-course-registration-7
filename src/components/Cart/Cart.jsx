import PropTypes from "prop-types";

const Cart = (props) => {
  return (
    <div className="bg-white rounded-lg p-4 space-y-4">
      <h3 className="text-lg font-bold text-[#2F80ED]">Credit Hour Remaining 7 hr</h3>
      <hr />
      <h3 className="text-xl font-bold">Course Name</h3>
      <hr />
      <p className="font-medium text-[#1C1B1B80]">Total Credit Hour : 13</p>
      <hr />
      <p className="font-semibold text-[#1C1B1B80]">Total Price : 48000 USD</p>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
