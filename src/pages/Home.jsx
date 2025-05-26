import UserNavbar from "../components/navbar/UserNavbar";
import CategoryFilter from "../components/Contents/CategoryFilter";
import PriceFilter from "../components/Contents/PriceFilter";
import ItemSort from "../components/Contents/ItemSort";
// import DefaultContents from "../components/Contents/DefaultContents";
import { useLocation, useNavigate } from "react-router-dom";
import ApiDefaultContents from "../components/Contents/ApiDefaultContents";
import { useState } from "react";
import { useEffect } from "react";
import baseApi from "../api/baseApi";
import { useCart } from "../contexts/CartContext";

const Home = () => {
  const { cartItems } = useCart();
  const location = useLocation();
  const nav = useNavigate();

  // 역할 - CONSUMER, ADMIN
  const [position, setPosition] = useState("ADMIN"); // 기본값: ADMIN

  // pathname 이 바뀔 때마다 역할 체크
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

  // 장바구니 구매에 필요한 상태
  const [userName, setUserName] = useState("홍길동");

  // 여러 개의 상품처리 관리 상태
  const [items, setItems] = useState([{ itemName: "", count: 0 }]);

  // 구매 POST 보낼 데이터
  const buyItemData = { userName, position, items: cartItems };

  // 구매 POST 받을 데이터
  // {totalPrice, items: [ {itemName, price, count} ]}; // 설명 주석

  // ----장바구니 구매하기 api ------------------------------
  async function handleBuy() {
    console.log("구매하기 버튼 클릭됨");

    if (items.length === 0) {
      alert("장바구니로 추가된 상품이 없습니다.");
      return;
    }

    try {
      const response = await baseApi.post("items/buy", buyItemData);
      console.log(response.data);
      console.log("구매하기 성공");

      const data = response.data;

      alert("구매 완료!");

      // 성공하면 구매완료 페이지로, 응답 데이터를 Cart로 넘기기
      // useLocation.state 이용하기
      nav("/cart", { state: { buyResult: data } });
    } catch (error) {
      console.error("구매하기 실패:", error);
      alert("구매 실패!");
    }
  }

  //----------------------------------------------------------

  return (
    <>
      <UserNavbar />
      {renderContent()}

      <button
        onClick={handleBuy}
        className="fixed bottom-[40px] w-[652px] rounded-[8px] border-[2px] border-[#008CFF] bg-white px-[16px] py-[12px] text-[#008CFF] hover:cursor-pointer"
      >
        장바구니 구매하기
      </button>
    </>
  );
};

export default Home;
