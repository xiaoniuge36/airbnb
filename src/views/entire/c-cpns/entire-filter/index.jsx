import React, { memo, useState } from "react";
import classNames from "classnames";

import { EntireFilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";

const EntireFilter = memo(() => {
  const [selectedItems, setSelectedItems] = useState([]); // 选中的项

  function itemClickHandle(item) {
    const newItems = [...selectedItems]; // 浅拷贝
    if (newItems.includes(item)) {
      // 移除
      const itemIndex = newItems.findIndex((filterItem) => filterItem === item); // 找到索引
      newItems.splice(itemIndex, 1); // 移除 从索引开始移除1个
    } else {
      // 加入
      newItems.push(item);
    }
    setSelectedItems(newItems);
  }

  return (
    <EntireFilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classNames("item", {
                active: selectedItems.includes(item),
              })}
              key={index}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </EntireFilterWrapper>
  );
});

export default EntireFilter;
