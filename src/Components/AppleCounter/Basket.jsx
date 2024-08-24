const Basket = ({ title, count }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <p className="text-2xl font-bold">{count} Apples</p>
    </div>
  );
};

export default Basket;
