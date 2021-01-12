<template>
	<div class="view_index_index">
		<div class="header">
			<img src="../../assets/img/logo.png" alt="">
			<span>人民法院</span>
			<span>法官系统</span>
			
			<div class="r">
				<span>搜索</span>
				<Input style="width: 300px;" />
			</div>
		</div>
		
		<div class="tt">
			服务审判执行
		</div>
		
		
		<div class="lists">
			<div class="left">
				<Icon type="ios-arrow-back" />
			</div>
			<ul class="clearfix">
				<li @click="goindex" v-for="item in lists" :style="{backgroundColor:item.color}">
					<img :src="item.icon" :class="item.add?'add':''" alt="">
					<span>{{item.text}}</span>
				</li>
			</ul>
			<div class="right">
				<Icon type="ios-arrow-forward" />
			</div>
		</div>
		
		<div class="listsTwo">
			<ul class="clearfix">
				<li v-for="item in listsTwo">
					<img :src="item.img" alt="">
					<img :src="item.img2" alt="">
					<span>{{item.text}}</span>
				</li>
			</ul>
		</div>
		
		
		<div class="fonter">
			版权所有 人民法院 黔ICP备19000690号 E-MAIL: GYSDAG@SINA.COM 
		</div>
		
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				lists:[
					{
						icon:require( '_a/img/1.png'),
						text:'案件受理费',
						color:'#FF5969'
					},
					{
						icon:require( '_a/img/15.png'),
						text:'申请费',
						color:'#38B4F6'
					},
					{
						icon:require( '_a/img/2.png'),
						text:'保全费',
						color:'#FDC304'
					},
					{
						icon:require( '_a/img/14.png'),
						text:'申请撤销',
						color:'#00C467'
					},
					{
						icon:require( '_a/img/13.png'),
						text:'利息计算',
						color:'#FF7800'
					},
					{
						icon:require( '_a/img/16.png'),
						text:'违约金计算金',
						color:'#B759FF'
					},
					{
						icon:require( '_a/img/11.png'),
						text:'加倍延迟履行金',
						color:'#38B4F6'
					},
					{
						icon:require( '_a/img/12.png'),
						text:'',
						color:'rgba(0,0,0,0.35)',
						add:true
					},
					{
						icon:require( '_a/img/12.png'),
						text:'',
						color:'rgba(0,0,0,0.35)',
						add:true
					},
					{
						icon:require( '_a/img/12.png'),
						text:'',
						color:'rgba(0,0,0,0.35)',
						add:true
					}
				],
				listsTwo:[
					{
						img:require( '_a/img/8.png'),
						img2:require( '_a/img/7.png'),
						text:'服务审判执行'
					},
					{
						img:require( '_a/img/10.png'),
						img2:require( '_a/img/9.png'),
						text:'服务司法行政'
					},
					{
						img:require( '_a/img/6.png'),
						img2:require( '_a/img/4.png'),
						text:'服务人们群众'
					},
					{
						img:require( '_a/img/3.png'),
						img2:require( '_a/img/5.png'),
						text:'法官工具系统'
					},
				]
			}
		},
		methods:{
			goindex(){
				this.$router.push("/accept")
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_index_index{
		width: 100%;
		height: 100%;
		background: url(../../assets/img/bg.png);
		//background: @default-color;/* ie9 */
		box-shadow: 0px 2px 46px 0px rgba(13, 17, 61, 0.38), 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
		color: #fff;
		.header{
			padding: 30px 40px;
			&>img{
				width: 30px;
				height: 30px;
			}
			&>span{
				font-weight: bold;
				font-size: 18px;
				margin-left: 10px;
				position: relative;
				top: -6px;
			}
			span:nth-child(3){
				position: relative;
				&::after{
					content: '';
					position: absolute;
					left: -5px;
					top: 5px;
					width: 2px;
					height: 10px;
					background-color: #fff;
				}
			}
			.r{
				float: right;
				position: relative;
				&>span{
					position: absolute;
					right: 10px;
					top: 50%;
					cursor: pointer;
					transform: translateY(-55%);
					&::after{
						content: '';
						width: 1px;
						height: 70%;
						position: absolute;
						left: -5px;
						top: 20%;
						background-color: #fff;
					}
				}
			}
		}
		
		.tt{
			font-weight: bold;
			font-size: 16px;
			width: 70%;
			padding: 40px 0;
			margin: auto;
		}
		
		.lists{
			width: 70%;
			margin: auto;
			position: relative;
			.left,.right{
				position: absolute;
				left: -80px;
				z-index: 100;
				cursor: pointer;
				top: 50%;
				transform: translateY(-50%) translateX(-100%);
				i{
					transition: all 0.5s;
					color: rgba(255,255,255,0.4);
					font-size: 80px;
				}
				&:hover{
					i{
						color: #fff;
					}
				}
			}
			.right{
				left: auto;
				right: -80px;
				transform: translateY(-50%) translateX(100%);
			}
			ul{
				li{
					position: relative;
					text-align: center;
					float: left;
					width: 17.6%;
					padding: 30px 0;
					border-radius: 5px;
					margin-right: 3%;
					transition: all 0.5s;
					cursor: pointer;
					margin-bottom: 30px;
					img{
						display: block;
						width: 45px;
						margin: auto;
					}
					.add{
						position: relative;
						top: 25px;
						left: -5px;
					}
					span{
						display: block;
						margin-top: 30px;
						font-weight: bold;
						height: 30px;
					}
					&:hover{
						transform: scale(1.1);
					}
				}
				li:nth-child(5n){
					margin: 0;
				}
			}
		}
		
		.listsTwo{
			width: 70%;
			padding: 40px 0;
			margin: auto;
			ul{
				text-align: center;
				li{
					display: inline-block;
					text-align: center;
					cursor: pointer;
					margin-right: 40px;
					img{
						display: block;
						width: 100px;
					}
					img:nth-child(2){
						display: none;
					}
					span{
						display: block;
						padding-top: 10px;
					}
					&:hover{
						img:nth-child(1){
							display: none;
						}
						img:nth-child(2){
							display: block;
							//transform: scale(1.6);
						} 
					}
				}
			}
		}
		
		.fonter{
			text-align: center;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			padding: 30px 0;
		}
		
	}
</style>
<style lang="less">
	.view_index_index{
		.header{
			.r{
				.ivu-input-wrapper{
					input{
						color: #fff;
						background: none;
						border-color: #fff;
						border-radius: 20px;
						padding-right: 50px;
					}
					i{
						color: #fff;
						font-size: 20px;
					}
				}
			}
		}
	}
</style>
