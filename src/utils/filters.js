export  function dataFormat(){
  Date.prototype.format = function(format){
    var o = {
      "M+" : this.getMonth()+1, //month
      "d+" : this.getDate(), //day
      "h+" : this.getHours(), //hour
      "m+" : this.getMinutes(), //minute
      "s+" : this.getSeconds(), //cond
      "q+" : Math.floor((this.getMonth()+3)/3), //quarter
      "S" : this.getMilliseconds() //millisecond
    };
    if(/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
      if(new RegExp("("+ k +")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
      }
    }
    return format;
  };
  var curDate = new Date();
  return curDate.format("yyyyMMdd");
}
export function toColorFilter(statue) {
  //标题状态
  let titleIconList = [
    "run-before",
    "run-start",
    "run-end",
    "run-warm"
  ];
  return titleIconList[statue];
}
export function riskToColor(statue) {
  //标题状态
  let riskList = {
    1:"risk-tody",
    2:"risk-one",
    3:"risk-two"
  };
  return riskList[statue];
}
export function riskRankTitle(statue) {
  //标题状态
  let riskRankList = {
    1:'一级运营关注事项',
    2:'二级运营关注事项',
    3:'三级运营关注事项'
  };
  return riskRankList[statue];
}
export function toEventLevel(statue) {
  //标题状态
  let eventList = {
    1:'黑色重大事件',
    2:'红色异常事件',
    3:'黄色异常事件',
    4:'一般异常事件',
    5:'正常,无异常事件'
  };
  return eventList[statue];
}
export function toColorLevel(statue) {
  //标题状态
  let levelList = {
    1:"eventtype-four",
    2:"eventtype-one",
    3:"eventtype-two",
    4:"eventtype-three",
    5:"eventtype-three"
  };
  return levelList[statue];
}
export function characterOutOfLength(value) {
  //标题状态
  if(value&&value.length>0){
    if(value.length>150){
      return value.slice(0,150)+'...';
    } else {
      return value;
    }
  }
}
export function valueIsNull(value) {
  //标题状态
  return (value == null ? '' : value);
}
export function minVlaueBykey(obj,key) {
  //标题状态
  if(obj.length>0){
    return _.sortBy(obj,key)[0];
  }
}
export function titleCase(str) {
  var array = str.toLowerCase().split(" ");
  for (var i = 0; i < array.length; i++){
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
  }
  return array.join(" ");
}
export function glyphiconArrow(weekOnWeek) {
  var arrWay;
  if(weekOnWeek>0){
    arrWay=' glyphicon-up'
  }else if(weekOnWeek<0){
    arrWay=' glyphicon-down'
  }else{
    arrWay=""
  }
  return arrWay;
}
export function backAbs(muns){
  return Math.abs(muns);
}
export function returnNumberType(muns){
  return muns.toString().replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');
}
export function warnLevel(level){
  var color;
  switch (level){
    case 'Critical':
      color='critical';
      break;
    case 'Major':
      color='major';
      break;
    case 'Minor':
      color='minor';
      break;
    case 'Warning':
      color='warning';
      break;
    case 'Info':
      color='info';
      break;
  }
  return color;
}
export function wbkConstant(muns){
  var wbkConstant={
    //指标名称匹配模式
    METRIC_NAME_PANTER:{
      SUCCESS:/\成功率/,
      COST_TIME:/\时延/,
      TPS:/TPS/
    },
    //图形大小
    GRAPH_SIZE:{
      LARGE:"large",
      MIDDLE:"middle",
      SMALL:"small"
    },
    //metricId大于于100000000且小于1000000000为2.0的metric，否则是1.0的
    VERSION_2_MIN_METRICID:100000000,
    MIN_VER_ONE_REPORT_METRIC_ID:1000000000,
  };
  return wbkConstant;
}
export  function formaterGroupData(data){
  var series=[];
  if(data.length>0){
    for(var j = 0;j<data.length;j++){
      var temp_data=[],
          temp_series = {};
      for(var i=0;i<data[j].length;i++){
        temp_data.push([data[0][i][0], data[j][i][1]]);
      }
      temp_series.data = temp_data;
      series.push(temp_series);
    }
  }
  return series;
}
export function vueTrim(str){
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,'');
}
export function chechPassFilter(val){
  if(val){
    if(_.values(val).length > 0){
      return "erros"
    } else {
      return "normal"
    }
  }
}
export function evaluationState(sts) {
  var inf;
  switch (sts){
    case 0:
    case 1:
      inf='评估中';
      break;
    case 2:
      inf='评估完成';
      break;
    case 3:
      inf='未通过评估';
      break;
  }
  return inf;
}
export function evaluationBnt(sts) {
  var inf;
  switch (sts){
    case 0:
    case 1:
      inf='重新获取评估结果';
      break;
    case 2:
    case 3:
      inf='返回首页';
      break;
  }
  return inf;
}
export function evaluationQuota(sts) {
  var inf;
  switch (sts){
    case 0:
    case 1:
      inf='递交时间';
      break;
    case 2:
    case 3:
      inf='额度';
      break;
  }
  return inf;
}
export function evaluationInfo(sts) {
  var inf;
  switch (sts){
    case 0:
    case 1:
      inf='请客官耐心等待';
      break;
    case 2:
      inf='客官赶紧去申请吧';
      break;
    case 3:
      inf='亲是不是哪里出问题了';
      break;
  }
  return inf;
}
export function evaluationStatus(sts) {
  var status;
  switch (sts){
    case 0:
      status='going';
      break;
    case 1:
      status='overtime';
      break;
    case 2:
      status='success';
      break;
    case 3:
      status='fail';
      break;
  }
  return status;
}
export function numbersToArrays(nums) {
  console.log(nums)
}