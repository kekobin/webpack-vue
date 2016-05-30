import Vue from 'vue';

const url1 = 'http://www.huya.com/hd/msi/index.php?m=Api&from=MSIAPP&do=getMyScore',
	  url2 = 'http://www.huya.com/hd/msi/cache.php?m=Api&from=MSIAPP&do=getScoreRank',
	  url3 = 'http://www.huya.com/hd/msi/index.php?m=Api&do=addScore&from=MSIAPP&type=',
	  vueHttp = Vue.http;

export default {
  getMyScore () {
    return vueHttp.jsonp(url1);
  },
  getScoreRank () {
  	return vueHttp.jsonp(url2);
  },
  addScore (type) {
  	return vueHttp.jsonp(url3 + type);
  }
}