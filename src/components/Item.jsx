import { useState } from "react";
import BlueButton from "./BlueButton";
import { useCart } from "../contexts/CartContext";

const Item = ({ itemName, price, quantity }) => {
  // quantity: 남은 수량

  const { handleAddItem } = useCart();
  const [changingText, setChangingText] = useState("장바구니");

  const [count, setCount] = useState("");
  // "장바구니" 버튼 클릭하면,
  // "추가 완료" 문구로 변경되고 그 상품은 서버에 POST해준다.
  const onClickCart = () => {
    console.log("장바구니 버튼 클릭됨");
    if (!count) {
      alert("개수를 입력해주세요.");
      return;
    }
    // setQuantity(quantity);
    setChangingText("추가 완료");
    handleAddItem({ itemName, price, count });
    // 여기에 api 보내야 하나 ???
  };

  return (
    <>
      {/* 남은 수량이 0보다 클 때만 item을 렌더링한다. */}
      {quantity > 0 ? (
        <div className="mb-[32px] flex items-center justify-between rounded-[8px] border border-[#8f8f8f] p-[24px]">
          <div className="flex flex-col gap-[23px]">
            <div className="text-[16px] font-[600]">{itemName}</div>
            <div className="flex items-center gap-[15px]">
              <div>{price} 원</div>
              <div className="text-[12px] text-[#8f8f8f]">
                남은 수량: {quantity}개
              </div>
            </div>
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
      ) : null}
    </>
  );
};
export default Item;
