import { useLocation } from "react-router-dom";
// import { cartList } from "../__mocks__/itemData";
import UserNavbar from "../components/navbar/UserNavbar";
import SelectedItem from "../components/SelectedItem";

const Purchased = () => {
  // mockData
  // const totalPrice = cartList.totalPrice;

  const location = useLocation();
  const buyResult = location.state?.buyResult; // Home 페이지에서 state로 응답데이터 받기

  // 예외처리: 직접 /purchased 주소로 진입했을 때
  if (!buyResult) {
    return <div>구매 정보가 없습니다.</div>;
  }

  // 응답에서 넘어온 총 금액과 items 배열
  const totalPrice = buyResult.totalPrice;
  const items = buyResult.items;

  return (
    <>
      <UserNavbar />
      <div className="mt-[132px] w-[652px]">
        <div className="flex w-[652px] flex-col">
          <div className="mb-[50px] text-[25px] font-[600]">구매완료</div>
          <div className="mb-[20px]"> 총 결제된 금액: {totalPrice}원</div>
          <div>
            {items.map((item, index) => {
              //items 배열 반복 내열
              return (
                <div key={index}>
                  <SelectedItem {...item} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-[130px]"></div>
      </div>
    </>
  );
};
export default Purchased;
