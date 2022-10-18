---
date: 2022-10-09
category: 开发者手册
tag:
  - windows
---
# Windows相关

## 查看端口被占用情况并停止服务

```bash
# 查看占用端口的进程
netstat -ano

netstat -aon|findstr "8080"

# 查看是哪个进程或者程序占用了 8081 端口
tasklist|findstr "4912"

# 结束进程（强制（/F参数）杀死 pid 为 4912 的所有进程包括子进程（/T参数）
taskkill /T /F /PID 4912
```
