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
			
		</div>
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				select:0,
				cityList:[
					{
						value:0,
						label:"6个月内"
					},
					{
						value:1,
						label:"6个月至1年"
					},
					{
						value:2,
						label:"1至3年"
					},
					{
						value:3,
						label:"3至5年"
					},
					{
						value:4,
						label:"5年以上"
					},
				]
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_falsify{
		.c_main{
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
				}
			}
			
			
			.lists {
				padding: 10px 20px;
			}
			.list {
				padding: 15px;
				margin-bottom: 15px;
				background-color: rgba(92, 151, 255, 0.06);
				.tt{
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
						& > i {
							color: @default-color;
							margin-left: 10px;
						}
					}
				}
			}
			
			.btns{
				text-align: center;
				padding-bottom: 20px;
				button{
					margin-right: 20px;
				}
			}
			
		}
	}
</style>
