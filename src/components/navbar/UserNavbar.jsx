import { useNavigate } from "react-router-dom";

// 공통 호버 스타일
const hoverStyle =
  "cursor-pointer text-[#707070] hover:text-[#008CFF] hover:font-[600] transition";

const UserNavbar = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="fixed flex h-[60px] w-full items-center justify-around border-b border-[#D2D2D2] bg-white">
        <img
          onClick={() => (window.location.href = "/")}
          src="gdg-favicon.svg"
        ></img>
        <div className="flex gap-[22px]">
          <div className={hoverStyle} onClick={() => nav("/category")}>
            카테고리 필터링
          </div>
          <div className={hoverStyle} onClick={() => nav("/price")}>
            가격 범위 필터링
          </div>
          <div className={hoverStyle} onClick={() => nav("/sort")}>
            상품 정렬
          </div>
        </div>
        <button
          onClick={() => nav("/admin")}
          className="rounded-[8px] border border-blue-500 p-[6px] text-[16px] text-blue-500 hover:cursor-pointer"
        >
          관리자
        </button>
      </div>
    </>
  );
};

export default UserNavbar;
