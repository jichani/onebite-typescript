/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기한다.
 */

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.

// 타입을 보장해주어야 한다.

type Person = {
    name: string;
    age: number;
};

function func(value: number | string | Date | null | Person) {
    if (typeof value === 'number') {
        console.log(value.toFixed());
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다`);
    }
}

// instanceof 타입가드
// Instanceof는 내장 클래스 또는 직접 만든 클래스에만 사용이 가능한 연산입니다. 따라서 우리가 직접 만든 타입과 함께 사용할 수 없습니다.

// in 타입 가드
// 우리가 직접 만든 타입과 함께 사용하려면 다음과 같이 in 연산자를 이용해야 합니다.
