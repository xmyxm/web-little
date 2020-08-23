# 一、git多账号配置

### 一、配置步骤

```bash
#git账号配置都是存放在.ssh目录下的，我们可以以下命令跳到目录看到具体文件，进入当前登录用户主目录下的.ssh目录
cd ~/.ssh
#创建阿里code对应的sshkey，命名为id_rsa_aliyun，密码 ******
ssh-keygen -t rsa -C email@qq.com
#各账号对应config管理
#Host code.aliyun.com

#   HostName code.aliyun.com

#   PreferredAuthentications publickey

#   IdentityFile ~/.ssh/id_rsa_codealiyun

#Host github.com

#   HostName github.com

#   PreferredAuthentications publickey

#   IdentityFile ~/.ssh/id_rsa_github

#Host dianpingoa.com

#   HostName dianpingoa.com

#   PreferredAuthentications publickey

#   IdentityFile ~/.ssh/id_rsa
```





