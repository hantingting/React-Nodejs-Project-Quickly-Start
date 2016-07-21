var getMessageList = require('../../data/getMessage');

exports.execute = function (req, res) {
	 getMessageList.getMessageList(function (data) {
	 	res.send(data);
	 });
};