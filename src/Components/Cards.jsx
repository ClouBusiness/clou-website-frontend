const Cards = ({ title, text }) => {
  return (
    <>
      <div className="bg-white w-[300px] h-[325px] rounded-4xl text-center p-2 ">
        <h4 className="text-[#FF7700] text-[32px] font-bold py-5">{title}</h4>
        <div>
          <p className="text-black italic text-[19px]">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
