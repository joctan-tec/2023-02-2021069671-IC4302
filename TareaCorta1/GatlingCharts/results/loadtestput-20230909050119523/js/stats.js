var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "18000",
        "ok": "8587",
        "ko": "9413"
    },
    "minResponseTime": {
        "total": "1227",
        "ok": "1227",
        "ko": "13083"
    },
    "maxResponseTime": {
        "total": "60133",
        "ok": "59805",
        "ko": "60133"
    },
    "meanResponseTime": {
        "total": "33065",
        "ok": "8884",
        "ko": "55124"
    },
    "standardDeviation": {
        "total": "25844",
        "ok": "10493",
        "ko": "12520"
    },
    "percentiles1": {
        "total": "33122",
        "ok": "3976",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "60006",
        "ok": "10127",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "60014",
        "ok": "36014",
        "ko": "60016"
    },
    "percentiles4": {
        "total": "60038",
        "ok": "55642",
        "ko": "60056"
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 8587,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 9413,
    "percentage": 52
},
    "meanNumberOfRequestsPerSecond": {
        "total": "75",
        "ok": "35.779",
        "ko": "39.221"
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
        "total": "18000",
        "ok": "8587",
        "ko": "9413"
    },
    "minResponseTime": {
        "total": "1227",
        "ok": "1227",
        "ko": "13083"
    },
    "maxResponseTime": {
        "total": "60133",
        "ok": "59805",
        "ko": "60133"
    },
    "meanResponseTime": {
        "total": "33065",
        "ok": "8884",
        "ko": "55124"
    },
    "standardDeviation": {
        "total": "25844",
        "ok": "10493",
        "ko": "12520"
    },
    "percentiles1": {
        "total": "33122",
        "ok": "3976",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "60006",
        "ok": "10127",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "60014",
        "ok": "36014",
        "ko": "60016"
    },
    "percentiles4": {
        "total": "60038",
        "ok": "55642",
        "ko": "60056"
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 8587,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 9413,
    "percentage": 52
},
    "meanNumberOfRequestsPerSecond": {
        "total": "75",
        "ok": "35.779",
        "ko": "39.221"
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
