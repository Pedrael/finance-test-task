const compareLine = (oldValue = {}, newValue = {}) => {
  const olds = Object.entries(oldValue).map(item => item[1]);
  const news = Object.entries(newValue).map(item => item[1]);
  if(olds.length === 0 || news.length === 0 || olds.length !== news.length)
    return ["", "", "", "", "", "", "", ""];
  return olds.map((item, index) => {
    if(typeof Number(item) === "number") {
      if(news[index] - item > 0) return "greenCell";
      if(news[index] - item < 0) return "redCell";
    }
    return "";
  });
}

export default compareLine;
