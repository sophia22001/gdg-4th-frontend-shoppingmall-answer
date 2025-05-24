import BlueButton from "../BlueButton";

const ToggleInput = ({ togglePlaceholder }) => {
  return (
    <>
      <div className="mt-[72px] flex w-full items-center gap-[20px]">
        <input
          placeholder={togglePlaceholder}
          className="h-[43px] w-[484px] rounded-[8px] border border-[#8F8F8F] px-[16px] py-[12px]"
        />
        <BlueButton text={"검색"} />
      </div>
    </>
  );
};
export default ToggleInput;
