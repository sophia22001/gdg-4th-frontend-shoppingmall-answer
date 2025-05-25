import GDGlogo from "../../assets/gdg-background.png";
import { itemData, searchedData } from "../../__mocks__/itemData";
import ItemList from "../ItemList";
import SearchInput from "../input-bar/SearchInput";
import { useState } from "react";

const DefaultContents = () => {
  // 검색어
  const [query, setQuery] = useState("");
  // 검색 버튼이 클릭되었는지. 검색 여부
  const [searchClicked, setSearchClicked] = useState(false);
  // 검색된 데이터 배열
  const [searchResult, setSearchResult] = useState([searchedData]);
  // 전체 데이터 배열
  const [allItems, setAllItems] = useState(itemData);

  const showItems = searchClicked ? searchResult : allItems;
  const isEmpty = showItems.length === 0;

  //const query = searchedData.name;

  function handleSearch(query) {
    console.log("검색 클릭됨");
    setSearchClicked(true);
    console.log(query);
  }

  return (
    <>
      <div className="mt-[60px] w-[652px]">
        <SearchInput
          query={query}
          setQuery={setQuery}
          handleSearch={() => handleSearch(searchedData.name)}
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

export default DefaultContents;
