<!-- chat.vue -->

<template>
	<div id="chat" >
		<div class='people_num'>人数: {{people_num}}</div>
		<div class='chat_content'>
			<div v-for='message of messages' class='message clearfix'>
				<div v-if='message.system_message' class='system_message'>{{message.system_message}}</div>
				<div v-if='message.content' :class='[mess, message.isMe ? "pull-right" : "pull-left" ]'>
					<p class='username name'>{{message.name}}</p>
					<p class='content'>{{message.content}}</p>
				</div>
			</div>
		</div>
		<div class='chat_input'>
			<input type='text' v-model='content' @keyup.enter='sendMessage' placeholder="输入框"></input>
		</div>
	</div>

</template>

<script>

	//socket
	const socket = io.connect();

	export default {
		data(){
			return {
				people_num: 0,
				content: '',
				messages:[
					// {
					// 	isMe: false,      //判断信息显示左边还是右边（自己是右边，别人是左边）
					//  system_message: '',  //系统消息
					// 	name: '21332',
					// 	content: '哈哈'
					// }
				],
				userName: ''
			}
		},
		mounted(){
			this.$nextTick(function(){
				//获取手机高度
				const screenHeight = document.documentElement.clientHeight,
					  headerHeight = document.querySelector('.container header').offsetHeight;

				this.$el.style.height = screenHeight - headerHeight - 50 + 'px';

				const name = prompt('输入您的名字');

				this.userName = name;

				
				socket.emit('login', this.userName);

				 
				/*
				 * 监听socket事件
				 */

				//储存vue实例
				const vm = this;

				//关闭页面触发
				window.onbeforeunload = function() {  
				   socket.emit('exitChat', vm.userName);
				} 

				//更新人数
				socket.on('updateSize', function(size, name, isExit){
					vm.people_num = size;
					//判断是否是初始化还是有新用户加入
					console.log(name);
					if(name){
						const system_message = isExit ? `${name}退出了聊天室` : `欢迎${name}，加入聊天室` ;
						vm.messages.push({
							system_message: system_message
						})
					}
				});
				//更新其他人发送的消息
				socket.on('updateMessage', function(data){
					vm.messages.push(data)
				});
			})
			
		},	
		methods:{
			sendMessage(){
				//传递
				let data = {
					isMe: false,
					name: this.userName,
					content: this.content
				}
				socket.emit('sendMessage', data );

				//本地增加
				data.isMe = true;
				this.messages.push(data);

				//清空内容
				this.content = '';
			}
		}
	}
</script>

<style>

#chat{
	display: flex;
	flex-flow: column;
	margin-top:1rem;	
	border:0.3rem solid #ccc;
}
#chat .clearfix:after{
	content: '';
	display:block;
	clear:both;
	height:0;
}
/*people_num*/
#chat .people_num{
	height:2rem;
	background: #999;
	line-height:2rem;
	padding-left:0.5rem;
	border:1px solid;
}


#chat .message{
	margin:1rem 0;
	padding:0 0.5rem;
}
#chat .message div.system_message{
	text-align:center;
	font-size:12px;
	color:#333;
}
#chat .message div.mess{
	width:50%;
}
#chat .pull-right{
	float:right;
	text-align:right;
}
#chat p.name{
	text-align:right;
	color:#999;
}

#chat .pull-left p.name{
	text-align:left;
}
#chat .chat_content{
	width:100%;
	height:92%;
	overflow-x:scroll;
	border-bottom: 0.3rem solid #ccc;
}

#chat .chat_input{
	flex:1;
	display: flex;
	align-items: center;
	justify-content: center;
	padding:1rem;
}

#chat .chat_input input[type='text']{
	width:100%;
	height:1.2rem;
	border:0.1rem solid #a79fab;
	padding-left:0.5rem;
}
</style>
