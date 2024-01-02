import styled from "styled-components/native";
import { defaultTheme } from "../theme/default";
import { DefaultTheme } from "styled-components";

type CustomTheme = typeof defaultTheme;

declare module "styled-components/native" {
  export interface DefaultTheme extends CustomTheme {}
}
