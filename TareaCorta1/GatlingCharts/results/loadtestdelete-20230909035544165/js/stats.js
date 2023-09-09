var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "120000",
        "ok": "25186",
        "ko": "94814"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "3282",
        "ko": "15"
    },
    "maxResponseTime": {
        "total": "83685",
        "ok": "79272",
        "ko": "83685"
    },
    "meanResponseTime": {
        "total": "41847",
        "ok": "16341",
        "ko": "48622"
    },
    "standardDeviation": {
        "total": "22265",
        "ok": "13593",
        "ko": "18964"
    },
    "percentiles1": {
        "total": "51837",
        "ok": "9812",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "60009",
        "ok": "24495",
        "ko": "60013"
    },
    "percentiles3": {
        "total": "67018",
        "ok": "42668",
        "ko": "67985"
    },
    "percentiles4": {
        "total": "72439",
        "ok": "59543",
        "ko": "72788"
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
    "count": 25186,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 94814,
    "percentage": 79
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.238",
        "ok": "19.989",
        "ko": "75.249"
    }
},
contents: {
"req_delete-books-8417a": {
        type: "REQUEST",
        name: "Delete books",
path: "Delete books",
pathFormatted: "req_delete-books-8417a",
stats: {
    "name": "Delete books",
    "numberOfRequests": {
        "total": "120000",
        "ok": "25186",
        "ko": "94814"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "3282",
        "ko": "15"
    },
    "maxResponseTime": {
        "total": "83685",
        "ok": "79272",
        "ko": "83685"
    },
    "meanResponseTime": {
        "total": "41847",
        "ok": "16341",
        "ko": "48622"
    },
    "standardDeviation": {
        "total": "22265",
        "ok": "13593",
        "ko": "18964"
    },
    "percentiles1": {
        "total": "51881",
        "ok": "9814",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "60009",
        "ok": "24513",
        "ko": "60013"
    },
    "percentiles3": {
        "total": "67018",
        "ok": "42647",
        "ko": "67986"
    },
    "percentiles4": {
        "total": "72439",
        "ok": "59558",
        "ko": "72784"
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
    "count": 25186,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 94814,
    "percentage": 79
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.238",
        "ok": "19.989",
        "ko": "75.249"
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
