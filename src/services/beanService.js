import Vue from 'vue';

const url1 = 'http://www.huya.com/hd/matchguess/cache.php?m=MatchGuess&do=ajaxGetDayList&from=MSIAPP&matchid=',
	  url2 = 'http://www.huya.com/hd/matchguess/cache.php?m=MatchGuess&do=ajaxScheduleSortedListByDay&from=MSIAPP&',
	  vueHttp = Vue.http;

export default {
  getDayList (matchId, topicId) {
    return vueHttp.jsonp(url1 + matchId + '&topicid=' + topicId + '&jsonp=jsonp1');
  },
  sortScheduleList (matchId, topicId) {
  	return vueHttp.jsonp(url2 + 'matchid=' + matchid + '&topicid=' + topicId + '&jsonp=jsonp2');
  }
}