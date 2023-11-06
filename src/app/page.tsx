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

  function humanReadable(seconds: number) {
    const HH = Math.floor(seconds / 3600);
    const MM = Math.floor((seconds - HH * 3600) / 60);
    const SS = Math.floor(seconds - HH * 3600 - MM * 60);

    return [HH, MM, SS].reduce((acc, el, i) => {
      const curTimeValLength = el.toString().split("").length;
      return (acc = acc.concat(
        i < 2 && curTimeValLength === 1
          ? `0${el}:`
          : i < 2 && curTimeValLength > 1
          ? `${el}:`
          : curTimeValLength === 1
          ? `0${el}`
          : `${el}`
      ));
    }, "");
    // console.log({ HH, MM, SS });
    // console.log("HH.length =>", HH.toString().split("").length);

    // return `${HH}:${MM}:${SS}`;

    // const date = new Date(seconds);
    // return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  }

  const test = () => {
    const test1 = humanReadable(9020); //, "02:30:20 ");
    const test2 = humanReadable(0); //, "00:00:00 ");
    const test3 = humanReadable(59); //, " 00:00:59");
    const test4 = humanReadable(60); //, " 00:01:00");
    const test5 = humanReadable(90); //, "00:01:30 ");
    const test6 = humanReadable(3599); //, " 00:59:59");
    const test7 = humanReadable(3600); //, " 01:00:00");
    const test8 = humanReadable(45296); //, " 12:34:56");
    const test9 = humanReadable(86399); //, "23:59:59 ");
    const test10 = humanReadable(86400); //, " 24:00:00");
    const test11 = humanReadable(3599999); //, " 99:59:59");

    console.log({
      test1,
      test2,
      test3,
      test4,
      test5,
      test6,
      test7,
      test8,
      test9,
      test10,
      test11,
    });
  };
  // "Nananananananananananananananana Batman!" --> "####################################man!"
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
