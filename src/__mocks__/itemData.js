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
