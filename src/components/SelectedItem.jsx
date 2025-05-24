const SelectedItem = ({ name, price, stock }) => {
  return (
    <>
      <div className="mb-[32px] flex items-center gap-[130px] rounded-[8px] border border-[#8f8f8f] p-[24px]">
        <div className="flex flex-col gap-[23px]">
          <div className="text-[16px] font-[600]">{name}</div>
          <div>{price} 원</div>
        </div>
        <div className="">{stock}개</div>
      </div>
    </>
  );
};
export default SelectedItem;
