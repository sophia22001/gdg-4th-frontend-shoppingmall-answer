import GDGlogo from "../../assets/gdg-background.png";
// import { itemData, searchedData } from "../../__mocks__/itemData";
import ItemList from "../ItemList";
import SearchInput from "../input-bar/SearchInput";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ApiDefaultContents = () => {
  // 검색어
  const [name, setNameQuery] = useState("");
  // 검색 버튼이 클릭되었는지. 검색 여부
  const [searchClicked, setSearchClicked] = useState(false);
  // 검색된 데이터 배열
  const [searchResult, setSearchResult] = useState([]);
  // 전체 데이터 배열
  const [allItems, setAllItems] = useState([]);

  const showItems = searchClicked ? searchResult : allItems;
  const isEmpty = showItems.length === 0;

  // ---------api--------------------------------
  // 모든 전체 데이터 불러오기
  useEffect(() => {
    async function fetchAllItems() {
      try {
        const response = await axios.get("/items");
        setAllItems(response.data);
      } catch (error) {
        console.error("검색어 전달 실패:", error);
      }
    }
    fetchAllItems();
  }, []);

  // 클릭되면 searchClicked를 true로 설정
  async function handleSearch(query) {
    console.log("검색 클릭됨");
    setSearchClicked(true);
    console.log(query);

    // 검색한 name을 서버에 전송
    // 검색이 안되면 빈 배열을 반환
    try {
      const response = await axios.post("/items/search", { name });
      setSearchResult(response.data ? [response.data] : []);
      console.log("반환 데이터: ", response.data);
    } catch (error) {
      console.log("Error POST data: ", error);
      setSearchResult([]);
    }
  }

  return (
    <>
      <div className="mt-[60px] w-[652px]">
        <SearchInput
          query={name}
          setQuery={setNameQuery}
          handleSearch={() => handleSearch(name)}
        />

        <div>
          {isEmpty ? (
            <div className="absolute top-1/2 left-1/2 block h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 transform">
              <img src={GDGlogo} style={{ opacity: 0.15 }} />
              <div className="absolute top-[80%] flex w-full justify-center text-[16px] text-[#8F8F8F]">
                검색 결과가 없습니다.
              </div>
            </div>
          ) : (
            <div className="mt-[72px] mb-[200px]">
              <ItemList items={showItems} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ApiDefaultContents;
