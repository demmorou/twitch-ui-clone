import React, { FC } from "react";

import {
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
} from "./styles";

import data from "./data";

interface ItemProps {
  item: typeof data[0];
}

const CategoryList: FC = () => {
  const CategoryItem: FC<ItemProps> = ({ item }) => {
    return (
      <CategoryContainer>
        <CategoryImage source={item.source} />
        <CategoryName numberOfLines={1}> {item.name} </CategoryName>
        <CategoryStatus>
          <RedCircle />
          <Info>100k</Info>
        </CategoryStatus>
      </CategoryContainer>
    );
  };

  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
