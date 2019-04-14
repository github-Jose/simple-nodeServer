// setTimeout(() => {
//   test.innerHTML = '不好'
// }, 2000);

// 使用script发送请求 
button.addEventListener('click', (e)=>{
  let script = document.createElement('script')
  let functionName = 'liyubing' + parseInt(Math.random() * 10000, 10)
  script.src='http://jack.com:8001/pay?callback=' + functionName
  document.body.appendChild(script)
  window[functionName] = function (result) {
  if (result === 'success') {
  amount.innerText = amount.innerText - 1
  } else {
  
  }
  }
  script.onload = function (e) {
  e.currentTarget.remove()
  delete window[functionName]
  }
  script.onerror = function (e) {
  console.log('fail')
  delete window[functionName]
  e.currentTarget.remove()
  }
  })