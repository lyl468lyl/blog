---

date: 2013-6-25

category: 虚拟机

tag:

  - vmvare

---

# vmvare的使用

#### 一. vmvare的下载

1. 下载地址:

   目前服务器安装的是:

   ```perl
   https://download3.vmware.com/software/WKST-1623-LX-New/VMware-Workstation-Full-16.2.3-19376536.x86_64.bundle
   ```

   各个版本

   ```perl
   # VMware Workstation Pro 16
   https://download3.vmware.com/software/WKST-1623-WIN-New/VMware-workstation-full-16.2.3-19376536.exe
   https://download3.vmware.com/software/wkst/file/VMware-workstation-full-16.2.2-19200509.exe
   https://download3.vmware.com/software/wkst/file/VMware-workstation-full-16.2.1-18811642.exe
   https://download3.vmware.com/software/wkst/file/VMware-workstation-full-16.2.0-18760230.exe
   https://download3.vmware.com/software/wkst/file/VMware-workstation-full-16.1.2-17966106.exe
   https://download3.vmware.com/software/wkst/file/VMware-workstation-full-16.1.1-17801498.exe
   https://download3.vmware.com/software/wkst/file/VMware-workstation-full-16.1.0-17198959.exe
   
   # VMware Workstation Pro 15
   https://download3.vmware.com/software/wkst/file/VMware-workstation-full-15.5.7-17171714.exe
   https://download3.vmware.com/software/wkst/file/VMware-workstation-full-15.5.6-16341506.exe
   https://download3.vmware.com/software/wkst/file/VMware-workstation-full-15.5.0-14665864.exe
   https://download3.vmware.com/software/wkst/file/VMware-workstation-full-15.1.0-13591040.exe
   
   # VMware Workstation Pro 14
   https://download3.vmware.com/software/wkst/file/VMware-workstation-full-14.1.8-14921873.exe
   https://download3.vmware.com/software/wkst/file/VMware-workstation-full-14.1.7-12989993.exe
   https://download3.vmware.com/software/wkst/file/VMware-workstation-full-14.1.0-7370693.exe
   
   # 以上是Windows用户下载地址
   # 以下是Linux用户下载地址
   # 下载之后，先赋予可运行的权限，然后以管理员身份运行安装即可，命令如下：
   sudo chmod +x VMware-Workstation-Full-16.2.3-19376536.x86_64.bundle
   sudo ./VMware-Workstation-Full-16.2.3-19376536.x86_64.bundle
   
   # VMware Workstation Pro 16
   https://download3.vmware.com/software/WKST-1623-LX-New/VMware-Workstation-Full-16.2.3-19376536.x86_64.bundle
   https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-16.2.1-18811642.x86_64.bundle
   https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-16.2.0-18760230.x86_64.bundle
   https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-16.1.2-17966106.x86_64.bundle
   https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-16.1.1-17801498.x86_64.bundle
   https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-16.1.0-17198959.x86_64.bundle
   
   # VMware Workstation Pro 15
   https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-15.5.7-17171714.x86_64.bundle
   https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-15.5.6-16341506.x86_64.bundle
   https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-15.5.0-14665864.x86_64.bundle
   https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-15.1.0-13591040.x86_64.bundle
   
   # VMware Workstation Pro 14
   https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-14.1.7-12989993.x86_64.bundle
   https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-14.1.6-12368378.x86_64.bundle
   https://download3.vmware.com/software/wkst/file/VMware-Workstation-Full-14.1.0-7370693.x86_64.bundle
   
   ```

   

2. 安装vmvare

   ```perl
   #查看安装vmvare产品
   sudo vmware-installer --list-products
   
   #卸载vmware
   #sudo vmware-installer --uninstall-product=<product_name>
   sudo vmware-installer --uninstall-product=vmware-workstation
   # 赋予权限
   chmod +x VMware-Workstation-Full-XX.X.X-XXXXXXX.x86_64.bundle
   #运行以下命令以启动安装程序
   sudo ./VMware-Workstation-Full-XX.X.X-XXXXXXX.x86_64.bundle
   
   ```

   

3. ubuntu命令启动虚拟机

4. 查看启动的虚拟机

   ```perl
   vmrun list
   /home/data/liyulong/Ubuntu 64-1.vmx  #测试用的erpnext,ip地址192.168.50.23
   /home/data/liyulong1/Ubuntu 64-2.vmx #生产用的erpnext,ip地址192.168.50.73
   
   
   ```

   

   ```perl
   vmrun start  "/home/sj/vmware/Ubuntu/Ubuntu.vmx" nogui
   ```

   

   

5. 要启动X11显示服务器

   ```perl
   #启动X11
   startx
   #确保DISPLAY环境变量正确设置。运行以下命令来检查DISPLAY值
   echo $DISPLAY
   #正确的输出应该类似于 ":0" 或 "localhost:0"。
   export DISPLAY=:0
   #关闭x11
   ps aux | grep Xorg
   kill <PID>
   ```
   

   
6. vmvare 硬盘扩展

   ```perl
   # 查看磁盘空间情况
   df -h
   #1.打开终端并以管理员身份运行parted命令
   sudo parted /dev/sda
   
   #2. print 打印分区情况
   print
   
   Number  Start   End     Size    Type      File system  Flags
    1      1049kB  538MB   537MB   primary   fat32        boot
    2      539MB   80.0GB  79.5GB  extended
    5      539MB   80.0GB  79.5GB  logical   ext4
   #3. 调整分区情况
   resizepart 2
   #输入扩展硬盘空间大小:80G
   resizepart 5
   #输入扩展硬盘空间大小:80G
   #输入quit命令退出parted
   quit 
   
   #启动Ubuntu虚拟机，并使用以下命令来调整文件系统大小
   sudo resize2fs /dev/sda5
   
   #df -h命令来验证根分区的大小是否已扩展到80GB。
   
   
   
   
   
   ```

   

   ```perl
   #启动X11
   startx
   #确保DISPLAY环境变量正确设置。运行以下命令来检查DISPLAY值
   echo $DISPLAY
   #正确的输出应该类似于 ":0" 或 "localhost:0"。
   export DISPLAY=:0
   #关闭x11
   ps aux | grep Xorg
   kill <PID>
   
   ```

   


