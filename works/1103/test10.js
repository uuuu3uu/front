'use strict';

// 오늘날짜 전역변수로 생성
const today = new Date();
const year = today.getFullYear();    // 연도4자리
const month = today.getMonth() +1;   // 월(기존월보다 1자리 작다) 그래서 +1해줌
const date = today.getDate(); //일
const hour = today.getHours(); //시
const minute = today.getMinutes(); // 분
const second = today.getSeconds(); // 초
const yymmdd = year + "-" + month +"-"+ date +"-"+ hour +":"+ minute +":"+ second;

// 시스템날짜 가져와서 폼에 출력하기
function dateBring() {
  document.getElementById("startDate").value = yymmdd;
}

// 날짜비교함수
function compareDate() {
  let start = document.getElementById("startDate").value;
  let end = document.getElementById("endDate").value;

  const startDate = new Date(start);    // '2022-2-5'
  const endtDate = new Date(end);

  let result;

  if(isameDay(startDate, endtDate)) {
    result = "입력된 날짜는 같습니다"
  }
  else {
    result = "입력된 날짜는 다릅니다"
  }
  document.getElementById("demo").innerHTML = result;

}

// ==- (완전일치(타입))
function isameDay(startDate, endtDate) {
  return  startDate.getFullYear() === endtDate.getFullYear() &&
          startDate.getMonth === endtDate.getMonth() &&; 
          startDate.getDate=== endtDate.getDate(); 
}

function compareDate2() {
  let start = document.getElementById("startDate").value;
  let end = document.getElementById("endDate").value;

  const startDate = new Date(start);    // '2022-2-5'
  const endtDate = new Date(end);
  
  // 날짜형식데이터를 시간(1/1000초)로 바꿔서 연산처리한다.
  let elapsedTime = endtDate.getTime() - start.getTime();
  let strDate = elapsedTime / (60*60*24*1000); // 날(day)수로 변경 // gettime이 천분의 일초로 들어오기때문에 이런 계산법
  strDate = strDate.toFixed(0);

  document.getElementById("demo").innerHTML = strDate;
}
