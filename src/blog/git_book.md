# 一、git命令笔记

### 一、git基础命令
```
    1. 克隆远程服务器代码：git clone git@github.com:alexmingoia/koa-router.git
    2. 提交修改到暂存区：git add .  或单个文件提交：git add src/app.js
    3. 取消提交到暂存区：git reset HEAD . 或单个文件取消：git reset HEAD app.js
    4. 撤销刚刚本地修改的文件：git checkout . 或单个文件取消：git checkout -- app.js
    5. 暂存区文件移动至本地仓库：git commit -m 'update msg' 
    6. 代码提交到仓库快捷操作：git commit -a -m  'add msg' 或 git commit -am 'add msg'
    7. 列出所有远程主机名：git remote
    8. 查看远程主机的网址：git remote -v
    9. 查看origin主机的详细信息：git remote show origin
    10. 添加远程主机：git remote add origin-v2
    11. 删除远程主机：git remote rm origin-v2
    12. 远程主机改名: git remote rename  origin origin-newname
    13. 查看所有本地分支：git branch 查看所有远程分支：git branch -r 查看所有本地分支和远程分支列表：git branch -a
    14. 创建新分支：git checkout -b cxmf-20200823
    15. 切换分支：git checkout master
    16. 查看分支日志：git log --pretty=oneline --abbrev-commit --graph
    17. 删除本地当前分支：git branch -d test
    18. 查看项目仓库地址：git remote -v
    19. 初始化一个.git管理文件：git init
    20. 添加仓库地址：git remote add origin ssh://git@git.dianpingoa.com/f2e/cocktail-framework-node.git
    21. 设置远端仓库地址（执行这个命令必须先有配置的仓库地址，不然直接执行会报错，提示找不到 origin ）：git remote set-url origin ssh://git@git.dianpingoa.com/f2e/cocktail-framework-node.git
    22. 放弃 新增、删除文件：git clean -df
```

### 二、git常用命令
#### git 应急小救星，我们经常在本地开发一半需要临时切换到其它分支修复bug，此时又不想提交本地未完成的开发，那我们可以像如下这样：
```
1. 已修改和已暂存状态的变更保存在stash栈上：git stash
2. 查看stash栈：git stash list
3. 应用该次变更：git stash apply stash@{2} 
4. 让该次变更从list出栈：git stash drop stash@{2}
5. 全部出栈：git stash pop
```

#### 有时候我们commit 完了才发现漏掉了几个文件没有加，或者提交信息写错了。想要撤消刚才的提交操作，可以使用 --amend 选项重新提交
```
git commit -m '第一次commit到本地'
git add app.js
git commit --amend
```
#### 第一次commit 后修改文件补充提交就可使用如上命令。此时只会有一次commit记录，其实这里使用 --amend 命令后commit到本地只有一条记录和最新的commit备注。

#### git revert通过创建一个新的commit来取消之前的某个commit。因为它不会重写commit的提交历史，所以是回滚代码的安全方式。举个例子，下面的命令的命令会找到倒数第二个commit，然后创建一个新的commit来回滚那次提交的改动.

### 三、查看config
```
1. 查看系统config：git config --system --list
2. 查看当前用户（global）配置：git config --global  --list
3. 查看当前仓库配置信息：git config --local  --list
```

### 四、设置config
```
设置全局配置：git config --global user.name "myname"
设置全局配置：git config --global user.email  "test@gmail.com"
设置项目全局配置，提交代码优先读取项目配置：git config user.name "myname"
设置项目全局配置，提交代码优先读取项目配置：git config user.email  "test@gmail.com"
```

### 五、git中回退到某个版本并提交到远程分支
```
回退到上个版本：git reset --hard HEAD^
回退到前3次提交之前，以此类推，回退到n次提交之前：git reset --hard HEAD~3
回退到任意一次commit提交历史：git reset --hard commit_id ，通过git log 查看提交历史，在 commit_id 之后的提交都会作废  git reset --hard 239afed0857cc2e77c17c01014077808619af64d
提交回退的版本 (注：强制提交后，当前版本后面的提交版本将会删掉！，不使用强制提交会出错)：git push -f  或者 git push -f -u origin master


### 六、git 分支删除
```
删除本地分支：git branch -d BranchName
强制删除命令：git branch -D BranchName
删除远程分支：git push origin --delete BranchName
删除本地和远程分支：git branch -r -d origin/cxf-20200823
git撤销本地所有修改（新增、删除、修改）：git checkout . && git clean -xdf
```

### 七、撤销 commit
```
git reset --soft HEAD^ ：HEAD^的意思是上一个版本，也可以写成HEAD~1，如果你进行了2次commit，想都撤回，可以使用HEAD~2
至于这几个参数：
--mixed    意思是：不删除工作空间改动代码，撤销commit，并且撤销git add . 操作。这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。
--soft    不删除工作空间改动代码，撤销commit，不撤销git add . 
--hard    删除工作空间改动代码，撤销commit，撤销git add . 
注意完成这个操作后，就恢复到了上一次的commit状态。
```

### 八、撤销 commit
```
git clean -n  显示将要删除的文件（注：但如果是新增的文件夹，则不会显示，包括这个文件夹下的文件也不会显示）
git clean -f <path>  删除新增的文件，但不会删除新增的文件夹（包括这个文件下的文件）
git clean -df 删除新增的文件和新增的文件夹
git clean -xdf 删除新增的文件和新增的文件夹，包括被.ignore文件过滤文件或文件夹（所以这个命令最好是不要用）
```
