type = ['primary', 'info', 'success', 'warning', 'danger'];
demo2 = {
initDashboardPageCharts: function() {
  $.getJSON("config/updataindex.php",
      function(result) {
          var akhir = result.length - 1;
          let update = result[akhir].update_time;
          let jmlh_barang1 = result[akhir].jumlah_barang1;
          let jmlh_barang2 = result[akhir].jumlah_barang2;
          let jmlh_barang3 = result[akhir].jumlah_barang3;
          let arr_update = [];
          let arr_jmlh_barang1 =[];
          let arr_jmlh_barang2  =[];
          let arr_jmlh_barang3  =[];

          for (var i in result)
          {
            arr_update.push(result[i].update_time);
            arr_jmlh_barang1.push(result[i].jumlah_barang1);
            arr_jmlh_barang2.push(result[i].jumlah_barang2);
            arr_jmlh_barang3.push(result[i].jumlah_barang3);
           }
           console.log(jmlh_barang1);

           gradientChartOptionsConfigurationWithTooltipBlue = {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            tooltips: {
              backgroundColor: '#f5f5f5',
              titleFontColor: '#333',
              bodyFontColor: '#666',
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest"
            },
            responsive: true,
            scales: {
              yAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(29,140,248,0.0)',
                  zeroLineColor: "transparent",
                },
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 25,
                  padding: 20,
                  fontColor: "#2380f7"
                }
              }],
      
              xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(29,140,248,0.1)',
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 20,
                  fontColor: "#2380f7"
                }
              }]
            }
          };
      
          gradientChartOptionsConfigurationWithTooltipPurple = {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
      
            tooltips: {
              backgroundColor: '#f5f5f5',
              titleFontColor: '#333',
              bodyFontColor: '#666',
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest"
            },
            responsive: true,
            scales: {
              yAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(29,140,248,0.0)',
                  zeroLineColor: "transparent",
                },
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 25,
                  padding: 20,
                  fontColor: "#9a9a9a"
                }
              }],
      
              xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(225,78,202,0.1)',
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 20,
                  fontColor: "#9a9a9a"
                }
              }]
            }
          };
      
          gradientChartOptionsConfigurationWithTooltipOrange = {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
      
            tooltips: {
              backgroundColor: '#f5f5f5',
              titleFontColor: '#333',
              bodyFontColor: '#666',
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest"
            },
            responsive: true,
            scales: {
              yAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(29,140,248,0.0)',
                  zeroLineColor: "transparent",
                },
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 25,
                  padding: 20,
                  fontColor: "#ff8a76"
                }
              }],
      
              xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(220,53,69,0.1)',
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 20,
                  fontColor: "#ff8a76"
                }
              }]
            }
          };
      
          gradientChartOptionsConfigurationWithTooltipGreen = {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
      
            tooltips: {
              backgroundColor: '#f5f5f5',
              titleFontColor: '#333',
              bodyFontColor: '#666',
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest"
            },
            responsive: true,
            scales: {
              yAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(29,140,248,0.0)',
                  zeroLineColor: "transparent",
                },
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 50,
                  padding: 20,
                  fontColor: "#9e9e9e"
                }
              }],
      
              xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(0,242,195,0.1)',
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 20,
                  fontColor: "#9e9e9e"
                }
              }]
            }
          };
      
      
          gradientBarChartConfiguration = {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
      
            tooltips: {
              backgroundColor: '#f5f5f5',
              titleFontColor: '#333',
              bodyFontColor: '#666',
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest"
            },
            responsive: true,
            scales: {
              yAxes: [{
      
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(29,140,248,0.1)',
                  zeroLineColor: "transparent",
                },
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 50,
                  padding: 20,
                  fontColor: "#9e9e9e"
                }
              }],
      
              xAxes: [{
      
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(29,140,248,0.1)',
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 20,
                  fontColor: "#9e9e9e"
                }
              }]
            }
          };
      
          var ctx = document.getElementById("chartLinePurple").getContext("2d");
      
          var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

          gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
          gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
          gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

          var data = {
            labels: arr_update,
            datasets: [{
              label: "Data",
              fill: true,
              backgroundColor: gradientStroke,
              borderColor: '#d048b6',
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: '#d048b6',
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: '#d048b6',
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: arr_jmlh_barang1,
            }]
          };

          var myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipPurple
          });

          var ctx = document.getElementById("chartLinePurple2").getContext("2d");
      
          var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
          gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
          gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
      
          var data = {
            labels: arr_update,
            datasets: [{
              label: "Data",
              fill: true,
              backgroundColor: gradientStroke,
              borderColor: '#d048b6',
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: '#d048b6',
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: '#d048b6',
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: arr_jmlh_barang2,
            }]
          };

          var myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipPurple
          });

          var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

          var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

          gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
          gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
          gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

          var data = {
            labels: arr_update,
            datasets: [{
              label: "My First dataset",
              fill: true,
              backgroundColor: gradientStroke,
              borderColor: '#00d6b4',
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: '#00d6b4',
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: '#00d6b4',
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: arr_jmlh_barang3,
            }]
          };

          var myChart = new Chart(ctxGreen, {
            type: 'line',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipGreen

          });


          var ctx = document.getElementById("chartBig1").getContext('2d');

          var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

          gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
          gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
          gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
          var config = {
            type: 'line',
            data: {
              labels: arr_update,
              datasets: [{
                label: "Hearts bpm",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: '#d346b1',
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#d346b1',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#d346b1',
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: arr_jmlh_barang1,
              }]
            },
            options: gradientChartOptionsConfigurationWithTooltipPurple
          };
          var myChartData = new Chart(ctx, config);
          $("#0").click(function() {
            var data = myChartData.config.data;
            data.datasets[0].label = "Barang 1";
            data.datasets[0].data = arr_jmlh_barang1;
            myChartData.update();
          });
          $("#1").click(function() {
            var data = myChartData.config.data;
            data.datasets[0].data = arr_jmlh_barang2;
            data.datasets[0].label = "Barang 2";
            myChartData.update();
          });
          $("#2").click(function() {
            var data = myChartData.config.data;
            data.datasets[0].data = arr_jmlh_barang3;
            data.datasets[0].label = "Barang 3";
            myChartData.update();
          });
          document.getElementById('jmlhbr1').innerHTML = jmlh_barang1;
          document.getElementById('jmlhbr2').innerHTML = jmlh_barang2;

        // document.getElementById("spo1").innerHTML = spo;
        //  document.getElementById("temp1").innerHTML = temp;

      });
    },
    showNotification: function(from, align) {
      color = Math.floor((Math.random() * 4) + 1);
      $.notify({
        icon: "tim-icons icon-bell-55",
        message: "<b>MENGUPDATE DATA</b>"

      }, {
        type: type[color],
        timer: 8000,
        placement: {
          from: from,
          align: align
        }
      });
    }

}

