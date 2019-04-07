// setTimeout(() => {
//   test.innerHTML = '不好'
// }, 2000);

// 使用script发送请求
button.addEventListener('click', (e)=>{
  let script = document.createElement('script')
  script.src='/pay'
  document.body.appendChild(script)
  script.onload = function (e) {
    e.currentTarget.remove()
  }
  script.onerror = function (e) {
    console.log('fail')
    e.currentTarget.remove()
  }
})