const ArrowButton = ({ direction, onClick }) => {
  const arrow = direction === "left" ? "←" : "→";
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
    >
      {arrow}
    </button>
  );
};

export default ArrowButton;
