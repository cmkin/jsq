<template>
	<div class="view_interest">
		<div class="c_main">
			<ul class="tab">
				<li class="active">借款事实</li>
			</ul>

			<div class="lists">
				<ul class="list clearfix">
					<li>
						<span>电子邮箱：</span>
						<div class="r">
							<Input style="width: 85%;" placeholder="" />
							<i>元</i>
						</div>
					</li>
					<li>
						<span>还款方式：</span>
						<div class="r">
							<RadioGroup type="button">
								<Radio label="先息后本"></Radio>
								<Radio label="先本后息"></Radio>
							</RadioGroup>
						</div>
					</li>
				</ul>
				<ul class="list clearfix">
					<li>
						<span>约定借出日期：</span>
						<div class="r">
							<DatePicker type="date" placeholder=""></DatePicker>
						</div>
					</li>
					<li>
						<span>约定还款日期：</span>
						<div class="r">
							<DatePicker type="date" placeholder=""></DatePicker>
						</div>
					</li>
				</ul>
				<ul class="list clearfix">
					<li>
						<span>终息日期：</span>
						<div class="r">
							<DatePicker type="date" placeholder=""></DatePicker>
						</div>
					</li>
					<li>
						<span>利率换算规则：</span>
						<div class="r">
							<RadioGroup type="button">
								<Radio label="一年360天"></Radio>
								<Radio label="一年365天"></Radio>
							</RadioGroup>
						</div>
					</li>
				</ul>
				<ul class="list clearfix">
					<li style="width: 100%;margin-bottom: 10px;">
						<span>约定借期内利至：</span>
						<div class="r">
							<RadioGroup type="button">
								<Radio label="自行填写"></Radio>
								<Radio label="银行同期贷款利率（年利率）"></Radio>
							</RadioGroup>
						</div>
						<i @click="flag.lv = true" style="float: right;cursor: pointer;color: #5C97FF;margin-top: 20px;">查看利率参照表</i>
					</li>
					<li style="width: 100%;">
						<span></span>
						<div class="r">
							倍数:
							<Input  placeholder="" style="width: 100px;margin-right: 10px;" />
							档次:
							 <Select v-model="select"  style="width:100px">
							   <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							 </Select>
						</div>
					</li>
				</ul>
				
				<ul class="list clearfix">
					<li style="width: 100%;margin-bottom: 10px;">
						<span>约定逾期利率：</span>
						<div class="r">
							<RadioGroup type="button">
								<Radio label="自行填写"></Radio>
								<Radio label="银行同期贷款利率（年利率）"></Radio>
							</RadioGroup>
						</div>
					</li>
					<li style="width: 100%;">
						<span></span>
						<div class="r">
							倍数:
							<Input  placeholder="" style="width: 100px;margin-right: 10px;" />
							档次:
							 <Select v-model="select"  style="width:100px">
							   <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							 </Select>
						</div>
					</li>
				</ul>
				<ul class="list clearfix" v-for="item in fk">
					<li>
						<span>收到借款金额：</span>
						<div class="r">
							<Input style="width: 85%;" placeholder="" />
							<i>元</i>
						</div>
					</li>
					<li>
						<span>收到款项日期：</span>
						<div class="r">
							<DatePicker type="date" placeholder=""></DatePicker>
						</div>
						<Button v-if="item == fk" type="success" style="float: right;margin-right: 20px;" @click="fk++">新增放款</Button>
					</li>
				</ul>
				
			</div>
			
		</div>
		
		<div class="c_main">
			<ul class="tab">
				<li class="active">实际还款事实</li>
				<Button type="success" @click="hk++" style="float: right;margin-right: 20px;margin-top: 12px;">新增还款</Button>
			</ul>
			<div class="lists" v-for="item in hk">
				
				<ul class="list clearfix">
					<li class="tt">第{{item}}次还款</li>
					<li style="margin-bottom: 15px;">
						<span>还款金额：</span>
						<div class="r">
							<Input style="width: 85%;" placeholder="" />
							<i>元</i>
						</div>
					</li>
					<li style="margin-bottom: 15px;">
						<span>实际还款日期：</span>
						<div class="r">
							<DatePicker type="date" placeholder=""></DatePicker>
						</div>
					</li>
					<li>
						<span>计息天数：</span>
						<div class="r">
							<Input style="width: 85%;" placeholder="" />
							<i>天</i>
						</div>
					</li>
					<li>
						<span>预期天数：</span>
						<div class="r">
							<Input style="width: 85%;" placeholder="" />
							<i>天</i>
						</div>
					</li>
				</ul>
			</div>
			
			<div class="btns">
				<Button type="primary">计算</Button>
				<Button>重置</Button>
				<Button type="success">保存结果</Button>
			</div>
		
		</div>
		
		<div class="c_main">
			<ul class="tab">
				<li class="active">计算结果</li>
			</ul>
			<ul class="res clearfix">
				<li>
					<span>还款总额：</span>
					<i>0元</i>
				</li>
				<li>
					<span>还款方式：</span>
					<i>先息后本</i>
				</li>
				<li>
					<span>约定借出日期：</span>
					<i>2016-12-22</i>
				</li>
				<li>
					<span>约定还款日期：</span>
					<i>2016-12-22</i>
				</li>
				<li>
					<span>终息日期：</span>
					<i>2016-12-22</i>
				</li>
				<li>
					<span>利至换算规则：</span>
					<i>一年360天</i>
				</li>
				<li>
					<span>约定借期内利至：</span>
					<i>17.4%（4倍6个月档次的银行间期贷款利至）</i>
				</li>
				<li>
					<span>约定逾期利至：</span>
					<i>17.4%（4倍6个月档次的银行间期贷款利至）</i>
				</li>
			</ul>
			<ul class="res clearfix" style="background-color: rgba(143, 143, 143, 0.0692);">
				<li class="tt">借款事实：</li>
				<li>
					<span>借款金额（总额）：</span>
					<i>0元</i>
				</li>
				<li>
					<span>还款方式：</span>
					<i>先息后本</i>
				</li>
				<li>
					<span>约定借出日期：</span>
					<i>2016-12-22</i>
				</li>
				<li>
					<span>约定还款日期：</span>
					<i>2016-12-22</i>
				</li>
				<li>
					<span>终息日期：</span>
					<i>2016-12-22</i>
				</li>
				<li>
					<span>利至换算规则：</span>
					<i>一年360天</i>
				</li>
				<li>
					<span>约定借期内利至：</span>
					<i>17.4%（4倍6个月档次的银行间期贷款利至）</i>
				</li>
				<li>
					<span>约定逾期利至：</span>
					<i>17.4%（4倍6个月档次的银行间期贷款利至）</i>
				</li>
			</ul>
			
			<ul class="res clearfix" style="background-color: rgba(143, 143, 143, 0.0692);">
				<li class="tt">截止到终息日期为止的实际放款事实：</li>
				<li style="width: 100%;padding: 0 5%;">
					<ul class="table clearfix">
						<li class="title clearfix">
							<span>实际放款次数</span>
							<span>收到借款金额（元）</span>
							<span>收到款项日期</span>
						</li>
						<li class="clearfix" v-for="item in 5">
							<span>5</span>
							<span>100</span>
							<span>2020-10-5</span>
						</li>
					</ul>
				</li>
				
			</ul>
			
			<ul class="res clearfix" style="background-color: rgba(143, 143, 143, 0.0692);padding-bottom: 40px;">
				<li class="tt">截止到终息日期为止：</li>
				<li>
					<span>还款总额：</span>
					<i>0元</i>
				</li>
				<li>
					<span>已还本金：</span>
					<i>先息后本</i>
				</li>
				<li>
					<span>剩余未还本金：</span>
					<i>2016-12-22</i>
				</li>
				<li>
					<span style="width: 150px;">剩余未还借期内利息：</span>
					<i>2016-12-22</i>
				</li>
				<li>
					<span>剩余未还本息合计：</span>
					<i>2016-12-22</i>
				</li>
			</ul>
			
			<div class="btns" style="padding-top: 20px;">
				<Button type="primary">导出word文档</Button>
				<Button type="success">打印清单</Button>
			</div>
					
			
		</div>
		
		
		<div class="alert" v-if="flag.lv" @click="flag.lv = false">
			<div class="main" @click.stop>
				<div class="title">
					<span>利率参照表</span>
					<Icon @click="flag.lv = false" type="md-close" />
				</div>
				<div class="content">
					<div class="tables">
						<p>贷款利率</p>
						<ul>
							<li class="clearfix">
								<span>更新日期</span>
								<span>6个月内(%)</span>
								<span>6个月至1年(%)</span>
								<span>1至3年(%)</span>
								<span>3至五年(%)</span>
								<span>5年以上(%)</span>
							</li>
							<li class="clearfix" v-for="item in 5">
								<span>2018-10-24</span>
								<span>4.35</span>
								<span>4.35</span>
								<span>4.35</span>
								<span>4.35</span>
								<span>4.35</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			fk:1,
			hk:1,
			flag:{
				lv:false
			},
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
		};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="less" scoped="scoped">
