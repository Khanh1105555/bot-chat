
var request = require("request");
const fs = require("fs");
var login = require("facebook-chat-api");
login(
	{	
	email: "ngocquy.huynhly.9", 
	password: "kocopass" 
	},
function callback (err, api)
{
	if(err) return console.error(err);
	api.setOptions({forceLogin: true, selfListen: false, logLevel: "silent"});
	api.listen(function callback(err, msg)

	{

		if (msg.body) 
		{
			if (msg.isGroup) {
			console.log("FormID: " + msg.threadID + '->Message: '+msg.body);
			api.setMessageReaction("\uD83D\uDE0D",msg.messageID);
			if(msg.body == "Haha" || msg.body == "haha" || msg.body =="hihi" || msg.body=="Hihi"){
				var nhac = {
					attachment: fs.createReadStream(__dirname + '/cuoi.mp3')
				}
				api.sendMessage(nhac, msg.threadID);
				}
			
				if(msg.body == ".cmd"){
					api.sendMessage("Đây là lệnh sử dụng tôi:\r\n/Nhạc: Nghe nhạc.\r\n/anh: ảnh gái xinh sexy.\r\n/color: đổi màu cuộc trò chuyện.\r\nAhihi con mẹ bạn.", msg.threadID);
					}

			if(msg.body == "/anh"){
			var anh = {
					url: 'https://4.bp.blogspot.com/-kAfTzKkLJPg/WPqyI-qzzcI/AAAAAAAABlw/sBJvMcCYgw0MU5hGseiMAomgBuTSm8flQCLcB/s1600/MiiTao-Vol.054-Tina-Tao-Nai-Xiang-MrCong.com-028.jpg'
				}
			api.sendMessage(anh, msg.threadID);
			}
 
			if(msg.body == "/nhac"){
				var nhac = {
					body: "Chọn bài hát:\r\n/1: nhạc troll \r\n/2: drakkar  \r\n/3: Gặp người đúng lúc."
				}
				api.sendMessage(nhac, msg.threadID);
				}


			if(msg.body == "/1"){
				var nhac = {
					attachment: fs.createReadStream(__dirname + '/troll.mp3')
				}
				api.sendMessage(nhac, msg.threadID);
				}
				if(msg.body == "/2"){
					var nhac = {
						attachment: fs.createReadStream(__dirname + '/drakkar.mp3')
					}
					api.sendMessage(nhac, msg.threadID);
					}
					if(msg.body == "/3"){
						var nhac = {
							attachment: fs.createReadStream(__dirname + '/gapemdungluc.mp3')
						}
						api.sendMessage(nhac, msg.threadID);
						}

				if(msg.body == "/color"){
				api.changeThreadColor("#6699cc", msg.threadID, (err) => {
					if(err) return console.error(err);
				});
				api.sendMessage("Đã đổi màu.", msg.threadID);
			}
			if(msg.body == "alo"){
				var sc = {
					sticker: '114314139163194'
					}
				api.sendMessage(sc, msg.threadID);
				}
				if(msg.body == "/alo"){
					/* var nhac = {
						attachment: fs.createReadStream(__dirname + '/locc.m4a')
					} */
					api.sendMessage("Xin chào", msg.threadID);
					}
                    
			api.markAsRead(msg.threadID);
		}
		}
	});
})