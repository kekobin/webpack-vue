exports.timeFormat = (value) => {
	let time = new Date(value * 1000), hour = time.getHours(), min = time.getMinutes();
	hour = hour < 10 ? ('0' + hour) : hour;
	min = min < 10 ? ('0' + min) : min;

	return hour + ':' + min;
};

exports.valueFormat = (value) => {
	value = value.replace(/(^0+)|([^0123456789])/g, "");

	return value;
};

exports.beanStatusFormat = (item) => {
	let msg = '';
	if(item.state == 1 && item.isExpired == 0){
		msg = '进行中';
	} else if(item.state == 1 && item.isExpired == 1){
		msg = '已截止';
	} else if(item.state == 2){
		msg = '已结束';
	}

	return msg;
};
