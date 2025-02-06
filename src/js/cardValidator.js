export function isValidCard(number) {
  if (number) {
    
    if(number == 0) {
      return false;
    };

    const cardNumber = number.toString();
    let sum = 0;
    const parity = cardNumber.length % 2;

    for (let i = 0; i < cardNumber.length; i += 1) {
      let digit = Number(cardNumber[i]);
      if (i % 2 === parity) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }

    return Number(sum % 10) === 0;
  }

  return "None";
}

export function getCardType(number) {
  const cardList = {
    Visa: /^4/,
    MasterCard: /^5[1-5]/,
    Amex: /^3[47]/,
    Discover: /^(6011|65|64|622[1-9])/,
    JCB: /^(35[2-8]|35)/,
    MIR: /^220[0-4]/,
  };

  for (const key in cardList) {
    let pattern = cardList[key];

    if (pattern.test(number)) {
      return key;
    }
  }

  return false;
}
