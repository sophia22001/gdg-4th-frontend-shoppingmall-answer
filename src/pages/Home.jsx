import UserNavbar from "../components/navbar/UserNavbar";
import CategoryFilter from "../components/Contents/CategoryFilter";
import PriceFilter from "../components/Contents/PriceFilter";
import ItemSort from "../components/Contents/ItemSort";
import DefaultContents from "../components/Contents/DefaultContents";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  // 메뉴바 선택에 따른 콘텐츠 렌더링
  const renderContent = () => {
    switch (location.pathname) {
      case "/category":
        return <CategoryFilter />;

      case "/price":
        return <PriceFilter />;
      case "/sort":
        return <ItemSort />;
      default:
        return <DefaultContents />;
    }
  };

  return (
    <>
      <UserNavbar />
      {renderContent()}

      <button className="fixed bottom-[40px] w-[652px] rounded-[8px] border-[2px] border-[#008CFF] bg-white px-[16px] py-[12px] text-[#008CFF] hover:cursor-pointer">
        장바구니 구매하기
      </button>
    </>
  );
};

export default Home;
