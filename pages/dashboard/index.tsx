import React from "react";
import { getSheetData } from "../api/google/googleSheets";
import * as S from "../../components/Dashboard/Dashboard.style";
import { Card, Image, Text } from "@mantine/core";

const Dashboard = (props) => {
  const { data } = props;
  console.log("Dashboard data", data);
  const responseCards = data.map((card) => {
    return (
      <Card
        shadow="sm"
        padding="xl"
        component="a"
        radius="md"
        style={{
          width: "225px",
          cursor: "pointer",
          borderLeft: "6px solid #0070f3",
          margin: "16px",
          ":hover": {
            backgroundColor: "rgb(141, 150, 228)",
          },
        }}
        key={card[0]}
      >
        <Text>{card[0]}</Text>
      </Card>
    );
  });
  return <S.DashboardWrapper>{responseCards}</S.DashboardWrapper>;
};

export default Dashboard;

export async function getServerSideProps() {
  let data;
  await getSheetData().then((res) => {
    data = res;
  });
  return {
    props: {
      data,
    },
  };
}
