// 객체 리터럴 타입
// let user: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "이정환",
// };

// 선택적 프로퍼티(Optional Property)
// let user: {
//   id?: number;
//   name: string;
// } = {
//   id: 1,
//   name: "이정환",
// };

// user = {
//   name: "홍길동",
// };

// 읽기전용 프로퍼티(Readonly Property)
let user: {
  id?: number;
  readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
  id: 1,
  name: "이정환",
};

// user.name = "dskfd"; // 오류 발생
