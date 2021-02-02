this.addEventListener('message', function(e) { // 消息监听
    // console.log(e);
    this.postMessage('you said:' + e.data)
  })
  