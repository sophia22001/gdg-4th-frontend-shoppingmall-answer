import { selectedItemData } from "../__mocks__/itemData";
import BlueButton from "../components/BlueButton";
import SearchInput from "../components/input-bar/SearchInput";
import Item from "../components/Item";
import UserNavbar from "../components/navbar/UserNavbar";
import SelectedItem from "../components/SelectedItem";

const Cart = () => {
  // mockData
  const totalCost = 500;

  return (
    <>
      <UserNavbar />
      <div className="mt-[132px] w-[652px]">
        <div className="flex w-[300px] flex-col">
          <div className="mb-[72px] text-[25px] font-[600]">장바구니</div>
          <div>
            {selectedItemData.map(item => {
              return (
                <div key={item.id}>
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
