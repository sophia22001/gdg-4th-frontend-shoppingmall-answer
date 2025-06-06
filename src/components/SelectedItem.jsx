const SelectedItem = ({ itemName, count, price }) => {
  // count 가 맞는 이름.
  return (
    <>
      <div className="mb-[32px] flex items-center justify-between rounded-[8px] border border-[#8f8f8f] p-[24px]">
        <div className="flex flex-col gap-[23px]">
          <div className="text-[16px] font-[600]">{itemName}</div>
          <div>{price} 원</div>
        </div>
        <div className="">{count}개</div>
      </div>
    </>
  );
};
export default SelectedItem;
