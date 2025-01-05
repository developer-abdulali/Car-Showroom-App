const ButtonTertiary = ({ btnText }) => {
  return (
    <button className="relative min-w-[184px] inline-flex items-center justify-center px-6 py-[18px] overflow-hidden font-medium transition duration-300 rounded-full ease-out shadow-xl group bg-[#0e1135] hover:bg-[#151a41] text-white uppercase tracking-[1px] text-sm">
      <span className="relative text-white text-sm tracking-[1px]">
        {btnText}
      </span>
    </button>
  );
};
export default ButtonTertiary;
