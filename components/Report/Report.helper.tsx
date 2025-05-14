import { weights } from "../global.type";
export const getReportDetails = (data) => {
  let s1: number = 0,
    s2: number = 0,
    s3: number = 0,
    s4: number = 0,
    s5: number = 0,
    s6: number = 0,
    s7: number = 0;
  data.forEach((element, index) => {
    if (index <= 5 && index >= 2) {
      s1 += weights[element];
    }
    if (index >= 6 && index <= 9) {
      s2 += weights[element];
    }
    if (index >= 10 && index <= 13) {
      s3 += weights[element];
    }
    if (index >= 14 && index <= 17) {
      s4 += weights[element];
    }
    if (index >= 18 && index <= 21) {
      s5 += weights[element];
    }
    if (index >= 22 && index <= 25) {
      s6 += weights[element];
    }
    if (index >= 26 && index <= 29) {
      s7 += weights[element];
    }
  });
  return [s1, s2, s3, s4, s5, s6, s7];
};
