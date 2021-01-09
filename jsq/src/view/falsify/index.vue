<template>
	<div class="view_falsify">
		<div class="c_main">
			<ul class="tab">
				<li class="active">借款事实</li>
			</ul>


			<div class="lists">
				<ul class="list clearfix">
					<li style="width: 100%;">
						<span>债务金额：</span>
						<div class="r" style="width: 60%;">
							<Input style="width: 85%;" placeholder="" />
							<i>元</i>
						</div>
					</li>
				</ul>
				<ul class="list clearfix">
					<li style="width: 100%;">
						<span>利率选择：</span>
						<div class="r" style="width: 60%;">
							<Select v-model="select" style="width: 85%;">
								<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
						</div>
					</li>
				</ul>
				<ul class="list clearfix">
					<li style="width: 100%;">
						<span>约定利率：</span>
						<div class="r" style="width: 60%;">
							<Input style="width: 85%;" placeholder="" />
							<i>%</i>
						</div>
					</li>
				</ul>
				<ul class="list clearfix">
					<li>
						<span>开始时间：</span>
						<div class="r">
							<DatePicker type="date" placeholder=""></DatePicker>
						</div>
					</li>
					<li>
						<span>结束时间：</span>
						<div class="r">
							<DatePicker type="date" placeholder=""></DatePicker>
						</div>
					</li>
				</ul>
			</div>

			<div class="btns">
				<Button type="primary">计算</Button>
				<Button>重置</Button>
			</div>
			
			
			
			<div class="res">
				<ul>
					<li class="title">
						计算结果
					</li>
					<li>
						<span>逾期违约金：</span>
						<i class="wyj">23947.43</i>
						<Button type="primary" @click.navtive="copy('23947.43')">一键复制</Button>
					</li>
					<li>
						<span>逾期天数：</span>
						<i class="wyj">32</i>
						<Button type="primary" @click.navtive="copy('23947.43')">一键复制</Button>
					</li>
				</ul>
				<ul>
					<li class="title">
						计算说明
					</li>
					<li>
						逾期违约金=债务“逾期时间”日利率或月利率或年利率
					</li>
					<li>
						年利率=12X月利率=360X日率
					</li>
				</ul>
			</div>

		</div>


	</div>
</template>

<script>
	import Clipboard from 'clipboard';
	export default {
		data() {
			return {
				select: 0,
				cityList: [{
						value: 0,
						label: "6个月内"
					},
					{
						value: 1,
						label: "6个月至1年"
					},
					{
						value: 2,
						label: "1至3年"
					},
					{
						value: 3,
						label: "3至5年"
					},
					{
						value: 4,
						label: "5年以上"
					},
				]
			}
		},
		mounted() {

		},
		methods: {
			copy(text) {
				
				var clipboard = new Clipboard(".view_falsify",{
					text: () =>{
						return text
					}
				})
				clipboard.on('success', e => {
					 this.$Message.success("复制成功"); //这里你如果引入了elementui的提示就可以用，没有就注释即可
					// 释放内存  
					clipboard.destroy()
				})
				clipboard.on('error', e => {
					// 不支持复制  
					 this.$Message.error('该浏览器不支持自动复制')
					// 释放内存  
					clipboard.destroy()
				})
			},
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_falsify {
		.c_main {
			margin-top: 20px;
			padding-bottom: 100px;

			.tab {
				border-bottom: 1px solid #e0e0e0;

				li {
					display: inline-block;
					padding: 15px 0;
					width: 140px;
					font-weight: bold;
					cursor: pointer;
					text-align: center;
				}

				.active {
					color: @default-color;
					font-size: 16px;
				}
			}


			.lists {
				padding: 10px 20px;
			}

			.list {
				padding: 15px;
				margin-bottom: 15px;
				background-color: rgba(92, 151, 255, 0.06);

				.tt {
					font-size: 16px;
					font-weight: bold;
					width: 100%;
				}

				li {
					float: left;
					width: 50%;

					span {
						display: inline-block;
						width: 130px;
						text-align: right;
						padding-right: 10px;
						box-sizing: border-box;
					}

					.r {
						display: inline-block;

						&>i {
							color: @default-color;
							margin-left: 10px;
						}
					}
				}
			}

			.btns {
				text-align: center;
				padding-bottom: 20px;

				button {
					margin-right: 20px;
				}
			}
			
			
			.res{
				
				ul{
					margin-bottom: 15px;
					background-color: rgba(143, 143, 143, 0.067);
					padding: 20px;
					margin: 20px;
					padding-left: 40px;
				}
				.title{
					font-size: 16px;
					font-weight: bold;
					color: #6B6C6D;
				}
				li{
					margin-bottom: 10px;
					color: #B5B5B5;
					span{
						display: inline-block;
						width: 120px;
						padding-right: 10px;
						text-align: right;
						
					}
					i{
						display: inline-block;
						color: @default-color;
						margin-right: 10px;
						width: 150px;
					}
				}
			}
			
		}
	}
</style>
