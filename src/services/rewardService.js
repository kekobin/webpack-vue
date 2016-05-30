import Vue from 'vue';

const url1 = 'http://www.huya.com/hd/awardcom/index.php?m=Api&do=getUserAwards&matchId=',
    url2 = 'http://www.huya.com/hd/awardcom/index.php?m=Api&do=signAwardUserInfo&',
    vueHttp = Vue.http;

export default {
  getUserAwards (matchId) {
    return vueHttp.jsonp(url1 + matchId);
  },
  signAwardUserInfo (name, phone, address, matchId) {
    return vueHttp.jsonp(url2 + 'name=' + name + '&phone=' + phone + '&address=' + address + '&matchId=' + matchId);
  }
}