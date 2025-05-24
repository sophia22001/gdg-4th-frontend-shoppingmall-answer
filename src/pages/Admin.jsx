import AdminNavbar from "../components/navbar/AdminNavbar";
import StockBox from "../components/StockBox";

const Admin = () => {
  return (
    <>
      <AdminNavbar />
      <div class="mt-[132px] w-[652px]">
        <section className="flex flex-col gap-[28px]">
          <div className="text-[20px] font-[600]">상품 등록</div>
          <StockBox section2Exist={true} comment={true} />
        </section>

        <section className="flex flex-col gap-[28px]">
          <div className="text-[20px] font-[600]">재고 추가</div>
          <StockBox />
        </section>

        <section className="flex flex-col gap-[28px]">
          <div className="text-[20px] font-[600]">상품 삭제</div>
          <StockBox stockExist={false} />
        </section>

        <div className="h-[100px]"></div>
      </div>
    </>
  );
};

export default Admin;
