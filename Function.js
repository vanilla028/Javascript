// 함수
function greetings(){
    console.log("Hello, I'm Rachel!")
    return;
}

// 함수 실행
greetings() // Hello, I'm Rachel!

// 외부에서 데이터 받기
function greetings(param){
    console.log(param);
    return;
}

greetings('How are you?')