// setTimeout(() => {
//   test.innerHTML = '不好'
// }, 2000);

// 使用img发送请求  只能get方式
button.addEventListener('click', (e)=>{
  let image = document.createElement('img')
  image.src = '/pay'
  image.onload = function () {
    alert('打钱成功')
    amount.innerText = amount.innerText - 1
  }
  image.onerror = function () {
    alert('打钱失败')
  }
})