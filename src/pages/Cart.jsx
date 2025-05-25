import { cartList } from "../__mocks__/itemData";
import BlueButton from "../components/BlueButton";
import SearchInput from "../components/input-bar/SearchInput";
import Item from "../components/Item";
import UserNavbar from "../components/navbar/UserNavbar";
import SelectedItem from "../components/SelectedItem";

const Cart = () => {
  // mockData
  const totalCost = cartList.totalPrice;

  return (
    <>
      <UserNavbar />
      <div className="mt-[132px] w-[652px]">
        <div className="flex w-[652px] flex-col">
          <div className="mb-[72px] text-[25px] font-[600]">장바구니</div>
          <div>
            {cartList.items.map((item, index) => {
              return (
                <div key={index}>
                  <SelectedItem {...item} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mb-[20px]"> 총 결제 금액: {totalCost}원</div>
        <BlueButton text={"결제하기"} />
      </div>
    </>
  );
};
export default Cart;
