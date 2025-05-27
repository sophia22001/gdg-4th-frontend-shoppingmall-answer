// mockData

// 모든 상품 리스트 api
export const itemData = [
  { id: 1, name: "원피스", price: 1000, stock: 13 },
  { id: 2, name: "상품2", price: 200, stock: 7 },
  { id: 3, name: "상품3", price: 5000, stock: 14 },
  { id: 4, name: "상품4", price: 8000, stock: 113 },
];

// 검색된 상품 리스트 api
export const searchedData = {
  id: 1,
  name: "원피스",
  price: 1000,
  stock: 13,
};

// 장바구니 상품 페이지 api
export const cartList = {
  totalPrice: 20000,
  items: [
    { name: "장바구니 상품1", count: 5, price: 1000 },
    { name: "장바구니 상품2", count: 5, price: 7000 },
    { name: "장바구니 상품3", count: 5, price: 500 },
  ],
};

// 의류로 카테고리 선택된 상품 리스트 api
export const categoryData = [
  {
    id: 1,
    category: "의류",
    name: "원피스",
    price: 1000,
    stock: 13,
  },
  {
    id: 2,
    category: "의류",
    name: "청바지",
    price: 1000,
    stock: 13,
  },
];

// 100~1000인 가격 검색된 데이터 리스트
export const priceSelectedData = {
  low: 100,
  high: 10000,

  items: [
    {
      id: 1,
      name: "원피스",
      price: 500,
      stock: 13,
    },
    {
      id: 2,
      name: "청바지",
      price: 200,
      stock: 13,
    },
  ],
};

// 정렬된 결과 리스트 api
export const sortedData = [
  {
    id: 1,
    name: "가나",
    price: 200,
    stock: 13,
  },
  {
    id: 2,
    name: "나다다",
    price: 200,
    stock: 13,
  },
  {
    id: 2,
    name: "다라",
    price: 200,
    stock: 13,
  },
];
