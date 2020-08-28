import React from "react";
import { View } from "react-native";

import {
  List,
  ChannelContainer,
  LeftSide,
  RightSide,
  Avatar,
  Column,
  Username,
  Info,
  WhiteCircle,
} from "./styles";

const ChannelList: React.FC = () => {
  const ChannelList = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>deusimardamiao</Username>
          <Info>1 new video</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  return (
    <List>
      <ChannelList />
      <ChannelList />
      <ChannelList />
      <ChannelList />
      <ChannelList />
      <ChannelList />
      <ChannelList />
      <ChannelList />
      <ChannelList />
      <ChannelList />
    </List>
  );
};

export default ChannelList;
