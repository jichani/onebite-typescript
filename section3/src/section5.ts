/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// any 타입의 진화
let d;
d = 10;
d.toFixed();

d = "string";
d.toUpperCase();

// const는 리터럴 타입으로 추론됨
const num = 10;
const str = "hello";

// Union 타입으로 추론됨
let arr = [1, "string"];

// 타입넓히기로 추론을 한다.
