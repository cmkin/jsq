<template>
	<div class="components_main">
		
		<div class="left">
			<div class="logo">
				<img src="../../assets/img/logo.jpg" alt="">
				<span>人民法院</span>
			</div>
			<Menu ref="menu" @on-select="mSelect" :active-name="activeName">
				<MenuItem :to="item.link"  :name="index" v-for="item,index in MenuList">
					<Icon :type="item.icon" />
					{{item.text}}
				</MenuItem>
			</Menu>
		</div>
		
		
		<div class="right">
			<div class="header">
				<span>{{getTitle.title}}</span>
				<i v-if="getTitle.title2">{{getTitle.title2}}</i>
				<div class="r">
					<Icon type="md-power" size="18" />退出
				</div>
			</div>
			
			<router-view class="view"></router-view>
		</div>
		
	
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeName:0,
			MenuList:[
				{
					link:'/accept',
					icon:'ios-paper',
					text:'案件受理费'
				},
				{
					link:'/application',
					icon:'ios-clipboard',
					text:'申请费'
				},
				{
					link:'/maintenamce',
					icon:'ios-paper',
					text:'保全费'
				},
				{
					link:'/revoke',
					icon:'ios-share-alt',
					text:'申请撤销'
				},
				{
					link:'/interest',
					icon:'md-medkit',
					text:'利息计算'
				},
				{
					link:'/falsify',
					icon:'ios-briefcase',
					text:'违约金计算器'
				},
				{
					link:'/double',
					icon:'ios-paper',
					text:'加倍延迟履行金'
				}
			],
			title:'',
			title2:''
		};
	},
	watch:{
		
	},
	computed:{
		getTitle(){
			return this.$route.meta
		}
	},
	mounted() {
		this.$nextTick(()=>{
			if(localStorage.getItem('activeName')){
				console.log(localStorage.getItem('activeName'))
				this.activeName = Number(localStorage.getItem('activeName'))
				this.$refs.menu.updateActiveName() 
			}
		})
	},
	methods: {
		mSelect(value){
			localStorage.setItem('activeName',value)
		}
	}
};
</script>

<style lang="less" scoped="scoped">
	.components_main{
		.left{
			position: fixed;
			top: 0;
			left: 0;
			width:240px;
			height: 100vh;
			z-index: 1000;
			background-color: @default-color;
			.logo{
				padding: 10px;
				padding-left: 15%;
				padding-top: 20px;
				box-sizing: border-box;
				img{
					width: 32px;
					height: 32px;
					display: inline-block;
					margin-right: 10px;
					position: relative;
					top: 5px;
				}
				span{
					color: #fff;
					font-size: 24px;
				}
			}
		}
		.right{
			width: 100%;
			box-sizing: border-box;
			padding-left: 240px;
			.header{
				position: fixed;
				top: 0;
				left: 0;
				z-index: 100;
				width: 100%;
				box-sizing: border-box;
				padding: 20px;
				padding-left: 260px;
				background-color: #fff;
				box-shadow: 0 1px 2px rgba(0,0,0,0.1);
				&>span{
					color: #2F2E2E;
					font-size: 18px;
					font-weight: bold;
				}
				&>i{
					color: #CCCCCC;
					margin-left: 10px;
				}
				.r{
					cursor: pointer;
					color: #C7C7C7;
					float: right;
					.hover();
					i{
						margin-right: 5px;
					}
				}
			}
			.view{
				padding: 20px;
				padding-top: 90px;
				background-color: #F1F1F1;
			}
		}
	}
</style>
<style lang="less">
	.components_main{
		.left{
			.ivu-menu{
				width: 100% !important;
				background: none !important;
				color: rgba(255,255,255,0.6);
			}
			.ivu-menu-vertical.ivu-menu-light :not(.ivu-menu-submenu).ivu-menu-item-active{
				color: #fff !important;
				background: rgba(255, 255, 255, 0.15);
				&::after{
					background: #fff;
					width: 2px;
					left: 0;
					right: auto;
				}
			}
			.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover{
				color: #fff;
			}
		}
		.right{
			.c_main{
				background-color: #fff;
				border-radius: 10px;
			}
		}
	}
</style>
