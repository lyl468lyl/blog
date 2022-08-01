---
date: 2022-07-28
category: 前端
tag:
  - ReactNative
---

# MacOs 系统下搭建ReactNative环境

## 1. Xcode安装

Xcode版本需和MacOS版本匹配，对应关系及下载地址[参考](https://uovol.com/macos-xcode-version)

## 2. 安装watchman

```bash
# Homebrew设置国内镜像源
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

brew install watchman
```

如遇网络原因可用以下方式安装

```bash
unzip watchman-*-linux.zip
cd watchman-vYYYY.MM.DD.00-linux
sudo mkdir -p /usr/local/{bin,lib} /usr/local/var/run/watchman
sudo cp bin/* /usr/local/bin
sudo cp lib/* /usr/local/lib
sudo chmod 755 /usr/local/bin/watchman
sudo chmod 2777 /usr/local/var/run/watchman
```

[Homebrew国内镜像源文档参考](https://zhuanlan.zhihu.com/p/111014448)

## 3. CocoaPods安装

```bash
brew install cocoapods
# 或
sudo gem install cocoapods

pod --version
```

>如Ruby版本低则需要使用rvm更新版本
>
>安装rvm步骤如下
>
>```bash
>curl -L get.rvm.io | bash -s stable
>
>source ~/.bashrc
>
>source ~/.bash_profile
>```
>
>rvm使用
>
>```bash
># 查看rvm版本
>rvm -v
>
># 列出ruby可安装的版本信息
>rvm list known
>
># 下载对应版本
>rvm install 2.7.0
># 设置默认版本
>rvm use 2.7.0 --default
>```

## 4. 运行

运行时需注意 pods 中 Deployment Target中IOS版本与 Podfile 中保持一致

## 5. IOS打包

[参考](https://blog.csdn.net/lizujun123/article/details/103937668)
