const literal2 = 2;
let number2 = 2;
literal2; // $E xpectType 2
number2; // $ExpectType number

const literalFoo = 'foo';
let stringFoo = 'foo';
literalFoo; // $ExpectType "foo"
stringFoo; // $ExpectType string

const onlyAccept2 = (n: 2) => n;

onlyAccept2(literal2);
// $ExpectError
onlyAccept2(number2);
