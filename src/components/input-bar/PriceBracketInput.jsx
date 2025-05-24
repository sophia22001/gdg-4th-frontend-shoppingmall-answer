// 가격 범위 필터링 페이지에서 쓰일 입력 창

import BlueButton from "../BlueButton";

const PriceBracketInput = () => {
  return (
    <>
      <div className="mt-[72px] flex w-full items-center gap-[19px]">
        <input
          placeholder="가격 하한선 입력..."
          className="h-[43px] w-[232px] rounded-[8px] border border-[#8F8F8F] px-[16px] py-[12px]"
        />
        <input
          placeholder="가격 상한선 입력..."
          className="h-[43px] w-[232px] rounded-[8px] border border-[#8F8F8F] px-[16px] py-[12px]"
        />
        <BlueButton text={"검색"} />
      </div>
    </>
  );
};
export default PriceBracketInput;
