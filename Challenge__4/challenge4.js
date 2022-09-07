// 크리스마스까지 남은 시간 보여주기
// new Date()를 사용하면 밀리세컨드 단위로 나타낸다. 1초 -> 1000밀리세컨드

const Clock = document.querySelector("#clock");

function ShowClock() {
  const date = new Date();
  const christmas = new Date("2022-12-25");
  const remain = christmas - date;
  const remainDay = Math.floor(remain / (1000 * 60 * 60 * 24)); // 시간단위로 바꾼 후 24시간을 곱해 하루 단위로 나눔
  const remainMin = Math.floor((remain / (1000 * 60)) % 60); // 분단위로 바꾼 후 60분으로 나누고 나머지
  const remainSec = Math.floor((remain / 1000) % 60); // 초단위로 바꾼 후 60초으로 나누고 나머지
  const remainHour = Math.floor((remain / (1000 * 60 * 60)) % 24); // 시간단위로 바꾼 후 24시간으로 나눈 뒤 나머지

  Clock.innerText = `${remainDay}d ${remainHour}h ${remainMin}m ${remainSec}s`;
}

ShowClock();
setInterval(ShowClock, 1000);
