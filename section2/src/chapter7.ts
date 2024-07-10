// void
// void 타입은 아무런 값도 없음을 의미하는 타입입니다.
function func2(): void {
    console.log('hello');
}

// never 타입
// never 타입은 불가능을 의미하는 타입입니다.
function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error();
}
