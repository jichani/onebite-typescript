// any 타입
// 타입 검사를 받지 않는 특수한 치트키

// let anyVar = 10;
// anyVar = "hello"; // 오류 발생!

let anyVar: any = 10;
anyVar = 'hello';

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

// any는 최대한 사용하지 마세요
// 우리가 아까 작성한 다음과 같은 코드를 컴파일 하거나 ts-node로 실행해보면 런타임 오류가 발생합니다.

// unknown 타입
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없습니다.

if (typeof unknownVar === 'number') {
    // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
    unknownVar * 2;
}
