/* eslint-disable react/display-name */
"use client";

export default function Home() {
  // function common(a: number[], b: number[], c: number[]): number {
  //   let result = 0;
  //   for (let i = 0; i < a.length; i++) {
  //     const elInArrB = b.find((val) => val === a[i]);
  //     const elInArrC = c.find((val) => val === a[i]);
  //     if (elInArrB && elInArrC) {
  //       result = result + a[i];
  //     }
  //   }
  //   return result;
  // }
  // function common(a: number[], b: number[], c: number[]): number {
  //   return a.reduce((acc, curVal) => {
  //     const elInArrB = b.find((val) => val === curVal);
  //     const elInArrC = c.find((val) => val === curVal);
  //     if (elInArrB && elInArrC) {
  //       acc = acc + curVal;
  //     }
  //     return acc;
  //   }, 0);
  // }
  // function common(a: number[], b: number[], c: number[]): number {
  //   return a.reduce((acc, curVal, i) => {
  //     const elInArrB = b.includes(curVal);
  //     const elInArrC = c.includes(curVal);
  //     if (elInArrB && elInArrC) {
  //       b.splice(b.indexOf(curVal), 1);
  //       c.splice(c.indexOf(curVal), 1);
  //       acc = acc + curVal;
  //     }

  //     return acc;
  //   }, 0);
  // }

  // function spinAround(turns: string[]) {
  //   const result = turns.reduce((acc, rotationType) => {
  //     return rotationType === "right" ? (acc += 90) : (acc -= 90);
  //   }, 0);
  //   console.log("result =>", Math.abs(result % 360));
  //   return Math.abs(result % 360) > 0 ? 0 : Math.abs(Math.floor(result / 360));
  // }

  // function spinAround(turns: string[]) {
  //   let countBallance = 0;

  //   if (turns.length === 0) {
  //     return 0;
  //   } else {
  //     const result = turns.reduce((acc, rotationType) => {
  //       return (acc["fullRotation"] = rotationType === "right" ? ++countBallance : --countBallance), acc;
  //     }, {});

  //     let count = [];
  //     Object.keys(result).forEach((key) => {
  //       count.push(Math.abs(result[key]));
  //     });

  //     return Math.floor(Math.max(...count) / 4);
  //   }
  // }

  // function filter_list(l: Array<string | number>) {
  //   return l.filter((val) => Number.isInteger(val));
  // }
  // function maskify(cc) {
  //   const result = [...cc];
  //   return [...result.splice(0, result.length - 4).fill("#"), ...[...cc].slice(-4)].join("");
  // }
  // function squareDigits(num) {
  //   return +[...num.toString()].reduce((acc, val) => (acc += Math.pow(val, 2)), []);
  // }
  // function persistence(num) {
  //   let count = 0;
  //   if (num < 10) {
  //     return count;
  //   } else {
  //     let numArr = [...num.toString()];
  //     const multyplyFunc = (multiplArr) => {
  //       numArr = [...[...multiplArr].reduce((acc, val) => acc * val).toString()];
  //       count++;
  //       return numArr;
  //     };

  //     do {
  //       multyplyFunc(numArr);
  //     } while (numArr.length > 1);

  //     if (numArr.length === 1) {
  //       return count;
  //     }
  //   }
  // }

  // function findUniq(arr: Array<number>) {
  // let result = 0.0;
  // const objFromarr = arr.reduce((acc, val) => ((acc[val] = (acc[val] || 0) + 1), acc), {});
  // Object.keys(objFromarr).forEach((key) => {
  //   if (objFromarr[key] === 1) {
  //     result = Number(key);
  //     return;
  //   }
  // });

  // return result;
  // }
  // type ObgectType = {
  //   [x: string | number | symbol]: number;
  // };

  // function cakes(recipe: ObgectType, available: ObgectType) {
  //   let result = 0;
  //   let arr = [];
  //   for (const key in recipe) {
  //     if (available.hasOwnProperty(key) === false) {
  //       result = 0;
  //       break;
  //     }
  //     arr.push(Math.floor(available[key] / recipe[key]));
  //     result = Math.min(...arr);
  //   }
  //   return result;
  // }

  // function spinWords(string: string) {
  //   const mainArr = string.split(" ");

  // let result = [];
  // for (let i = 0; i < mainArr.length; i++) {
  //   const subArr = mainArr[i].split("");
  //   if (subArr.length >= 5) {
  //     result.push(subArr.reverse().join(""));
  //   } else {
  //     result.push(subArr.join(""));
  //   }
  // }
  // return result.join(" ");
  // }

  // function humanReadable(seconds: number) {
  //   const HH = Math.floor(seconds / 3600);
  //   const MM = Math.floor((seconds - HH * 3600) / 60);
  //   const SS = Math.floor(seconds - HH * 3600 - MM * 60);

  //   return [HH, MM, SS].reduce((acc, el, i) => {
  //     const curTimeValLength = el.toString().split("").length;
  //     return (acc = acc.concat(
  //       i < 2 && curTimeValLength === 1
  //         ? `0${el}:`
  //         : i < 2 && curTimeValLength > 1
  //         ? `${el}:`
  //         : curTimeValLength === 1
  //         ? `0${el}`
  //         : `${el}`
  //     ));
  //   }, "");
  // }

  // function findUniq(arr: Array<string>) {
  //   if (arr.join("").length === 1) {
  //     return arr.join("");
  //   }

  //   let itemPos = 0;

  //   if (arr.join("").length === arr.length) {
  //     for (let i = 0; i < arr.length; i++) {
  //       if (arr[i] !== arr[i + 1] && arr[i + 1] !== undefined) {
  //         return arr[itemPos];
  //       }
  //     }
  //   }

  //   let longestItemInArray = 0;
  //   let indexOfLongestItemInArray = 0;

  //   arr.map((el, ind) => {
  //     if (el.length > longestItemInArray) {
  //       longestItemInArray = el.length;
  //       indexOfLongestItemInArray = ind;
  //     }
  //   });

  //   const re = new RegExp("[" + arr[indexOfLongestItemInArray] + "]+", "i");

  //   arr.map((item, ind) => {
  //     for (let index = 0; index < item.length; index++) {
  //       if (!re.test(item[index])) {
  //         itemPos = ind;
  //         break;
  //       }
  //     }
  //   });
  //   return arr[itemPos];
  // }

  // function calculateString(st: string) {
  //   const symbol = st.charAt(st.search(/[\*\-\+\/]/));
  //   const strArr = st.split(/[\*\-\+\/]/);
  //   const arr = [];
  //   const re = /[\d\.]+/g;
  //   strArr.map((val) => {
  //     arr.push(
  //       Array.from(val.matchAll(re)).reduce((acc, val) => (acc = `${acc}` + `${val[0]}`), 0)
  //     );
  //   });

  //   return eval(`${+arr[0]}${symbol}${+arr[1]}`).toFixed();
  // }

  // function calculateString(s) {
  //   return eval(s.replace(/[^\d+*/.-]/g, "")).toFixed();
  // }

  // function solve(arr: Array<number>) {
  //   let set = new Set();
  //   arr.map((el, i, ar) => {
  //     const slicedArr = ar.slice(i + 1);
  //     const maxNum = Math.max(...slicedArr);
  //     if (el > maxNum) {
  //       set.add(el);
  //     }
  //   });
  //   return [...set];
  // }

  // function autocomplete(input, dictionary){
  //   const clearedInput = input.replace(/[\W\d_]/g, "");

  //     if (clearedInput === "") {
  //       return [];
  //     }

  //     return dictionary.filter((val) => new RegExp(`^${clearedInput}`, "i").test(val) === true).slice(0, 5);
  // }

  // function selReverse(array: number[], length: number) {
  //   if (array.length <= length) {
  //     return array.reverse();
  //   }

  //   if (length === 0) {
  //     return array;
  //   }

  //   let result = [];
  //   let chunk = [];
  //   for (let i = 0; i < array.length; i += length) {
  //     chunk = array.slice(i, i + length).reverse();
  //     result.push(...chunk);
  //   }
  //   return result;
  // }

  // const multiplicationTable = (size: number) => {
  //   let chunk = [];
  //   let result = [];
  //   let count = size;

  //   while (count > 0) {
  //     chunk.unshift(count);
  //     count--;
  //   }
  //   result.push(chunk);

  //   for (let i = 2; i <= size; i++) {
  //     result.push(chunk.map((val) => val * i));
  //   }

  //   return result;
  // };

  // function biggest(nums) {
  //   return nums
  //     .map(String)
  //     .sort((a, b) => (b + a).localeCompare(a + b))
  //     .join("")
  //     .replace(/^0+/, "0");
  // }

  // const rotate = (matrix: number[][], direction: string) => {
  //   if (matrix.length === 1 && matrix[0].length === 1) {
  //     return matrix;
  //   }

  //   let result = [];
  //   const map = new Map();
  //   for (let i = 0; i < matrix.length; i++) {
  //     matrix[i].map((val, ind, arr) => {
  //       let curVal = direction === "clockwise" ? val : arr[arr.length - 1 - ind];
  //       if (i === 0) {
  //         map.set(ind, [curVal]);
  //       } else {
  //         map.set(ind, map.get(ind).concat([curVal]));
  //       }
  //     });
  //   }

  //   const iterator = map.values();
  //   for (let i = 0; i < map.size; i++) {
  //     const arrElement = iterator.next().value;
  //     let chunk = direction === "clockwise" ? [...arrElement].slice().reverse() : [...arrElement].slice();
  //     result.push(chunk);
  //   }

  //   return result;
  // };

  // function twoSum(numbers: number[], target: number) {
  //   let res = [];
  //   numbers.map((val1, ind1) => {
  //     numbers.map((val2, ind2) => {
  //       if (target - val1 === val2 && ind1 !== ind2 && res.length < 2) {
  //         res.push(ind1, ind2);
  //       }
  //     });
  //   });
  //   return res;
  // }

  // function matrixAddition(a: number[][], b: number[][]) {
  //   let chunk = [];
  //   const result = [];
  //   for (let i = 0; i < a.length; i++) {
  //     chunk = [];
  //     for (let j = 0; j < a[i].length; j++) {
  //       chunk.push(a[i][j] + b[i][j]);
  //     }
  //     result.push(chunk);
  //   }
  //   return result;
  // }

  // function arrange(s: number[]) {
  //   const result = [];
  //   const arrLength = s.length;
  //   for (let i = 0, j = arrLength - 1; i <= j; i++, j--) {
  //     if (i % 2 === 0) {
  //       result.push(s[i], s[j]);
  //     } else {
  //       result.push(s[j], s[i]);
  //     }
  //   }
  //   if (arrLength < result.length) {
  //     result.pop();
  //   }
  //   return result;
  // }

  // function abbreviate(string: string) {
  //   let result = [];
  //   const strArr = string.split(" ");

  //   strArr.map((el) => {
  //     const itemLength = el.replace(/[^A-Za-z]/g, "").length;
  //     if (itemLength < 4) {
  //       result.push(el);
  //     } else {
  //       const findNonLetters = el.match(/[-]/);
  //       if (findNonLetters?.index) {
  //         const splitter = findNonLetters?.[0];
  //         const ellSplited = el.split(splitter);
  //         let chunk = [];
  //         ellSplited.map((el2, id) => {
  //           splitterFunc(el2, el2.length, chunk, splitter);
  //           if (id === 0) chunk.push(splitter);
  //         });
  //         result.push(chunk.join(""));
  //       } else {
  //         splitterFunc(el, itemLength);
  //       }
  //     }
  //   });

  //   function splitterFunc(el, length, chunk, splitter) {
  //     const ellSplited = el.split("");
  //     ellSplited.splice(1, length - 2, `${length - 2}`);
  //     splitter ? chunk.push(ellSplited.join("")) : result.push(ellSplited.join(""));
  //   }

  //   return result.join(" ");
  // }

  // var find = /[a-z]{4,}/gi;
  // function replace(match) {
  //   return match[0] + (match.length - 2) + match[match.length - 1];
  // }
  // function abbreviate(string) {
  //   return string.replace(find, replace);
  // }

  // function travel(r: string, zipcode: string) {
  //   if (zipcode === "") return ":/";
  //   if (zipcode.length < 8) return `${zipcode}:/`;
  //   let steetArr = [];
  //   let houseArr = [];

  //   const filtredArr = r.split(",").filter((item) => item.match(zipcode));
  //   if (filtredArr.length === 0) return `${zipcode}:/`;

  //   filtredArr.map((item) => {
  //     const house = item.match(/^[\d]+/)?.[0];
  //     const withoutHouse = item.substring(house.length + 1);
  //     const withoutZip = withoutHouse.substring(0, withoutHouse.length - zipcode.length - 1);
  //     const withoutZipArr = withoutZip.split(" ");
  //     const len = withoutZipArr.length - 1;
  //     const town =
  //       withoutZipArr[len] === "Town"
  //         ? withoutZipArr[withoutZipArr.length - 2] + " " + withoutZipArr[len]
  //         : withoutZipArr[len];
  //     const street = withoutZip.substring(0, withoutZip.length - town.length - 1);

  //     steetArr.push(`${street} ${town}`);
  //     houseArr.push(house);
  //   });

  //   return `${zipcode}:${steetArr.join(",")}/${houseArr.join(",")}`;
  // }

  // const ad =
  //   "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432," +
  //   "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000," +
  //   "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000," +
  //   "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654," +
  //   "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000," +
  //   "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000," +
  //   "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654," +
  //   "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200," +
  //   "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001," +
  //   "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655," +
  //   "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655," +
  //   "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000";

  // const sortme = (courses: string[]) => {
  //   const result = [];
  //   let idArr = [];
  //   let nameArr = [];
  //   const sortedById = courses.sort((a, b) => a.slice(a.length - 4) - b.slice(b.length - 4));
  //   console.log("sortedById =>", sortedById);
  //   sortedById.map((item) => {
  //     const itemId = item.slice(item.length - 4);
  //     const itemName = item.slice(0, item.length - 4);
  //     idArr.push(itemId);
  //     nameArr.push(itemName);
  //   });

  //   for (let i = 0; i < idArr.length; i++) {
  //     if (idArr[i] === idArr[i + 1]) {
  //       continue;
  //     }
  //     const firstInd = idArr.indexOf(idArr[i]);
  //     const lastInd = idArr.lastIndexOf(idArr[i]);
  //     const nameSortArr = nameArr.slice(firstInd, lastInd + 1).sort((a, b) => a.localeCompare(b));
  //     nameSortArr.map((val) => result.push(`${val}${idArr[i]}`));
  //   }

  //   return result;
  // };
  // const sortme = (courses: string[]) => {
  //   return courses.sort((a, b) => a.slice(a.length - 4) - b.slice(b.length - 4));
  // };

  const binaryArrayToNumber = (arr: number[]) => {
    return parseInt(arr.join(""), 2);
    // console.log("arrstr =>", parseInt(arrstr, 2));
  };

  const test = () => {
    const test0 = binaryArrayToNumber([0, 0, 0, 1]); //, 1);
    const test1 = binaryArrayToNumber([0, 0, 1, 0]); //, 2);
    const test2 = binaryArrayToNumber([1, 1, 1, 1]); //, 15);
    const test3 = binaryArrayToNumber([0, 1, 1, 0]); //, 6);

    console.log({
      test0,
      test1,
      test2,
      test3,
      // test4,
      // test5,
      // test6,
      // test7,
      // test8,
      // test9,
      // test10,
      // test11,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          My playground
        </p>
        <div></div>
        <p className=" flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <button className={"bg-teal-200"} onClick={test}>
            Start Test
          </button>
        </p>
      </div>
    </main>
  );
}

// // Don't change PcDisplay
// const PcDisplay = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <p id="price">£{props.price}</p>
//       <ul>
//         <li>
//           <label>CPU</label> <span>{props.cpu}</span>
//         </li>
//         <li>
//           <label>RAM</label> <span>{props.ram}</span>
//         </li>
//         <li>
//           <label>SSD</label> <span>{props.ssd}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// const withPriceModel = (PcDisplay, increase, isProSpec) => {
//   return (props) => {
//     const defaultPrice = 50;
//     const newProps = {};
//     Object.assign(newProps, props);
//     if (isProSpec) {
//       newProps.price = defaultPrice + increase;
//     } else {
//       newProps.price = defaultPrice;
//     }
//     return <PcDisplay {...newProps} />;
//   };
// };

// // export default function BasicModel({ title = "Pro computer", price = 110, cpu = "i7", ram = "16gb", ssd = "512gb" }) {
// export default function BasicModel(props) {
//   // const props = { title: prop.title, cpu: prop.cpu, ram: prop.ram, ssd: prop.ssd };
//   const Component = withPriceModel(PcDisplay);
//   return <Component {...props} />;
// }

// export default function ProModel({ props = { title: "Pro computer",price: 110, cpu: "i7", ram: "16gb", ssd: "512gb" } }) {
//   const props = { title, cpu, ram, ssd };
//   const Component = withPriceModel(PcDisplay, 60, true);
//   return <Component {...props} />;
// }
