import { useAtom } from "jotai";
import React, { use, useEffect, useState } from "react";
import * as R from "../../components/Report/Report.atom";
import * as S from "../../components/Report/Report.style";
import { useRouter } from "next/router";
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
    let color: string;
    const value = reportData[index];
    switch (value) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        color = "red";
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        color = "yellow";
        break;
      case 9:
      case 10:
      case 11:
      case 12:
        color = "green";
        break;
    }
    console.log("color", color);
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
            <S.SectionDiv>
              <Text size="md" fw={700}>
                (0 - 4)
              </Text>
              <Image
                src="assets/arrow-big-up.svg"
                alt="up arrow"
                style={{
                  visibility: color === "red" ? "visible" : "hidden",
                  transform: "scale(0.5)",
                }}
              />
            </S.SectionDiv>
          </S.ColorDiv>
          <S.ColorDiv color="yellow">
            <S.SectionDiv>
              <Text size="md" fw={700}>
                (5 - 8)
              </Text>
              <Image
                src="assets/arrow-big-up.svg"
                alt="up arrow"
                style={{
                  visibility: color === "yellow" ? "visible" : "hidden",
                  transform: "scale(0.5)",
                }}
              />
            </S.SectionDiv>
          </S.ColorDiv>
          <S.ColorDiv color="green" style={{ borderRadius: "0 8px 8px 0" }}>
            <S.SectionDiv>
              <Text size="md" fw={700}>
                (9 - 12)
              </Text>
              <Image
                src="assets/arrow-big-up.svg"
                alt="up arrow"
                style={{
                  visibility: color === "green" ? "visible" : "hidden",
                  transform: "scale(0.5)",
                }}
              />
            </S.SectionDiv>
          </S.ColorDiv>
        </div>
      </Card>
    );
  });
  return <>{cardDataMapped}</>;
};

const Report = () => {
  const [card] = useAtom(R.CurrentcardAtom);
  const router = useRouter();
  useEffect(() => {
    if (!card || card.length === 0) {
      router.replace("/404");
    }
  });
  return (
    <>
      <Button
        color="indigo"
        onClick={() => {
          router.replace("/dashboard");
        }}
        style={{ margin: "16px", position: "absolute", top: "0", left: "0" }}
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
