const BlueButton = ({ text }) => {
  return (
    <>
      <button className="flex h-[43px] w-[148px] items-center justify-center rounded-[8px] bg-[#008CFF] px-[16px] py-[12px] text-white hover:cursor-pointer">
        {text}
      </button>
    </>
  );
};

export default BlueButton;
