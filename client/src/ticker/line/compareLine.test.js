//import { render, screen } from '@testing-library/react';
import compareLine from './compareLine';

const utcDate = () => {
  const now = new Date();
  return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
}

const test1 = {
  ticker: 'GOOGL',
  exchange: 'NASDAQ',
  price: '101.1',
  change: '201.1',
  change_percent: '0.11',
  dividend: '0.11',
  yield: '1.21',
  last_trade_time: utcDate()
};

const test2 = {
  ticker: 'GOOGL',
  exchange: 'NASDAQ',
  price: '107.1',
  change: '200.1',
  change_percent: '0.19',
  dividend: '0.10',
  yield: '1.20',
  last_trade_time: utcDate()
};

const result = ["", "", "redCell", "greenCell", "redCell", "greenCell", "greenCell", ""];
const expected = compareLine(test2, test1);

result.forEach((item, i) => {
  test ('Item of '+ i +' line is '+ item, () => {
    expect(item).toBe(expected[i]);
  });
});


test ('Empty CompareLine', () => {
  expect(compareLine()).toEqual(["", "", "", "", "", "", "", ""]);
});

test ('Not Equal Length of Input Objects CompareLine', () => {
  expect(compareLine(test1, {test: 'test'})).toEqual(["", "", "", "", "", "", "", ""]);
});

test ('Typical CompareLine Length', () => {
  expect(compareLine(test1, test2).length).toEqual(8);
});

test ('Typical CompareLine Output', () => {
  expect(compareLine(test2, test1)).toEqual(result);
});
