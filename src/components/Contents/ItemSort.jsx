import { itemData } from "../../__mocks__/itemData";
import GDGlogo from "../../assets/gdg-background.png";
import ToggleInput from "../input-bar/ToggleInput";
import ItemList from "../ItemList";
import UserNavbar from "../navbar/UserNavbar";

const ItemSort = () => {
  return (
    <>
      <div className="mt-[60px] w-[652px]">
        <ToggleInput togglePlaceholder={"정렬 기준 선택"} />
        {itemData.length > 0 ? (
          <div className="mt-[72px] mb-[200px]">
            <ItemList />
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 block h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 transform">
            <img src={GDGlogo} style={{ opacity: 0.15 }} />
            <div className="absolute top-[80%] flex w-full justify-center text-[16px] text-[#8F8F8F]">
              검색 결과가 없습니다.
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ItemSort;
