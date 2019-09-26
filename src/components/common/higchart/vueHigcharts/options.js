//图表的配置文件
import {dateFormat} from '../../../../utils/wbkDate';
//交易量
export const tradingVolume = {
    chart: {
        zoomType:'x',
        className: 'skies',
        borderWidth: 0,
        plotShadow: false,
        plotBorderWidth: 0,
        marginTop:20,
        height:260,
        events: {
            //监听图表区域选择事件
            selection: function () {
                //selectionChart();
            },
            load: function() {
            }
        }
    },
    credits: { enabled: false },
    title: {
        text: '',
        x: -20
    },
    plotOptions: {
        line: {
            marker: {
                enabled: true,
                radius:2,
                states: {
                    hover: {
                        enabled: true,
                        symbol: 'circle',
                        radius:2.5,
                        lineWidth: 1
                    }
                }
            },
            zIndex:100,
            lineWidth: 2
        }
    },
    xAxis: {
        type: 'datetime',
        crosshair: {
            width:1,
            dashStyle: 'solid'
        },
        dateTimeLabelFormats: {
            day: '%m-%d'
        },
        tickPixelInterval: 150 ,  
        tickInterval :24 * 3600 * 1000,  
        gridLineWidth:1,
        labels:{
            align:"center",
            style: {
                "font-family": 'REEJI'
            }
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        gridLineWidth: 1,
        labels: {
            formatter: function () {
                var v = this.value;
                if(v >= 0 && v <= 100){
                    return this.value;
                } else if (v == -50){
                    return '值=0';
                } else {
                    return '';
                }
            }
        }
    },
    tooltip:{
        formatter:function () {
            var s = "<b>" + dateFormat(this.x,"isoDate"); + "</b>";
            var curName=['交易量（今天）','交易量（昨天）','交易量（上周同天）'];
            var colors = ['#009944','#3780E8','#EEA427'];
            if(this.points.length>1){
                this.points.forEach(function(point,i) {
                    var v = point.y;
                    if( v == -50 ){
                        s += "<br/>";
                        s += "<p class='tips-brs'></p>";
                        s +=  "<font>值</font> : =0 " ;
                    }
                    else{
                        s += "<br/>";
                        s += "<p class='tips-brs'></p>";
                        s +=  '<font>值</font> : ' + v;
                    }
                });
            } else {
                this.points.forEach(function(point,i) {
                    var v = point.y;
                    if( v == -50 ){
                        s += "<br/>";
                        s += "<p class='tips-brs'></p>";
                        s +=  "<font>值</font> : =0 " ;
                    }
                    else{
                        s += "<br/>";
                        s += "<p class='tips-brs'></p>";
                        s +=  "<font>值</font> : " + v;
                    }
                });
            }
            return s;
        },
        borderWidth: 1,
        borderRadius: 2,
        useHTML: true,
        shared: true,
        style:{
            fontFamily: "REEJI"
        }
    },
    legend: {
        y:10,
        margin:0,
        enabled: false,
        borderWidth: 0,
        style: {
            "font-family": 'REEJI' , "display":'none'
        }
    },
    series: []
}
//成功率
export const successRatio = {
    chart: {
        zoomType:'x',
        className: 'skies',
        borderWidth: 0,
        plotShadow: false,
        plotBorderWidth: 0,
        marginTop:20,
        height:260,
        events: {
            //监听图表区域选择事件
            selection: function () {
                //selectionChart();
            },
            load: function() {
            }
        }
    },
    credits: { enabled: false },
    title: {
        text: '',
        x: -20
    },
    plotOptions: {
        line: {
            marker: {
                enabled: true,
                radius:2,
                states: {
                    hover: {
                        enabled: true,
                        symbol: 'circle',
                        radius:2.5,
                        lineWidth: 1
                    }
                }
            },
            zIndex:100,
            lineWidth: 2
        }
    },
    xAxis: {
        type: 'datetime',
        crosshair: {
            width:1,
            dashStyle: 'solid'
        },
        dateTimeLabelFormats: {
            day: '%m-%d'
        },
        tickPixelInterval: 150 ,  
        tickInterval :24 * 3600 * 1000,  
        gridLineWidth:1,
        labels:{
            align:"center",
            style: {
                "font-family": 'REEJI'
            }
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        gridLineWidth: 1,
        labels: {
            style: {
                "font-family": 'REEJI',
            },
            formatter: function () {
                return this.value+'%';
            }
        },
        min:0,
        max:100
    },
    tooltip:{
        formatter:function () {
            var s = "<b>" + dateFormat(this.x,"isoDate"); + "</b>";
            this.points.forEach(function (point) {
                var v = point.y;
                if( v < 100 ){
                    s += "<br/>";
                    s += "<p class='tips-brs'></p>";
                    s +=  "<font color='#ff0000'>通过率</font> : " + point.y+"%";
                }
                else{
                    s += "<br/>";
                    s += "<p class='tips-brs'></p>";
                    s +=  "<font color='#fff'>通过率</font> : " + point.y+"%";
                }
            })
            return s;
        },
        borderWidth: 1,
        borderRadius: 2,
        useHTML: true,
        shared: true,
        style:{
            fontFamily: "REEJI"
        }
    },
    legend: {
        y:10,
        margin:0,
        enabled: false,
        borderWidth: 0,
        style: {
            "font-family": 'REEJI' , "display":'none'
        }
    },
    series: []
}
//平均耗时
export const consuming = {
    chart: {
        type:'areaspline',
        zoomType:'x',
        className: 'skies',
        borderWidth: 0,
        plotShadow: false,
        backgroundColor : 'none',
        plotBorderWidth: 0,
        marginTop:20,
        events: {
            //监听图表区域选择事件
            selection: function () {
                //selectionChart();
            },
            load: function() {
            }
        }
    },
    credits: { enabled: false },
    title: {
        text: '',
        x: -20
    },
    plotOptions: {
        areaspline: {
            marker: {
                enabled: false,
                states: {
                    hover: {
                        radius:0.5
                    }
                }
            },
            color:"#fff",
            zIndex:100,
            lineWidth: 2,
            lineColor:'#55DFFF',
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, "#55DFFF"],
                    [1, "rgba(85,223,255,0)"]
                ]
            }
        }
    },
    xAxis: {
        type: 'datetime',
        crosshair: {
            width:1,
            color: '#4ef7ff',
            dashStyle: 'solid'
        },
        labels:{
            align:"center",
            style: {
                "font-family": 'REEJI',
                "font-size": "12px",
                "color":"#4ef7ff",
                "text-shadow": '0 0 8px #1c29f4'
            }
        },
        gridLineWidth: 0,
        tickLength: 0,
        lineWidth: 0 ,
        lineColor:'rgba(65,254,253,0.2)'
    },
    yAxis: {
        title: {
            text: ''
        },
        gridLineWidth: 1,
        gridLineColor : 'rgba(65,254,253,0.2)',
        labels: {
            style: {
                color: '#4ef7ff',
                "font-family": 'REEJI',
                "font-size": "12px",
                "text-shadow": '0 0 8px #1c29f4'
            }
        }
    },
    tooltip:{
        formatter:function () {
            var s = "<b>" + dateFormat(this.x,"minTime"); + "</b>";
            this.points.forEach(function(i,point) {
                var v = point;
                if( v == -50 ){
                    s += "<br/>";
                    s += "<p class='tips-brs'></p>";
                    s +=  "<font color='#ff0000'>平均耗时</font> : 平均耗时=0 " ;
                }
                else{
                    s += "<br/>";
                    s += "<p class='tips-brs'></p>";
                    s +=  "<font color='#fff'>平均耗时</font> : " + point;
                }

            });
            return s;
        },
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: 'rgba(8, 50, 117, 0.6)',
        useHTML: true,
        shared: true,
        style:{
            fontFamily: "REEJI",
            color:"#fff"
        }
    },
    legend: {
        y:10,
        margin:0,
        enabled: false,
        borderWidth: 0,
        style: {
            "font-family": 'REEJI' , "display":'none'
        }
    },
    series: []
}
