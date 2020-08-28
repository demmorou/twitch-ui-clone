import { Platform } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";

import colors from "../../styles/colors";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: ${colors.primary};
  padding-top: ${statusBarHeight + "px"};
`;

export const Container = styled.View`
  flex: 1;
  padding-left: 14px;
`;

export const Main = styled.View``;
