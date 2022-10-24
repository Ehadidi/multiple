// // OFD chart
// var chart = c3.generate({
//     data: {
//         x: 'x',
//         columns: [
//             ['x', '2021-8-31', '2021-9-25', '2021-10-31', '2021-11-28' ,'2021-12-28'],
//             ['OFD', 10, 15, 25, 40, 100],
//         ],
//         type: 'spline'
//     },
//     color: {
//         pattern: ['#f1f1f1']
//     },
//
//     size: {
//         height : 120
//     },
//     axis: {
//         x : {
//             type : 'timeseries',
//             tick: {
//                 fit: true,
//                 format: "%e %b %y"
//             }
//         },
//         y: {
//             max: 100,
//             min: 0,
//             tick: {
//                format: function (d)
//                { return d + "%"; }
//             },
//         },
//     },
//     bindto: '#chart'
// });

var chart = c3.generate({
    data: {
        columns: [
            ['مبيعات', 30, 200, 100, 400, 150, 250],
        ],
        type: 'spline'
    },
    color: {
        pattern: ['#f1f1f1']
    },
    legend:{
      show: false
    },
    size: {
        height : 274
    },
    axis: {
        y: {
            show: false
        }
    },
    // grid: {
    //     y: {
    //         show: true
    //     }
    // },
    bindto: '#chart'
});