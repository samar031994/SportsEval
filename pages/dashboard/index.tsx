import React, { useLayoutEffect } from "react";
import { getSheetData } from "../api/google/googleSheets";
import * as S from "../../components/Dashboard/Dashboard.style";
import { Card, Text } from "@mantine/core";
import * as R from "../../components/Report/Report.atom";
import { useAtom } from "jotai";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = (props) => {
  const router = useRouter();
  useLayoutEffect(() => {
    console.log(router);
  }, [router]);
  const { data } = props;
  const [card, setCard] = useAtom(R.CurrentcardAtom);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  if (!data) {
    return <Text>No data to show</Text>;
  }
  const responseCards = data.map((card) => {
    return (
      <Card
        onMouseEnter={() => setHoveredCard(card[0])}
        onMouseLeave={() => setHoveredCard(null)}
        shadow="sm"
        padding="xl"
        component="a"
        radius="md"
        style={{
          width: "250px",
          cursor: "pointer",
          borderLeft: "8px solid #0070f3",
          margin: "16px",
          transform: hoveredCard === card[0] ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.2s ease-in-out",
          backgroundColor: hoveredCard === card[0] ? "#f0f8ff" : "white",
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

// export async function getServerSideProps() {
//   let data;
//   await getSheetData().then((res) => {
//     data = res;
//   });
//   return {
//     props: {
//       data,
//     },
//   };
// }
