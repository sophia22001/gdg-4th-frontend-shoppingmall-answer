import { useNavigate } from "react-router-dom";
import Item from "./Item";

// 원래는 '장바구니 구매하기' 버튼을 클릭해서 -> location.state로 구매 데이터를 전달 -> 구매 내역 페이지로 이동한다.

// '내 구매 내역' 버튼을 클릭해도 구매 내역 페이지로 이동하도록
// 구매 완료가 되면 (state가 없으면) localStorage에 저장한다.

const ItemList = ({ items }) => {
  const nav = useNavigate();

  if (!Array.isArray(items)) {
    console.error("items is not an array:", items);
    return null;
  }
  return (
    <div>
      <div className="flex w-full justify-end">
        <button
          onClick={() => nav("/purchased")}
          className="mb-[10px] border-b-1 hover:cursor-pointer hover:text-[#008CFF]"
        >
          내 구매 내역
        </button>
      </div>
      {items.map(item => (
        <div key={item.id}>
          <Item {...item} />
        </div>
      ))}
      <div className="h-[190px]"></div>
    </div>
  );
};

export default ItemList;
