var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "120000",
        "ok": "4946",
        "ko": "115054"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "3510",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "91874",
        "ok": "85408",
        "ko": "91874"
    },
    "meanResponseTime": {
        "total": "49098",
        "ok": "34804",
        "ko": "49713"
    },
    "standardDeviation": {
        "total": "18945",
        "ok": "17391",
        "ko": "18767"
    },
    "percentiles1": {
        "total": "60001",
        "ok": "25874",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "60323",
        "ok": "50195",
        "ko": "60414"
    },
    "percentiles3": {
        "total": "70356",
        "ok": "67886",
        "ko": "70466"
    },
    "percentiles4": {
        "total": "76444",
        "ok": "76674",
        "ko": "76441"
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
    "count": 4946,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 115054,
    "percentage": 96
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.238",
        "ok": "3.925",
        "ko": "91.313"
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
        "total": "120000",
        "ok": "4946",
        "ko": "115054"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "3510",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "91874",
        "ok": "85408",
        "ko": "91874"
    },
    "meanResponseTime": {
        "total": "49098",
        "ok": "34804",
        "ko": "49713"
    },
    "standardDeviation": {
        "total": "18945",
        "ok": "17391",
        "ko": "18767"
    },
    "percentiles1": {
        "total": "60001",
        "ok": "25874",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "60324",
        "ok": "50195",
        "ko": "60412"
    },
    "percentiles3": {
        "total": "70356",
        "ok": "67886",
        "ko": "70466"
    },
    "percentiles4": {
        "total": "76444",
        "ok": "76674",
        "ko": "76441"
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
    "count": 4946,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 115054,
    "percentage": 96
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.238",
        "ok": "3.925",
        "ko": "91.313"
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
