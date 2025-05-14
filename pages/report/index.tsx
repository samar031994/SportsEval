import { useAtom } from "jotai";
import React, { use, useEffect, useState } from "react";
import * as R from "../../components/Report/Report.atom";
import * as S from "../../components/Report/Report.style";
//import { useRouter } from "next/router";
import { reportMapping } from "../../components/global.type";
import { Button, Card, Image, Text } from "@mantine/core";
import { getReportDetails } from "../../components/Report/Report.helper";

const getCardText = (value: number, item) => {
  let text = "";
  if (value >= 0 && value <= 4) {
    text = item.low;
  } else if (value >= 5 && value <= 8) {
    text = item.average;
  } else if (value >= 9 && value <= 12) {
    text = item.high;
  } else {
    text = "Issue calculating values";
  }
  return text;
};

const CardMapper = () => {
  const [card] = useAtom(R.CurrentcardAtom);
  const [reportData, setReportData] = useState<number[] | null>(null);
  useEffect(() => {
    setReportData(getReportDetails(card));
  }, []);
  if (!reportData) {
    return <Text>Loading...</Text>;
  }
  const cardDataMapped = reportMapping.map((item, index) => {
    const value = reportData[index];
    const text = getCardText(reportData[index], item);
    return (
      <Card
        style={{
          border: "2px solid rgb(127, 171, 221)",
          margin: "2px",
        }}
      >
        <Text fw={700}>{`${item.text} (${value})`}</Text>
        <Text size="md">{text}</Text>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "50px",
          }}
        >
          <S.ColorDiv color="red" style={{ borderRadius: "8px 0 0 8px" }}>
            <Text size="md" fw={700}>
              (0 - 4)
            </Text>
          </S.ColorDiv>
          <S.ColorDiv color="yellow">
            <Text size="md" fw={700}>
              (5 - 8)
            </Text>
          </S.ColorDiv>
          <S.ColorDiv color="green" style={{ borderRadius: "0 8px 8px 0" }}>
            <Text size="md" fw={700}>
              (9 - 12)
            </Text>
          </S.ColorDiv>
        </div>
      </Card>
    );
  });
  return <>{cardDataMapped}</>;
};

const Report = () => {
  const [card] = useAtom(R.CurrentcardAtom);
  //const router = useRouter();
  useEffect(() => {
    if (!card || card.length === 0) {
      //router.replace("/404");
    }
  });
  return (
    <>
      <Button
        color="indigo"
        onClick={() => {
          //router.replace("/dashboard");
        }}
      >
        Dashboard
      </Button>
      <S.ReportWrapper>
        <CardMapper />
      </S.ReportWrapper>
    </>
  );
};

export default Report;
