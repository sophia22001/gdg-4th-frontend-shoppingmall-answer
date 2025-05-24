import BlueButton from "./BlueButton";

const FlexStyle = "flex w-[285px] justify-between items-center";
const InputStyle =
  "placeholder:text-[14px]  w-[205px] rounded-[8px] border border-[#8F8F8F] px-[12px] py-[6px]";

const StockBox = ({
  stockExist = true,
  section2Exist = false,
  comment = false,
}) => {
  return (
    <>
      <div className="mb-[72px] flex w-full flex-col gap-[9px] rounded-[8px] border border-[#8F8F8F] px-[24px] py-[20px]">
        <section className="flex justify-between">
          <div className={FlexStyle}>
            <div>상품명</div>
            <input className={InputStyle} placeholder="상품명 입력..." />
          </div>
          {stockExist ? (
            <div className={FlexStyle}>
              <div>재고</div>
              <input className={InputStyle} placeholder="개수 입력..." />
            </div>
          ) : null}
        </section>
        {section2Exist ? (
          <section className="flex justify-between">
            <div className={FlexStyle}>
              <div>가격</div>
              <input className={InputStyle} placeholder="가격 입력..." />
            </div>
            <div className={FlexStyle}>
              <div>카테고리</div>
              <input className={InputStyle} placeholder="상품명 입력..." />
            </div>
          </section>
        ) : null}

        <section className="mt-[7px] flex items-center justify-between">
          {comment ? (
            <div className="text-[14px] text-[#A5A5A5]">
              * 추가 기능을 카테고리로 설정한 경우에만 카테고리를 이용헤주세요.
            </div>
          ) : (
            <div></div>
          )}
          {!stockExist ? (
            <BlueButton className="h-[31px] bg-[#F00]" text={"삭제"} />
          ) : !section2Exist ? (
            <BlueButton className="h-[31px]" text={"추가"} />
          ) : (
            <BlueButton className="h-[31px]" text={"등록"} />
          )}
        </section>
      </div>
    </>
  );
};
export default StockBox;
