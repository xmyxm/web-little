# 一、linux常用指令

### 一、基础常见指令

```bash
#1.显示日期指令

date

#2.显示当前年份和当月日历

cal

#3.显示整年的日历

cal 2020

#4.显示 2020年10月的日历

cal 10 2020

#5.输入 bc 回车后会自动换行 此时可以输入任何计算方式并回车得到结果,退出计算器指令 :quit 回车即可

bc
1+1
2
:quit

#6.命令补全 tab 快捷键

tab

#7.结束当前程序 Ctrl + c 快捷键

Ctrl + c 

#8.键盘输入结束 Ctrl + d 快捷键 它可以用来取代exit

Ctrl + d

#9.查看当前文件所在目录

pwd

#10.建立新test目录

mkdir test

#11.删除test目录

rmdir test

#12.删除多层嵌套的空目录

rmdir -p test/test1/test2/test3

#13.删除文件夹

rm -rf demo

#14.删除以demo开头的文件

rm -rf demo*

#15.观察文件类型, 如下：file 告诉我们是文本文档

file .bashrc

#16.新建档案 touch

touch app.js

```

### 二、关机命令
```bash
#1.10秒后关机

shutdown -t 10

#2.不要真关机，只是发送警告信息出去

shutdown -k

#3.将系统服务停掉之后就重新启动(常用)

shutdown -r 

#4.将系统服务停掉以后就立即关机(常用)

shutdown -h

#5.不经过init程序直接以 shutdown 的功能来关机

shutdown -n

#6.关机并开机之后，强制略过 fsck 的磁盘检查

shutdown -f

#7.系统重新启动之后，强制 fsck 的磁盘检查

shutdown -F

#8.取消已在进行的 shutdown 指令内容

shutdown -c

#9.10分钟之后关机

shutdown -h 10

#10.立刻关机

shutdown -h now

#11.设定8点25分立刻关机

shutdown -h 8:25

```


### 三、档案与目录展示
```bash
#1.列出全部档案，包含隐藏档案(.开头的档案)

ls -a

#2.列出全部档案，但不包括 .与..这两个目录

ls -A

#3.直接列出结果不排序，ls命令默认按照文件名排序

ls -f

#4.将把档案文件大小以 GB 和 KB 的形式列出来 

ls -h

#5.联同子目录一起列出来

ls -R

#6.依时间来排序，而不是文档名

ls -t

```


### 四、复制
```bash
#1.将 a,b,c 三个文件复制到 /data/app 目录下

cp [options] a.txt b.txt c.txt /data/app

#2.参数 -r 为递归持续复制，用于文件目录的复制，使用频率非常高

-r

#3.参数 -a 如果想将档案的所有特性(比如档案建立时间)都一起复制过来

-a

#4.复制etc目录下的文件到tmp目录下

cp /etc/  /tmp

```

### 五、移动档案和目录，或更名
```bash
#1.若存在mvtest1目录则为移动 mvtest文件到 mvtest1 ；若存在mvtest1文件，则会报错；若不存在mvtest1则为修改mvtest 文件名为 mvtest1

cp mv mvtest mvtest1 

#2.若mvtest1文件存在会强制覆盖

mv -f mvtest mvtest1

#3.若mvtest1文件存在会询问是否覆盖

mv -i mvtest mvtest1

```


### 六、常用vim命令
```bash
#1.使用vim编辑器打开app.js文件

vim app.js

#2.光标处开始编辑内容

i

#3.结束编辑 快捷键 esc 键

esc

#4.保存并退出

:wq

#5.退出不保存

:q!

#6.强行退出编辑，即使文件已更改

:qa!

#6.普通退出

:quit

```

### 七、文件夹权限状态
```bash
#1.设置demo文件夹满权限，权限标识为 drwxrwxrwx

chmod -R 777  demo

#2.设置demo文件夹仅当前用户读写及命令权限，权限标识为 drwxr-xxr-x ：d表示文件夹；第一组rwx表示当前用户对应文件夹的权限；第二组rwx 表示和当前用户同组的用户对文件夹的权限；第三组rwx 表示和当前用户非同组的用户对此文件夹权限

chmod -R 755

#3.查看当前目录下的所有文件权限

ls -al

#4.查看以 demo 命名的所有文件权限

ls -al|grep demo

```

