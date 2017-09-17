BEGIN {
}
{
    # 过滤错误请求，只处理 html 200 请求，因为 html 没设缓存
    if ($8 != 200) next;
    if ($9 == "text/html") {
        # 来源匹配
        fromIndex = index($6, "from=");
        endIndex = index($6, "&");
        if (fromIndex != 0 && endIndex == 0) {
            # 增加 from= 的长度
            origin = substr($6, fromIndex + 5);
        } else {
            origin = substr($6, fromIndex + 5, endIndex);
        }
        # pathname 匹配
        pathLength = split($6, path, "/");
        # uv标记
        uv = 0;
        project = path[3];
        # 404.html
        if (pathLength > 4 || project == "404.html") next;
        if (origin != "platform") {
            # 日期 时间
            split($3, datetime, ":");
            if (timeArr[project] && timeArr[project] != datetime[2]) {
                # 新的一条记录，数据存到 mongodb 中并清空
                system("mongo 'yshow' --eval 'var project=\""project"\", date=\""dateArr[project]"\", time=\""timeArr[project]"\", pv=\""pvArr[project]"\", uv=\""uvArr[project]"\", pvFromOther=\""pvFromOtherArr[project]"\", pvFromTimeline=\""pvFromTimelineArr[project]"\", pvFromGroupmsg=\""pvFromGroupmsgArr[project]"\", pvFromSinglemsg=\""pvFromSinglemsgArr[project]"\",  uvFromOther=\""uvFromOtherArr[project]"\", uvFromTimeline=\""uvFromTimelineArr[project]"\", uvFromGroupmsg=\""uvFromGroupmsgArr[project]"\", uvFromSinglemsg=\""uvFromSinglemsgArr[project]"\", pvIos=\""pvIosArr[project]"\", uvIos=\""uvIosArr[project]"\", pvAdr=\""pvAdrArr[project]"\", uvAdr=\""uvAdrArr[project]"\", pvDeviceOther=\""pvDeviceOtherArr[project]"\", uvDeviceOther=\""uvDeviceOtherArr[project]"\"' ./logs_mongo_insert.js");
                delete dateArr[project];
                delete timeArr[project];
                delete pvArr[project];
                delete uvArr[project];
                delete pvFromOtherArr[project];
                delete pvFromTimelineArr[project];
                delete pvFromGroupmsgArr[project];
                delete pvFromSinglemsgArr[project];
                delete uvFromOtherArr[project];
                delete uvFromTimelineArr[project];
                delete uvFromGroupmsgArr[project];
                delete uvFromSinglemsgArr[project];
                delete pvIosArr[project];
                delete uvIosArr[project];
                delete pvAdrArr[project];
                delete uvAdrArr[project];
                delete pvDeviceOtherArr[project];
                delete uvDeviceOtherArr[project];
            }
            # save
            timeArr[project] = datetime[2];
            dateArr[project] = datetime[1];
            pvArr[project]++;
            if ($11 == "\"\"") {
                uvArr[project]++;
                uv = 1;
            }
            ios = index($0, "iPhone");
            adr = index($0, "Android");
            # 设备
            if (ios > 0) {
                if (uv) uvIosArr[project]++;
                pvIosArr[project]++;
            } else if (adr > 0) {
                if (uv) uvAdrArr[project]++;
                pvAdrArr[project]++;
            } else {
                if (uv) uvDeviceOtherArr[project]++;
                pvDeviceOtherArr[project]++;
            }
            # 其他
            if (fromIndex == 0 ) {
                if (uv) uvFromOtherArr[project]++;
                pvFromOtherArr[project]++;
            }
            # 微信朋友圈
            if (origin == "timeline") {
                if (uv) uvFromTimelineArr[project]++;
                pvFromTimelineArr[project]++;
            }
            # 微信群
            if (origin == "groupmessage") {
                if (uv) uvFromGroupmsgArr[project]++;
                pvFromGroupmsgArr[project]++;
            }
            # 好友分享
            if (origin == "singlemessage") {
                if (uv) uvFromSinglemsgArr[project]++;
                pvFromSinglemsgArr[project]++;
            }
        }
    };
}

END {
    for (project in pvArr) {
        system("mongo 'yshow' --eval 'var project=\""project"\", date=\""dateArr[project]"\", time=\""timeArr[project]"\", pv=\""pvArr[project]"\", uv=\""uvArr[project]"\", pvFromOther=\""pvFromOtherArr[project]"\", pvFromTimeline=\""pvFromTimelineArr[project]"\", pvFromGroupmsg=\""pvFromGroupmsgArr[project]"\", pvFromSinglemsg=\""pvFromSinglemsgArr[project]"\",  uvFromOther=\""uvFromOtherArr[project]"\", uvFromTimeline=\""uvFromTimelineArr[project]"\", uvFromGroupmsg=\""uvFromGroupmsgArr[project]"\", uvFromSinglemsg=\""uvFromSinglemsgArr[project]"\", pvIos=\""pvIosArr[project]"\", uvIos=\""uvIosArr[project]"\", pvAdr=\""pvAdrArr[project]"\", uvAdr=\""uvAdrArr[project]"\", pvDeviceOther=\""pvDeviceOtherArr[project]"\", uvDeviceOther=\""uvDeviceOtherArr[project]"\"' ./logs_mongo_insert.js");
    }
}
