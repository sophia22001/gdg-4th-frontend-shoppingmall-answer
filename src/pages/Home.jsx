import UserNavbar from "../components/navbar/UserNavbar";
import CategoryFilter from "../components/Contents/CategoryFilter";
import PriceFilter from "../components/Contents/PriceFilter";
import ItemSort from "../components/Contents/ItemSort";
// import DefaultContents from "../components/Contents/DefaultContents";
import { useLocation, useNavigate } from "react-router-dom";
import ApiDefaultContents from "../components/Contents/ApiDefaultContents";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();
  const nav = useNavigate();

  // 역할 - CONSUMER, ADMIN
  const [position, setPosition] = useState("ADMIN"); // 기본값: ADMIN

  useEffect(() => {
    if (
      location.pathname === "/category" ||
      location.pathname === "/price" ||
      location.pathname === "/sort"
    ) {
      setPosition("CONSUMER");
    } else {
      setPosition("ADMIN");
    }
  }, [location.pathname]);

  // 메뉴바 선택에 따른 콘텐츠 렌더링
  const renderContent = () => {
    switch (location.pathname) {
      case "/category":
        return <CategoryFilter position={position} />;
      case "/price":
        return <PriceFilter position={position} />;
      case "/sort":
        return <ItemSort position={position} />;
      default:
        return <ApiDefaultContents position={position} />;
    }
  };

  return (
    <>
      <UserNavbar />
      {renderContent()}

      <button
        onClick={() => nav("/cart")}
        className="fixed bottom-[40px] w-[652px] rounded-[8px] border-[2px] border-[#008CFF] bg-white px-[16px] py-[12px] text-[#008CFF] hover:cursor-pointer"
      >
        장바구니 구매하기
      </button>
    </>
  );
};

export default Home;
