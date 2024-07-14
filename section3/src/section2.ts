// unknown 타입 (전체 집합)
// unknown 타입은 타입 계층도의 최 상단에 위치합니다.

// let a: unknown = 1; // number -> unknown
// let b: unknown = 'hello'; // string -> unknown
// let c: unknown = true; // boolean -> unknown
// let d: unknown = null; // null -> unknown
// let e: unknown = undefined; // undefined -> unknown
// let f: unknown = []; // Array -> unknown
// let g: unknown = {}; // Object -> unknown
// let h: unknown = () => {}; // Function -> unknown

// 다운캐스팅이 가능하다.

let unknownValue: unknown;

// let a: number = unknownValue;
// 오류 : unknown 타입은 number 타입에 할당할 수 없습니다.

// never 타입 (공집합 타입)
// never 타입은 타입 계층도에서 가장 아래에 위치합니다.
function errorFunc(): never {
    throw new Error();
}

// let neverVar: never;

// void 타입
function noReturnFunc(): void {
    console.log('hi');
}

function noReturnFuncA(): void {
    return undefined;
}

function noReturnFuncB(): void {
    return;
}

function noReturnFuncC(): void {}

let voidVar: void;

voidVar = undefined; // undefined -> void (ok)

let neverVar: never;
// voidVar = neverVar; // never -> void (ok)

// any 타입 (치트키)
// any 타입은 사실상 타입 계층도를 완전히 무시합니다. any는 일종의 치트키같은 타입입니다.

let anyValue: any;

let num: number = anyValue; // any -> number (다운 캐스트)
let str: string = anyValue; // any -> string (다운 캐스트)
let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

anyValue = num; // number -> any (업 캐스트)
anyValue = str; // string -> any (업 캐스트)
anyValue = bool; // boolean -> any (업 캐스트)
