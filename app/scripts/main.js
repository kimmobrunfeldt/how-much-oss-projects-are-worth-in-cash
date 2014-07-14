var repos = [
    {
        "hours": 9614,
        "commits": 5628,
        "repository": "jquery/jquery"
    },
    {
        "hours": 14386,
        "commits": 10032,
        "repository": "joyent/node"
    },
    {
        "hours": 4686,
        "commits": 3196,
        "repository": "mbostock/d3"
    },
    {
        "hours": 7205,
        "commits": 5084,
        "repository": "angular/angular.js"
    },
    {
        "hours": 434,
        "commits": 223,
        "repository": "bartaz/impress.js"
    },
    {
        "hours": 4396,
        "commits": 2622,
        "repository": "jashkenas/backbone"
    },
    {
        "hours": 6934,
        "commits": 7630,
        "repository": "meteor/meteor"
    },
    {
        "hours": 3369,
        "commits": 1983,
        "repository": "moment/moment"
    },
    {
        "hours": 1949,
        "commits": 807,
        "repository": "blueimp/jQuery-File-Upload"
    },
    {
        "hours": 12382,
        "commits": 13443,
        "repository": "adobe/brackets"
    },
    {
        "hours": 2025,
        "commits": 1140,
        "repository": "hakimel/reveal.js"
    },
    {
        "hours": 11558,
        "commits": 8066,
        "repository": "mrdoob/three.js"
    },
    {
        "hours": 4872,
        "commits": 4630,
        "repository": "visionmedia/express"
    },
    {
        "hours": 1699,
        "commits": 1282,
        "repository": "Automattic/socket.io"
    },
    {
        "hours": 3366,
        "commits": 1810,
        "repository": "Modernizr/Modernizr"
    },
    {
        "hours": 326,
        "commits": 205,
        "repository": "resume/resume.github.com"
    },
    {
        "hours": 3055,
        "commits": 1556,
        "repository": "jashkenas/underscore"
    },
    {
        "hours": 4064,
        "commits": 2676,
        "repository": "TryGhost/Ghost"
    },
    {
        "hours": 2791,
        "commits": 1291,
        "repository": "ivaynberg/select2"
    },
    {
        "hours": 2803,
        "commits": 1804,
        "repository": "less/less.js"
    }
];

var DEVELOPER_PRICE_PER_HOUR = 80;

$(function() {
    var data = {
        labels: _.pluck(repos, 'repository'),
        datasets: [
            {
                label: "Cash",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: _.map(repos, function(repo) {
                    return repo.hours * DEVELOPER_PRICE_PER_HOUR;
                })
            },
            {
                label: "Commits",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: _.pluck(repos, 'commits')
            }
        ]
    };

    var ctx = $("#projects").get(0).getContext("2d");
    var chart = new Chart(ctx).Bar(data);
});
