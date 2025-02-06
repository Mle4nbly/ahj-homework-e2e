import { isValidCard, getCardType } from "./cardValidator.js";

const numberList = {
  Visa: ["4929235414638652", "4485209812777012", "4929233970145840467"],
  MasterCard: ["5349816411721689", "5179448565608283", "5388650369436889"],
  Amex: ["378936720308484", "374919241495463", "344755242200222"],
  Discover: ["6011875296784514", "6011295022566186", "6011155898485490503"],
  JCB: ["3538528766958040", "3531281393698301", "3530691115505053549"],
  MIR: ["2200528766958040", "2201528766958040", "2203528766958040"],
};

test("getCardType() testing", () => {
  for (const key in numberList) {
    for (const number of numberList[key]) {
      expect(getCardType(number)).toBe(key);
    }
  }
});

test("getCardType() testing error", () => {
  expect(getCardType("30")).toBe(false);
});

test("isValidCard testing true", () => {
  expect(isValidCard("4929235414638652")).toBe(true);
});

test("isValidCard testing false", () => {
  expect(isValidCard("0")).toBe(false);
});

test("isValidCard testing None", () => {
  expect(isValidCard("")).toBe("None");
});
