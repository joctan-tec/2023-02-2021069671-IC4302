var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "24000",
        "ok": "22872",
        "ko": "1128"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "25"
    },
    "maxResponseTime": {
        "total": "60025",
        "ok": "59990",
        "ko": "60025"
    },
    "meanResponseTime": {
        "total": "5876",
        "ok": "3598",
        "ko": "52085"
    },
    "standardDeviation": {
        "total": "12240",
        "ok": "5474",
        "ko": "18419"
    },
    "percentiles1": {
        "total": "2736",
        "ok": "2209",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "5397",
        "ok": "5120",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "34941",
        "ok": "11486",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "35939",
        "ko": "60005"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 9542,
    "percentage": 40
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 970,
    "percentage": 4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 12360,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1128,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.608",
        "ok": "25.357",
        "ko": "1.251"
    }
},
contents: {
"req_post-new-books-ee5fd": {
        type: "REQUEST",
        name: "Post new books",
path: "Post new books",
pathFormatted: "req_post-new-books-ee5fd",
stats: {
    "name": "Post new books",
    "numberOfRequests": {
        "total": "24000",
        "ok": "22872",
        "ko": "1128"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "25"
    },
    "maxResponseTime": {
        "total": "60025",
        "ok": "59990",
        "ko": "60025"
    },
    "meanResponseTime": {
        "total": "5876",
        "ok": "3598",
        "ko": "52085"
    },
    "standardDeviation": {
        "total": "12240",
        "ok": "5474",
        "ko": "18419"
    },
    "percentiles1": {
        "total": "2736",
        "ok": "2209",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "5397",
        "ok": "5120",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "34941",
        "ok": "11486",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "35939",
        "ko": "60005"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 9542,
    "percentage": 40
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 970,
    "percentage": 4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 12360,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1128,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.608",
        "ok": "25.357",
        "ko": "1.251"
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
