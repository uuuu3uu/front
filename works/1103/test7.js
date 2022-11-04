'use strict';

function regexCheck() {
  // 정규표현식을 만든다.
  const regex1 = /atom/gm;    // 'atom'이라는 문자열이 포함되어 있다면 true, 없으면 false
  const regex2 = /mbc|kbs|sbs/g;   // 정규식에서의 or : | mbc또는kbs또는sbs문자열을 포함하고 있다면~
  const regex3 = /홍길(동|순)/g;   // 홍길동, 홍길순이 있느냐 물어봄.
  const regex4 = /[a-z]/g;      // 영문 소문자를 포함하고 있느냐
  const regex5 = /[^a-z]/g;     // 영문 소문자 외에 다른문자를 포함하고 있는지
  const regex6 = /[A-Z]/g;     // 영문 대문를 포함하고 있느냐
  const regex7 = /[^A-Z]/g;     // 영문 대문자외에 다른문자를 포함하고 있는지
  const regex8 = /[0-9]/g;     // 숫자를 포함하고 있느냐
  const regex9 = /[^0-9]/g;     // 숫자 외 다른문자를 포함하고 있느냐
  const regex10 = /[가-힣]/g;     // 한글을 포함하고 있느냐
  const regex11 = /[a-zA-Z0-9]/g;     // 영문 '대/소문자'나 '숫자'가 포함되어 있느냐
  const regex12 = /[^a-zA-Z0-9]/g;     // 영문 '대/소문자'나 '숫자'외에 다른문자가 포함되어 있는지
  const regex13 = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*[가-힣])(?!.*[~`!@#$%^&*()\[\]{}'"\-+=<>?,./])(?!.*[\u0000-\u001F|\u0080-\u10FF|\u1200-\u312F|\u3190-\uABFF|\uD7A4-\uFFFF|\u3130-\u318F])/g;
                  // 영문 '대/소문자,숫자' 모두 입력받아야한다
  const regex14 = /\./g;    // 문자열중에서 '.'이 있는가?
  const regex15 = /\d./g;    // 숫자를 포함하고 있느냐
  const regex16 = /\D./g;    // 숫자를 포함하고 있지 않느냐
  const regex17 = /\w./g;    // 영문/숫자/밑줄_까지 포함하고 있느냐?
  const regex18 = /\W./g;    // 영문/숫자/밑줄_까지 포함하고 있지않느냐
  const regex19 = /\s./g;    // 문장안에 공백 또는 탭을 포함하고 있느냐

  // 와일드카드 : 1개글자에 대한 포함유무는 (?), 복수개 문자의 포함유무 (+,*)
  const regex20 = /홍길동?안녕/g;    // '홍길동'의 '동' 1개 글자의 포함 여부(있어도 되고 없어도 된다)
  const regex21 = /홍길동+안녕/g;    // '홍길동'의 '동' 1개이상 글자의 포함 여부(있어도 되고 없어도 된다)
  const regex22 = /홍길동*안녕/g;    // '홍길동'의 '동' 0개이상 글자의 포함 여부(있어도 되고 없어도 된다)
  // d{2,3}, [a-z]{2,20}->소문자가 2글자에서 20글자까지 





  let content = document.getElementById("content").value;

  if(content.trim() == "") {
    alert("문자열을 입력하세요");
    return false;
  }
  // else if(content.match(regex1)) {
  //   alert("1. atom문자열을 포함하고 있지 않습니다.");
  //   return false;
  // }
  // else if(!content.match(regex2)) {
  //   alert("2. mbc/kbs/sbs 문자열을 포함하고 있지 않습니다.")
  //   return false;
  // }
  // else if(!content.match(regex3)) {
  //   alert("3. 홍길동 또는 홍길순 문자열을 포함하고 있지 않습니다.")
  //   return false;
  // }
  // else if(!regex4.test(content)) {
  //   alert("4. 영문 소문자를 포함하고 있지 않습니다")
  //   return false;
  // }
  // else if(regex5.test(content)) {
  //   alert("5. 영문 소문자외 다른문자를 포함하고 있습니다")
  //   return false;
  // }
  // else if(!regex14.test(content)) {
  //   alert("14. '.'이 포함되어 있지 않습니다")
  //   return false;
  // }
    else if(!regex20.test(content)) {
      alert("14. '.'이 포함되어 있지 않습니다")
      return false;
    }
  

  alert("작업끝");
  document.getElementById("content").focus();
}