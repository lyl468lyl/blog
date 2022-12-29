---
date: 2020-12-14
category: 开发者手册
tag:
  - wsl
---
# WSL开发

## 相关博客

1. [Linux系统各发行版换国内yum或apt源，加速软件下载更新](https://zhuanlan.zhihu.com/p/122214146)

> [微软官方文档](https://learn.microsoft.com/zh-cn/windows/wsl/basic-commands)
## 常用命令

```bash
# 列出可用的 Linux 发行版
wsl --list --online

# 列出已安装的 Linux 发行版
wsl --list --verbose

# 将 WSL 版本设置为 1 或 2
wsl --set-version <distribution name> <versionNumber>

# 设置默认 WSL 版本
wsl --set-default-version <Version>

# 设置默认 Linux 发行版
wsl --set-default <Distribution Name>

# 注销或卸载 Linux 发行版
wsl --unregister <DistributionName>
```

## VsCode的使用

1. vim ~/.bashrc添加环境变量

    ```bash
    alias code="/mnt/d/code/Microsoft\ VS\ Code/Code.exe"
    ```

1. 使设置生效

    ```bash
    source ~/.bashrc
    ```
