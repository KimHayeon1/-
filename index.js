const startBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')
const resetBtn = document.querySelector('#reset')
const hrs = document.querySelector('#hrs')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')

startBtn.addEventListener('click', startBtnHandle)
resetBtn.addEventListener('click', resetBtnHandle)
pauseBtn.addEventListener('click', pauseBtnHandle)

hrs.addEventListener('change', btnColor)
min.addEventListener('change', btnColor)
min.addEventListener('change', btnColor)

function btnColor(event) {
  console.log(event.currentTarget) 
}

function resetBtnHandle() {
  stopTimer()
  hrs.value ='00' 
  min.value ='00' 
  sec.value = '00'
  resetBtns()
}
function resetBtns() {
  pauseBtn.style.display = "none"
  startBtn.style.display = "inline-block"
  startBtn.className = "btn-navy"
  resetBtn.className = "btn-navy"
}
function pauseBtnHandle() {
  stopTimer()
  startBtn.className = "btn-blue"
  pauseBtn.style.display = "none"
  startBtn.style.display = "inline-block"
}

function stopTimer() {
  clearInterval(intervel);
}

// 숫자에 -들어가지 않게
function startBtnHandle() {
  if (hrs.value === '00' && min.value === '00' && sec.value === '00') {
    alert('1초 이상의 시간을 입력해주세요.')
  } else {
    resetBtn.className = "btn-rad"
    pauseBtn.style.display = "inline-block"
    startBtn.style.display = "none"
    start()
  }
}

function start() {
  if (sec.value !== '00') {
    secTimer()
  } else if (min.value !== '00') {
    minTimer()
  } else if (hrs.value !== '00') {
    hrsTimer()
  }
}
let intervel;
function secTimer() {
  intervel = setInterval(() => {
    sec.value = 숫자자릿수맞추기(parseInt(sec.value) - 1)
    if (sec.value === '00') {
      clearInterval(intervel);
      if (min.value !== '00') {
        minTimer()
      } else if (hrs.value !== '00') {
        hrsTimer()
      } else {
        resetBtns()
      }
    }
  }, 100);
}
function 숫자자릿수맞추기(val) {
  return val < 10 ? '0'+ val : val;
}
function minTimer() {
  sec.value = '60'
  min.value =  숫자자릿수맞추기(parseInt(min.value) - 1);
  secTimer()
}

function hrsTimer() {
  sec.value = '60'
  min.value = '59'
  hrs.value = 숫자자릿수맞추기(parseInt(hrs.value) - 1);
  secTimer()
}