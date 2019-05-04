// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

// ##############################
// // // Numbers of Airlines for U.S domestic flights
// #############################

const airlines = {
  data: {
    labels: ['1996',
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018'],
    series: [[30,
      28,
      17,
      20,
      20,
      22,
      21,
      17,
      18,
      19,
      18,
      18,
      16,
      16,
      15,
      13,
      13,
      12,
      12,
      11,
      10,
      10,
      10]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 40, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 1000,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Numbers of flights for each airline
// #############################

const flights_for_each_airline = {
  data: {
    labels: [
      'AA', 'AS', 'B6', 'DL', 'F9', 'FL', 'G4', 'NK', 'SY', 'UA', 'US', 'WN'
    ],
    series: [[351, 157, 154, 819, 85, 13, 104, 43, 3, 378, 454, 1439],
  [602, 184, 153, 819, 78, 0, 107, 42, 2, 326, 210, 1479],
  [916, 217, 161, 797, 57, 0, 115, 32, 2, 303, 0, 1400],
  [657, 156, 109, 624, 49, 0, 91, 31, 2, 225, 0, 1056],
  [223, 59, 37, 213, 11, 0, 43, 5, 2, 81, 0, 327]
]
  },
  options: {
    seriesBarDistance: 10,
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 1000,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Numbers of flights for each origin from 2014 to 2017
// #############################

const origin_flights = {
  data: {
    labels: ["2014", "2015", "2016", "2017"],
    series: [[217, 226, 228, 171], 
    [228, 234, 228, 168],
    [212, 209, 200, 154],
    [192, 188, 190, 140], 
    [189, 172, 170, 125]
  ]
  },
  options: {
  
    low: 100,
    high: 300, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 1000,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Numbers of flights for each destination from 2014 to 2017
// #############################

const destination_flights = {
  data: {
    labels: ["2014", "2015", "2016", "2017"],
    series: [[281, 274, 278, 211], 
    [189, 184, 192, 142],
    [181, 187, 183, 134],
    [174, 172, 179, 136], 
    [152, 150, 137, 106]
  ]
  },
  options: {
  
    low: 100,
    high: 330, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 1000,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};


const avg_flight_fare = {
  data: {
    labels: ["Year 2014 Q1", "Year 2014 Q2", "Year 2014 Q3", "Year 2014 Q4",
    "Year 2015 Q1", "Year 2015 Q2", "Year 2015 Q3", "Year 2015 Q4", "Year 2016 Q1", "Year 2016 Q2", "Year 2016 Q3", "Year 2016 Q4",
    "Year 2017 Q1", "Year 2017 Q2", "Year 2017 Q3"],
    series: [[298.01, 325.80, 322.40, 352.44, 335.89, 330.12, 322.77, 319.71, 314.3, 299.19, 316.02, 321.72, 320.25, 305.98, 297.61], 
    [332.34, 336.69, 336.03, 342.84, 361.22, 351.25, 349.77, 348.56, 366.95, 355.77, 351.04, 362.27, 386.02, 370.09, 340.79],
    [200.18, 206.57, 213.9, 198.93, 178.4, 184.84, 202.31, 187.21, 191.59, 180.75, 191.38, 193.76, 200.42, 208.38, 202.8],
    [154.25, 152.05, 148.27, 143.25, 143.79, 150.09, 162.51, 156.64, 160.74, 153.07, 155.91, 154.32, 160.08, 168.14, 156.02], 
    [264.66, 284.78, 258.98, 277.65, 287.64, 274.26, 268.58, 259.18, 280.85, 260.15, 255.5, 248.28, 270.77, 272.28, 264.94],
    [230.33, 226.6, 224.89, 231.37, 226.27, 230.38, 247.59, 225.72, 236.56, 237.28, 226.82, 212.14, 220.1, 209.34, 197.77]
  ]
  },
  options: {
  
    low: 100,
    high: 500, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 1000,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};






module.exports = {
  airlines,
  flights_for_each_airline,
  origin_flights,
  destination_flights, 
  avg_flight_fare
};
