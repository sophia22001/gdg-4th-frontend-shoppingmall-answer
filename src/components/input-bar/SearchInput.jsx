// 기본 홈페이지와 카테고리 페이지에서 쓰일 입력 창

import BlueButton from "../BlueButton";

const SearchInput = () => {
  return (
    <>
      <div className="mt-[72px] flex w-full items-center gap-[20px]">
        <input
          className="h-[43px] w-[484px] rounded-[8px] border border-[#8F8F8F] px-[16px] py-[12px]"
          placeholder="상품 검색..."
        />
        <BlueButton text={"검색"} />
      </div>
    </>
  );
};
export default SearchInput;
