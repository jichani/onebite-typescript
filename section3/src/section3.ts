// 객체 타입의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // ✅ OK
// num2 = num1; // ❌ NO

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: '기린',
    color: 'yellow',
};

let dog: Dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
};

animal = dog; // ✅ OK
//   dog = animal; // ❌ NO

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    skill: 'reactjs',
};

book = programmingBook; // ✅ OK
// programmingBook = book; // ❌ NO

// 초과 프로퍼티 검사
// let book2: Book = { // 오류 발생
//     name: "한 입 크기로 잘라먹는 리액트",
//     price: 33000,
//     skill: "reactjs",
//   };

let book3: Book = programmingBook; // 앞서 만들어둔 변수
