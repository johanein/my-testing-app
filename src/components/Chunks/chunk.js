const chunkArray = (arr, len) => {
  const chunkedArr = [];
  arr.forEach((val) => {
    const last = chunkedArr[chunkedArr.length - 1];
    // check last and last is equal to the chunk length
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
};

export default chunkArray;
