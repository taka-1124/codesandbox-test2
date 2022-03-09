const nameAtr = ["田中", "坂本", "中田"];
// const nameAtr2 = nameAtr.map((name) => {
//   return name;
// });

// console.log(nameAtr2);

// nameAtr.map((name, index) => console.log(name));
// nameAtr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

/**f
 * filter
 */

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(newNumArr);

// const newNameArr = nameAtr.map((name) => {
// if (name === "坂本") {
//   return name;
// } else {
//   return `${name}さん`;
// }
//   const k = name === "坂本" ? name : `${name}さん`;
//   console.log(k);
// });

// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件　?

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲です。";
// };

// console.log(checkSum(60, 50));

/**
 * 論理演算子の本当の意味を知ろう
 */

const flag1 = true;
const flag2 = false;

// if (flag1 || flag2) {
//   console.log("どちらかがtrue");
// }
if (flag1 && flag2) {
  console.log("どちらかがtrue");
} else {
  console.log("どちらかがfalse");
}

// ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です。";
// console.log(fee);

// &&は左側がtureなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました。";
console.log(fee2);
