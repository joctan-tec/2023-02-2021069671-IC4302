var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "136500",
        "ok": "20854",
        "ko": "115646"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "18",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "60019",
        "ok": "35659",
        "ko": "60019"
    },
    "meanResponseTime": {
        "total": "275",
        "ok": "1329",
        "ko": "85"
    },
    "standardDeviation": {
        "total": "1222",
        "ok": "2392",
        "ko": "703"
    },
    "percentiles1": {
        "total": "27",
        "ok": "914",
        "ko": "23"
    },
    "percentiles2": {
        "total": "107",
        "ok": "1939",
        "ko": "81"
    },
    "percentiles3": {
        "total": "1771",
        "ok": "3221",
        "ko": "239"
    },
    "percentiles4": {
        "total": "2993",
        "ok": "9056",
        "ko": "880"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10198,
    "percentage": 7
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 562,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 10094,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 115646,
    "percentage": 85
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.939",
        "ok": "13.893",
        "ko": "77.046"
    }
},
contents: {
"req_get-all-books-d4c21": {
        type: "REQUEST",
        name: "Get all books",
path: "Get all books",
pathFormatted: "req_get-all-books-d4c21",
stats: {
    "name": "Get all books",
    "numberOfRequests": {
        "total": "136500",
        "ok": "20854",
        "ko": "115646"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "18",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "60019",
        "ok": "35659",
        "ko": "60019"
    },
    "meanResponseTime": {
        "total": "275",
        "ok": "1329",
        "ko": "85"
    },
    "standardDeviation": {
        "total": "1222",
        "ok": "2392",
        "ko": "703"
    },
    "percentiles1": {
        "total": "27",
        "ok": "902",
        "ko": "23"
    },
    "percentiles2": {
        "total": "107",
        "ok": "1939",
        "ko": "81"
    },
    "percentiles3": {
        "total": "1767",
        "ok": "3221",
        "ko": "239"
    },
    "percentiles4": {
        "total": "2993",
        "ok": "9056",
        "ko": "880"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10198,
    "percentage": 7
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 562,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 10094,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 115646,
    "percentage": 85
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.939",
        "ok": "13.893",
        "ko": "77.046"
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
