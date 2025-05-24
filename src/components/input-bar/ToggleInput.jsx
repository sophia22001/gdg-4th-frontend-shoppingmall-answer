import { useState } from "react";
import BlueButton from "../BlueButton";
import { useLocation } from "react-router-dom";

// 고정 리스트
const categoryList = [
  { id: 1, name: "의류" },
  { id: 2, name: "전자기기" },
  { id: 3, name: "화장품" },
  { id: 4, name: "식품" },
];

const sortList = [
  { id: 1, name: "이름(가나다순)" },
  { id: 2, name: "가격" },
];

const ToggleInput = ({ togglePlaceholder }) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("");

  const location = useLocation();

  // 카테고리 선택
  const handleSelect = name => {
    setSelected(name);
    setActive(false);
  };

  // 토글 열고 닫기
  const onClickListing = () => {
    console.log("클릭함");
    setActive(!active); // 토글 상태 변경
  };

  return (
    <>
      <div className="relative mt-[72px] flex w-full items-center gap-[20px]">
        <input
          readOnly
          onClick={onClickListing}
          value={selected}
          placeholder={togglePlaceholder}
          className="h-[43px] w-[484px] cursor-pointer rounded-[8px] border border-[#8F8F8F] px-[16px] py-[12px]"
        />
        {active && location.pathname === "/sort" ? (
          <div className="absolute top-full left-0">
            {sortList.map(s => (
              <div
                onClick={() => handleSelect(s.name)}
                className="h-[43px] w-[484px] rounded-[8px] border border-[#8F8F8F] bg-[#e8e8e8] px-[16px] py-[12px]"
                key={s.id}
              >
                {s.name}
              </div>
            ))}
          </div>
        ) : null}
        {active && location.pathname === "/category" ? (
          <div className="absolute top-full left-0">
            {categoryList.map(cat => (
              <div
                onClick={() => handleSelect(cat.name)}
                className="h-[43px] w-[484px] rounded-[8px] border border-[#8F8F8F] bg-[#e8e8e8] px-[16px] py-[12px]"
                key={cat.id}
              >
                {cat.name}
              </div>
            ))}
          </div>
        ) : null}

        <BlueButton text={"검색"} />
      </div>
    </>
  );
};
export default ToggleInput;
