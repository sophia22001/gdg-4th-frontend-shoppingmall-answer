import { useState } from "react";
import BlueButton from "./BlueButton";
import { useCart } from "../contexts/CartContext";

// itemName으로 바꿈
const Item = ({ itemName, price }) => {
  //console.log("name: ", name);
  //console.log("price: ", price);
  //console.log("stocks", stock); // 콘솔 찍으려면 props로 stocks를 가져와야함.
  const { handleAddItem } = useCart();
  const [changingText, setChangingText] = useState("장바구니");

  const [count, setCount] = useState("");
  // "장바구니" 버튼 클릭하면,
  // "추가 완료" 문구로 변경되고 그 상품은 서버에 POST해준다.
  const onClickCart = () => {
    if (!count) {
      alert("개수를 입력해주세요.");
      return;
    }
    setChangingText("추가 완료");
    handleAddItem({ itemName, price, count });
  };

  return (
    <>
      <div className="mb-[32px] flex items-center justify-between rounded-[8px] border border-[#8f8f8f] p-[24px]">
        <div className="flex flex-col gap-[23px]">
          <div className="text-[16px] font-[600]">{itemName}</div>
          <div>{price} 원</div>
        </div>
        <div className="flex gap-[20px]">
          <input
            type="number"
            value={count}
            onChange={e => setCount(e.target.value)}
            className="m-0 h-[43px] w-[205px] rounded-[8px] border border-[#8f8f8f] px-[16px] py-[12px]"
            placeholder="개수 입력..."
          />

          <BlueButton
            className={`${changingText === "추가 완료" ? "bg-[#cacaca]" : ""}`}
            onClick={onClickCart}
            text={changingText}
          />
        </div>
      </div>
    </>
  );
};
export default Item;
