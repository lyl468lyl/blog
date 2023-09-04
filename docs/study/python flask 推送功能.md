# python flask 推送功能

python代码

sse.py

```perl
# -*- coding: utf-8 -*-
# @Time    : 2022/6/8 19:01
# @Author  : dzg
from flask import Flask, render_template
from flask_sse import sse
from flask_cors import CORS

app = Flask(__name__)
app.config["REDIS_URL"] = "redis://:123456@192.168.50.230"
app.register_blueprint(sse, url_prefix="/stream")
CORS(app, resources={r"/stream/*": {"origins": "*"}})


# @app.route('/')
# def index():
#     return render_template("index.html")


@app.route('/test')
def test():
    sse.publish({"message": {"name": "dzg111", "age": "16"}}, type="sseTest")
    return "Message send"


if __name__ == '__main__':
    app.run()
```

index.html

```perl

<!DOCTYPE html>
<html lang="en">
<head>
    <title>flask-sse test</title>
</head>
<body>
    <h1>flask-sse test</h1>
</body>
<script>
    // 创建 EventSource 对象连接服务器
    var source = new EventSource("http://192.168.50.230:5000/stream")
    // 服务器发送信息到客户端时，会触发
    source.addEventListener('sseTest', function(event){
        var res_data = JSON.parse(event.data);
        console.log(res_data);
      }, false);
    // 连接异常时会触发 error 事件并自动重连
    source.addEventListener('error', function(event) {
    if (event.target.readyState === EventSource.CLOSED) {
          console.log('Disconnected');
        } else if (event.target.readyState === EventSource.CONNECTING) {
          console.log('Connecting...');
        }
    }, false);
</script>
</html>
```

