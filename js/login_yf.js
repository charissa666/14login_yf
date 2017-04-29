$(function(){
	//刷新二维码
	function erweimaRefresh(){
		var num = 59;
		var erweimaTimer = setInterval(function(){
			num--;
			if(num == 0){
				clearInterval(erweimaTimer);
				$(".erweimaShade").show();
			};
		},1000);
	};

	//登录方式切换
	$(".loginTit>span").click(function(){
		$(".loginHint").hide();
		$(this).addClass('on').siblings().removeClass('on');
		$(".loginCont").eq($(this).index()).show().siblings().hide();
		if($(this).html() == '扫码登录'){
			erweimaRefresh();
		};
	});

	//点击刷新二维码
	$(".erweimaBtn").click(function(){
		$(".erweimaShade").hide();
		erweimaRefresh();
	});
	
	$('.loginBar>input').focus(function(){
		$(this).parent().addClass('s');
	});
	$('.loginBar>input').blur(function(){
		$(this).parent().removeClass('s');
	});

	//点击帐号登录
	$("#UserBtn").click(function(){
		$(".loginHint").hide();
		var loginName = $("#loginName").val();
		var loginPwd = $("#loginPwd").val();
		if(!loginName && !loginPwd){
			$(".loginHint").show().html('<b>-</b>请输入用户名和密码');
		}else if(!loginName){
			$(".loginHint").show().html('<b>-</b>请输入用户名');
		}else if(!loginPwd){
			$(".loginHint").show().html('<b>-</b>请输入密码');
		}
	});
	
	//点击获取手机验证码
	$(".getCode").click(function(){
		if($(this).html() == '获取验证码'){
			var num = 59;
			$(".getCode").html('59秒后重新获取').css({'cursor':'auto','background':'#c3c7c9'});
			var timer = setInterval(function(){
				num--;
				if(num == 0){
					clearInterval(timer);
					$(".getCode").html('获取验证码').css({'cursor':'pointer','background':'#0e6eb2'});
				}else{
					$(".getCode").html(num+'秒后重新获取').css({'cursor':'auto','background':'#c3c7c9'});
				};
			},1000);
		}
	});

	//点击手机登录
	$("#PhoneBtn").click(function(){
		$(".loginHint").hide();
		var phoneNum = $("#loginPhoneInp").val();
		var phonePwd = $("#loginPhonePwd").val();
		if(!phoneNum && !phonePwd){
			$(".loginHint").show().html('<b>-</b>请输入手机号和验证码');
		}else if(!phoneNum){
			$(".loginHint").show().html('<b>-</b>请输入手机号');
		}else if(!phonePwd){
			$(".loginHint").show().html('<b>-</b>请输入短信验证码');
		}else if(!(/^1(3|4|5|7|8)\d{9}$/.test(phoneNum))){
			$(".loginHint").show().html('<b>-</b>手机号格式错误');
		}
	});
	
	
	$(".par_qq").click(function(){
		$(".codeBar").show();
	})
});
