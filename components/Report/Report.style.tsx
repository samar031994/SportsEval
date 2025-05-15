import styled from "styled-components";

export const ReportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  position: absolute;
  top: 12%;
  right: 12%;
  height: fit-content;
  border: 2px solid #0070f3;
  border-radius: 8px;
  justify-content: center;
`;

export const ReportSection = styled.div`
  align-self: flex-start;
`;

export const ColorDiv = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${(props) => props.color};
  width: 33%;
  height: 50px;
`;

export const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
