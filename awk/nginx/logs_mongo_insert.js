var now = new Date(date);
var ymd = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
var newTime = (parseInt(time) + 1) + ':00:00';
db.statistics.insert({
    project: project,
    ymd: ymd,
    time: newTime,
    date: now,
    pv: validate(pv),
    uv: validate(uv),
    pv_from_other: validate(pvFromOther),
    pv_timeline: validate(pvFromTimeline),
    pv_groupmsg: validate(pvFromGroupmsg),
    pv_singlemsg: validate(pvFromSinglemsg),
    uv_from_other: validate(uvFromOther),
    uv_timeline: validate(uvFromTimeline),
    uv_groupmsg: validate(uvFromGroupmsg),
    uv_singlemsg: validate(uvFromSinglemsg),
    pv_ios: validate(pvIos),
    pv_adr: validate(pvAdr),
    pv_device_other: validate(pvDeviceOther),
    uv_ios: validate(uvIos),
    uv_adr: validate(uvAdr),
    uv_device_other: validate(uvDeviceOther)
});

function validate(val) {
    return val > 0 ? val : 0;
}
