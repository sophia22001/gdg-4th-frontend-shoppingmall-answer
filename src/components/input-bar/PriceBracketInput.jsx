// 가격 범위 필터링 페이지에서 쓰일 입력 창

import { useEffect } from "react";
import BlueButton from "../BlueButton";

const PriceBracketInput = ({
  setLowPrice,
  setHighPrice,
  lowPrice,
  highPrice,
  handleSearch,
}) => {
  useEffect(() => {
    console.log("변경된 low: ", lowPrice);
    console.log("변경된 high: ", highPrice);
  }, [lowPrice, highPrice]);

  return (
    <>
      <div className="mt-[72px] flex w-full items-center gap-[19px]">
        <input
          value={lowPrice}
          onChange={e => setLowPrice(e.target.value)}
          placeholder="가격 하한선 입력..."
          className="h-[43px] w-[232px] rounded-[8px] border border-[#8F8F8F] px-[16px] py-[12px]"
        />
        <input
          value={highPrice}
          onChange={e => setHighPrice(e.target.value)}
          placeholder="가격 상한선 입력..."
          className="h-[43px] w-[232px] rounded-[8px] border border-[#8F8F8F] px-[16px] py-[12px]"
        />
        <BlueButton text={"검색"} onClick={() => handleSearch()} />
      </div>
    </>
  );
};
export default PriceBracketInput;
