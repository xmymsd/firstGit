<template>
    <div class="highcharts"></div>
</template>

<script>
    import Highcharts from 'highcharts'
    import {warn} from './debug'
    import * as optionData from './options'
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    export default {
        /*
        * type:图表类型
        * refresh:是否刷新图表
        * seriesdata:图表数据
        * multigraph:是否多条折线
        * */
        props: ['type','refresh','seriesdata','multigraph'],
        name: 'VueHighcharts',
        data () {
            return {
                chart: null,
                globalOptions:''
            }
        },
        mounted(){
            if (!this.getChart() && this.seriesdata) {
                this._inits();
            }
        },

        methods: {
            getChart(){
                return this.chart
            },
            updateExtremes(startTime,endTime){
                if(this.getChart()){
                    this.getChart().xAxis[0].setExtremes(startTime,endTime)
                }
            },
            addSeries(data){
                if(this.getChart().series.length !== 0){
                    this.getChart().series[0].setData(data);
                }
            },
            initOptions(){
                var options,curMinX,curMaxX,interval,showFirstLabel;
                switch(this.type){
                    case 0 :
                        options = optionData.tradingVolume;
                        break;
                    case 1 :
                        options = optionData.successRatio;
                        break;
                    case 2 :
                        options = optionData.consuming;
                        break;
                }
                //多条折线
                if(this.multigraph){
                    interval=10;
                } else {
                    interval=2;
                }
                curMinX = this.seriesdata[0].data[0][0];
                curMaxX = this.seriesdata[0].data[this.seriesdata[0].data.length-1][0];
                options.xAxis.min=curMinX;
                options.xAxis.max=curMaxX;
                options.xAxis.tickInterval=(curMaxX-curMinX)/interval;
                options.xAxis.showFirstLabel=showFirstLabel;
                options.series=null;
                options.series= this.seriesdata;
                return options;
            },
            _inits(){
                if (!this.getChart() && this.seriesdata) {
                    var options = this.initOptions();
                    let _Highcharts = this.Highcharts || Highcharts;
                    if (_Highcharts.product == 'Highstock') {
                        this.chart = new _Highcharts.stockChart(this.$el, options);
                    } else {
                        this.chart = new _Highcharts.Chart(this.$el, options);
                    }
                }
            }
        },

        watch: {
            seriesdata: function() {
                var options = this.initOptions();
                if(this.refresh == 'refresh'){
                    if (this.getChart()) {
                        this.getChart().destroy();
                    }
                    let _Highcharts = this.Highcharts || Highcharts;
                    if (_Highcharts.product == 'Highstock') {
                        this.chart = new _Highcharts.stockChart(this.$el, options);
                    } else {
                        this.chart = new _Highcharts.Chart(this.$el, options);
                    }
                } else {
                    var data = options.series[0].data;
                    this.addSeries(data);//更新数据
                    this.updateExtremes(data[0][0],data[data.length-1][0]);//更新时间轴,传入最早时间跟最晚时间
                }
            }
        },
        beforeDestroy(){
            if (this.getChart()) {
                this.getChart().destroy();
            }
        }
    }
</script>
