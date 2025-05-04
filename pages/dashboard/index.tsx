import React from "react";
import { getSheetData } from "../api/google/googleSheets";
import * as S from "../../components/Dashboard/Dashboard.style";
import { Card, Image, Text } from "@mantine/core";
import { useRouter } from "next/router";
import * as R from "../../components/Report/Report.atom";
import { useAtom } from "jotai";

const Dashboard = (props) => {
  const { data } = props;
  const router = useRouter();
  const [card, setCard] = useAtom(R.CurrentcardAtom);
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
          borderLeft: "8px solid #0070f3",
          margin: "16px",
        }}
        key={card[0]}
        onClick={() => {
          setCard(card);
          router.replace("/report");
        }}
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
