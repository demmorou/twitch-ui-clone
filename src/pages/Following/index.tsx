import React, { FC, useMemo } from "react";
import { FlatList } from "react-native";

import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import CategoryList from "../../components/CategoryList";
import StreamList from "../../components/StreamList";
import ChannelList from "../../components/ChannelList";

import { Wrapper, Container, Main } from "./styles";
import { View } from "react-native";

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: FC = () => {
  const { data, indexes } = useMemo(() => {
    const items: Item[] = [
      {
        key: "PAGE_HEADING",
        render: () => <Heading>Following</Heading>,
      },
      {
        key: "FOLLOWED _CATEGORIES",
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      { key: "C1", render: () => <CategoryList /> },
      {
        key: "LIVE_CHANNELS",
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      { key: "C2", render: () => <StreamList /> },
      {
        key: "CONTINUE_WATCHING",
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      { key: "C3", render: () => <StreamList /> },
      {
        key: "OFFLINE_CHANNELS",
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },
      { key: "C4", render: () => <ChannelList /> },
    ];

    const indexes: number[] = [];

    items.forEach((item, index) => item.isTitle && indexes.push(index));

    return {
      data: items,
      indexes,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indexes}
            // refresh
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
