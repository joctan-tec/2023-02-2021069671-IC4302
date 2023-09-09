var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "30000",
        "ok": "10806",
        "ko": "19194"
    },
    "minResponseTime": {
        "total": "800",
        "ok": "800",
        "ko": "4353"
    },
    "maxResponseTime": {
        "total": "81613",
        "ok": "78253",
        "ko": "81613"
    },
    "meanResponseTime": {
        "total": "35463",
        "ok": "10832",
        "ko": "49330"
    },
    "standardDeviation": {
        "total": "23648",
        "ok": "12273",
        "ko": "15982"
    },
    "percentiles1": {
        "total": "39227",
        "ok": "5028",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "60005",
        "ok": "12165",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "61410",
        "ok": "37040",
        "ko": "64001"
    },
    "percentiles4": {
        "total": "70317",
        "ok": "70216",
        "ko": "70376"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 40,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 10766,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 19194,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "86.455",
        "ok": "31.141",
        "ko": "55.314"
    }
},
contents: {
"req_modify-books-bdc1a": {
        type: "REQUEST",
        name: "modify books",
path: "modify books",
pathFormatted: "req_modify-books-bdc1a",
stats: {
    "name": "modify books",
    "numberOfRequests": {
        "total": "30000",
        "ok": "10806",
        "ko": "19194"
    },
    "minResponseTime": {
        "total": "800",
        "ok": "800",
        "ko": "4353"
    },
    "maxResponseTime": {
        "total": "81613",
        "ok": "78253",
        "ko": "81613"
    },
    "meanResponseTime": {
        "total": "35463",
        "ok": "10832",
        "ko": "49330"
    },
    "standardDeviation": {
        "total": "23648",
        "ok": "12273",
        "ko": "15982"
    },
    "percentiles1": {
        "total": "39333",
        "ok": "5028",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "60005",
        "ok": "12165",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "61413",
        "ok": "37040",
        "ko": "64001"
    },
    "percentiles4": {
        "total": "70314",
        "ok": "70216",
        "ko": "70376"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 40,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 10766,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 19194,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "86.455",
        "ok": "31.141",
        "ko": "55.314"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