.view_interest {
	.c_main {
		margin-top: 20px;
		.tab {
			border-bottom: 1px solid #e0e0e0;
			li {
				display: inline-block;
				padding: 15px 0;
				width: 140px;
				cursor: pointer;
				text-align: center;
			}
			.active {
				color: @default-color;
				font-weight: bold;
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
		
		.res{
			padding: 30px 0;
			padding-bottom: 0;
			padding-left: 5%;
			.tt{
				font-size: 16px;
				font-weight: bold;
				width: 100%;
			}
			&>li{
				float: left;
				box-sizing: border-box;
				width: 50%;
				margin-bottom: 10px;
				span {
					display: inline-block;
					width: 140px;
					text-align: right;
					padding-right: 10px;
					box-sizing: border-box;
				}
				i{
					display: inline-block;
				}
			}
			
			.table{
				margin-top: 10px;
				border-bottom: 1px solid #9B9B9B;
				&>li{
					border-top: 1px solid #9B9B9B;
					border-left: 1px solid #9B9B9B;
					span{
						display: inline-block;
						float: left;
						width: 33.33%;
						text-align: center;
						padding: 5px 0;
						color: rgba(83, 83, 83, 1);
						border-right: 1px solid #9B9B9B;
					}
				}
				.title{
					
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

	.alert{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10000000;
		background-color: rgba(0,0,0,0.5);
		.main{
			position: absolute;
			top: 50%;
			left: 50%;
			background-color: #fff;
			border-radius: 10px;
			width: 800px;
			overflow: hidden;
			transform: translate(-50%,-50%);
			.title{
				background-color: @default-color;
				padding: 20px;
				color: #fff;
				span{
					font-size: 16px;
				}
				i{
					float: right;
					font-size: 18px;
					cursor: pointer;
				}
			}
			
			.content{
				padding: 20px;
			}
			
		}
		
		.tables{
			&>p{
				display: inline-block;
				background-color: #E7E7E7;
				color: @default-color;
				padding: 5px 10px;
			}
			ul{
				border: 1px solid #E7E7E7;
				border-top: none;
				li{
					span{
						float: left;
						width: 16.66%;
						padding:8px;
					}
				}
				li:first-child{
					span{
						color: #2B2B2B;
					}
				}
				li:nth-child(odd){
					background-color: #E7E7E7;
				}
			}
		}
		
	}
	
}
</style>
