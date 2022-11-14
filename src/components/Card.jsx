const Card = ({ children }) => {
  return (
    <div className="bg-white p-4 w-[85%] max-w-[350px] mx-auto rounded-2xl overflow-hidden shadow-xl">
      {children}
    </div>
  );
};
export default Card;
