#nginx 日志切割脚本
#!/bin/bash

# 设置日志文件存放目录
logs_path="/home/q/nginx/logs/";
#设置pid文件
pid_path="/home/q/nginx/logs/nginx.pid";

#重命名日志文件
mv ${logs_path}project.log ${logs_path}logs_daily/project_$(date -d "yesterday" +"%Y%m%d").log

#向ngin主进程发信号重新打开日志
kill -USR1 `cat ${pid_path}`