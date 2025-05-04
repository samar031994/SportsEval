import { useAtom } from "jotai";
import React from "react";
import * as R from "../../components/Report/Report.atom";
import * as S from "../../components/Report/Report.style";
import { useRouter } from "next/router";

const Report = () => {
  const [card] = useAtom(R.CurrentcardAtom);
  const router = useRouter();
  if (!card || card.length === 0) {
    router.replace("/404");
  }
  // Work with card[30] - card[36]
  const startIndex = 30;
  const endIndex = 36;
  return (
    <S.ReportWrapper>
      <label>{card[0]}</label>
    </S.ReportWrapper>
  );
};

export default Report;
