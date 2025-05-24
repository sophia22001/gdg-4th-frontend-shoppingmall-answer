import BlueButton from "./BlueButton";

const Item = ({ name, price }) => {
  return (
    <>
      <div className="mb-[32px] flex items-center justify-between rounded-[8px] border border-[#8f8f8f] p-[24px]">
        <div className="flex flex-col gap-[23px]">
          <div className="text-[16px] font-[600]">{name}</div>
          <div>{price} 원</div>
        </div>
        <div className="flex gap-[20px]">
          <input
            className="m-0 h-[43px] w-[205px] rounded-[8px] border border-[#8f8f8f] px-[16px] py-[12px]"
            placeholder="개수 입력..."
          />

          <BlueButton text={"장바구니"} />
        </div>
      </div>
    </>
  );
};
export default Item;
