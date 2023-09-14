---

date: 2013-9-13

category: 及时通信

tag:

  - flask-vue

---

# flask 和vue实现网页客服

1. 服务端安装(flask 组件安装)

   ```perl
   Flask==2.2.5
   Flask-SocketIO==5.2.0
   Flask-Cors
   Flask-SQLAlchemy
   ```

   

   

2. 随后我们简单写一个flask的入口启动文件 manage.py

   ```perl
   from flask import Flask
   from flask_sqlalchemy import SQLAlchemy
   import pymysql
   from flask import request,jsonify
   from flask_cors import CORS
   from flask_socketio import SocketIO,send,emit
   import urllib.parse
   
   pymysql.install_as_MySQLdb()
   
   app = Flask(__name__)
   
   CORS(app,cors_allowed_origins="*")
   
   socketio = SocketIO(app,cors_allowed_origins='*')
   
   @socketio.on('message')
   def handle_message(message):
       message = urllib.parse.unquote(message)
       print(message)
       send(message,broadcast=True)
   
   @socketio.on('connect', namespace='/chat')
   def test_connect():
       emit('my response', {'data': 'Connected'})
   
   @socketio.on('disconnect', namespace='/chat')
   def test_disconnect():
       print('Client disconnected')
   
   if __name__ == '__main__':
       socketio.run(app,debug=True,host="0.0.0.0",port=5050)
   ```

   

3. vue 2.6.11 前端安装依赖

   ```perl
   "socket.io-client": "^4.5.3",
   "vue-socket.io": "^3.0.10"
   ```

   ```perl
   #在入口文件main.js中引用
   import VueSocketIO from "vue-socket.io";
   import SocketIO from "socket.io-client";
   Vue.use(new VueSocketIO({
   connection: SocketIO("http://127.0.0.1:5050", {
   autoConnect: true // 自动连接
     }),
   extraHeaders: { "Access-Control-Allow-Origin": "*" }
   }));
   ```

   

4. 1

5. 1







