const isAnagram = (str1, str2) => {
  return formatStr(str1) === formatStr(str2);
};

const formatStr = (str) => {
  return str.replace(/[ˆ\W]/g, "").toLowerCase().split("").sort().join("");
};

export default isAnagram;
