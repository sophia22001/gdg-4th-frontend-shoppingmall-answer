import { itemData } from "../__mocks__/itemData";
import Item from "./Item";

const ItemList = () => {
  return (
    <>
      <div>
        {itemData.map(item => {
          return (
            <div key={item.id}>
              <Item {...item} />
            </div>
          );
        })}
      </div>
      <div className="h-[190px]"></div>
    </>
  );
};
export default ItemList;
