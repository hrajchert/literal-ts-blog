const literal2 = 2;
let number2 = 2;
literal2; // $ExpectType 2
number2; // $ExpectType number

type LiteralTypes = number | string | boolean;
// This works on 2.9, but not 2.8 or previous
export const lit = <L extends LiteralTypes> (x: L) => x;

let literal3 = lit(3);
literal3; // $ExpectType 3
