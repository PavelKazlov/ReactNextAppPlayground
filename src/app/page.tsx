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

  function spinAround(turns: string[]) {
    let countBallance = 0;

    if (turns.length === 0) {
      return 0;
    } else {
      const result = turns.reduce(
        (acc, rotationType) => (
          (acc[rotationType] =
            rotationType === "right" ? ++countBallance : --countBallance),
          acc
        ),
        {}
      );

      let count = [];
      Object.keys(result).forEach((key) => {
        count.push(Math.abs(result[key]));
      });

      return Math.floor(Math.max(...count) / 4);
    }
  }

  // test1 - 0
  // test2 - 2
  // test3 - 1
  // test4 - 0
  // test5 - 0
  // test6 - 0
  // test7 - 1
  // test8 - 1
  // test9 - 0
  // test10 - 10
  // test11 - 10
  // test12 - 1
  const test = () => {
    const test1 = spinAround(["left", "right", "left", "right"]); // 0);
    const test2 = spinAround([
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
    ]); // 2);
    const test3 = spinAround(["left", "left", "left", "left"]); // 1);
    const test4 = spinAround([]); // 0);
    const test5 = spinAround(["left"]); // 0);
    const test6 = spinAround(["right"]); // 0);
    const test7 = spinAround([
      "right",
      "right",
      "right",
      "left",
      "right",
      "right",
    ]); // 1);
    // left 12
    // right 8
    const test8 = spinAround([
      "left",
      "left",
      "right",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "right",
      "left",
      "left",
      "right",
      "right",
      "right",
      "right",
      "left",
      "left",
      "right",
      "right",
    ]); //1);
    const test9 = spinAround([
      "right",
      "left",
      "left",
      "right",
      "left",
      "left",
      "right",
      "left",
      "right",
      "right",
      "left",
      "left",
      "right",
      "right",
      "right",
      "left",
      "left",
      "right",
    ]); // 0);
    const test10 = spinAround([
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
    ]); // 10);
    const test11 = spinAround([
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
      "left",
    ]); // 10);

    const test12 = spinAround(["left", "left", "left", "left", "left"]); // ➞ 1

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
      test12,
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
