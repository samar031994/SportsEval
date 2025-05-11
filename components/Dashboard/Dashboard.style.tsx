import styled from "styled-components";
import { Card, Image, Text } from "@mantine/core";

export const DashboardWrapper = styled.div`
  display: grid;
  gridtemplatecolumns: "repeat(auto-fit, minmax(300px, 1fr))";
  gap: "16px;";
`;

export const CardComponent = styled(Card)`
  width: "300px";
  cursor: "pointer";
  borderleft: "6px solid #0070f3";
  margin: "16px";
  &hover {
    background-color: rgb(141, 150, 228);
  }
`;
