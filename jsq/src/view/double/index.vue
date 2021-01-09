<template>
	<div class="view_double">
		<div class="tabs">
			<span @click="changeSetp(0)" :class="(step==0 || step==2 || step==1)?'active':''">计算区</span>
			<span @click="changeSetp(3)" :class="step==3?'active':''">统计区</span>
		</div>
		
		<div v-if="step==0 || step==2">
		
		<div class="c_main">
			<ul class="tab">
				<li class="active">借款事实</li>
			</ul>
			
			
			<div class="lists">
				<ul class="list clearfix">
					<li>
						<span><i>*</i>债务总额：</span>
						<div class="r" style="width: 60%;">
							<Input style="width: 85%;" placeholder="" />
							<i>元</i>
						</div>
					</li>
					<li>
						<span>债务履行方式：</span>
						<div class="r">
							<RadioGroup type="button">
								<Radio label="一次履行"></Radio>
								<Radio label="分期履行"></Radio>
							</RadioGroup>
						</div>
					</li>
				</ul>
				
				<ul class="list clearfix">
					<li>
						<span>债务清债顺序：</span>
						<div class="r">
							<Select v-model="select"  style="width:150px">
							  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
						</div>
					</li>
					<li>
						<span><i>*</i>一般债务利率：</span>
						<div class="r">
							<Select v-model="select"  style="width:150px">
							  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
						</div>
					</li>
				</ul>
				
				<ul class="list clearfix">
					<li>
						<span><i>*</i>债务开始时间：</span>
						<div class="r">
							<DatePicker type="date" placeholder=""></DatePicker>
						</div>
					</li>
					<li>
						<span><i>*</i>债务结束时间：</span>
						<div class="r">
							<DatePicker type="date" placeholder=""></DatePicker>
						</div>
					</li>
				</ul>
				
				
				<ul class="list clearfix">
					<li style="width: 100%;">
						<span><i>*</i>人员借数：</span>
						<div class="r" style="width: 60%;">
							<Input style="width: 85%;" placeholder="" />
						</div>
						<i @click="flag.lv = true" style="float: right;cursor: pointer;color: #5C97FF;">查看利率参照表</i>
					</li>
				</ul>
				
				
			</div>
					
		
		</div>
		
		<div class="c_main">
			<ul class="tab">
				<li class="active">延迟履行利息计算区间</li>
			</ul>
			
			<div class="lists">
				<ul class="list clearfix" style="position: relative;padding: 40px;">
					<li style="width: 100%;margin-bottom: 15px;">
						<span><i>*</i>债务开始时间：</span>
						<div class="r" style="width: 600px;">
							<DatePicker type="date" placeholder="" style="margin-right: 20px;"></DatePicker>
							<DatePicker type="date" placeholder="" style="margin-right: 20px;"></DatePicker>
							<Button type="success" icon="ios-add-circle-outline">新增放款</Button>
						</div>
					</li>
					<li style="width: 100%;margin-bottom: 15px;">
						<span>加借债务利至：</span>
						<div class="r">
							<Input style="width: 85%;" placeholder="" />
							<i>元</i>
						</div>
					</li>
					<li style="width: 100%;margin-bottom: 15px;">
						<span>加借债务利至：</span>
						<div class="r">
							
						</div>
					</li>
					<li class="tips">
						<ul>
							<li class="tips_t">
								<i></i>
								<span>本次执行结果</span>
							</li>
							<li>
								本次清偿本金：10000元</br>
								本次清偿利息：0元</br>
								本次尚欠本金：30000元</br> 
								本次尚欠利息：2323.23元
							</li>
						</ul>
					</li>
				</ul>
			</div>
			
			
			<div class="btns">
				<Button type="primary"  @click="changeSetp(2)">计算</Button>
				<Button type="success">应付执行标的额适试算</Button>
				<Button>重置</Button>
			</div>
			
		</div>
		
		<div class="c_main" style="padding-bottom: 30px;" v-if="step==2">
			<ul class="tab">
				<li class="active">计算结果</li>
			</ul>
			
			<ul class="res_b">
				<li class="m clearfix">
					<span>
						<i>应付执行标的额：</i>293749.00元
					</span>
					<span>
						<i>清债本金额：</i>3999元
					</span>
					<span>
						<i>清债利息额：</i>2309.00元
					</span>
					<span>
						<i>尚欠本金额：</i>2309.00元
					</span>
					<span>
						<i>尚欠利息额：</i>3000元
					</span>
				</li>
				<li style="margin-bottom: 10px;">迟延履行期间天数757天，扣除天数0天，有效计息天数757天；</li>
				<li>迟延履行开始前的一股债务天数1100天</li>
			</ul>
			
			
			<div class="btns" style="padding-top: 60px;">
				<Button type="primary">保存结果</Button>
				<Button type="success" @click="changeSetp(1)">查看计算明细</Button>
			</div>
			
		</div>
		
		<div class="c_main" style="padding-bottom: 0px;">
			<ul class="tab">
				<li class="active">相关法律法规</li>
			</ul>
			<div class="cc">
				中华人民共和国民事诉讼法（节录）<br />
				最高人民法院关于执行工作中如何计算延迟履行期间的债务利息等问题的批复<br />
				最高人民法院关于执行程序中计算延迟履行期间的债务利息适用法律法规若干问题的解释
			</div>
		</div>
		</div>
		
		
		<div v-if="step==1">
			
			<div class="c_main">
				<ul class="tab">
					<li class="active" style="font-size: 14px;color: #666;font-weight: normal;text-align: left;padding-right: 30px;">
						债务总额为50000元，一股债务利至（年利率）为定期3个月存款利至，加倍债务利至为0.0175%（已利至），
						债务开始日期为2015-12-01，迟延履行开始日期为2018-12-05，债务结束日期为，2020-12-30，
						计息明细如下：
					</li>
				</ul>
				<ul class="js_res">
					<li class="one">
						<span>计算结果</span>
						<div>
							迟延履行期间天数757天，扣除天数0天，有效计息天数757天；<br />
							迟延履行开始前的一股债务天数1100天
						</div>
					</li>
					<li class="two">
						<span>计算明细</span>
						<div>
							<p>迟延履行开始的一般债务利息=39790.23元</p>
							<ul class="clearfix">
								<li class="tts clearfix">
									<span>执行次数</span>
									<span>延迟履行利息计算区间</span>
									<span>有效计息天数（天）</span>
									<span>迟延履行期间一般债务利息</span>
									<span>迟延履行期间加倍债务利息</span>
									<span>迟延履行期间开始前一般债务利息</span>
									<span>清偿本金</span>
									<span>清偿利息</span>
									<span>尚欠本金</span>
									<span>尚欠利息</span>
								</li>
								<li class="clearfix">
									<span>1</span>
									<span>2018.12.05-2020.12.30</span>
									<span>757</span>
									<span>12121.123</span>
									<span>12121.123</span>
									<span>12121.123</span>
									<span>12121.123</span>
									<span>12121.123</span>
									<span>12121.123</span>
									<span>12121.123</span>
								</li>
							</ul>
						</div>
					</li>
					
					<li class="three">
						<span>计算公式:</span>
						<div>
							计算公式 <br />
							1.迟延履行期间的一般债务利息=尚未清偿的金钱债务×一般债务利率×迟延履行期间有效计息天数 <br />
							2.迟延履行期间的加倍债务利息=尚未清偿的金钱债务×加倍债务利率×迟延履行期间有效计息天数 <br />
							3.迟延履行开始前的一般债务利息=债务总额×一般债务利率×迟延履行开始前的一般债务天数 <br />
							4.应付执行标的额=债务金额+迟延履行期间的一般债务利息+迟延履行期间的加倍债务利息+迟延履行开始前的一般债务利息 
						</div>
						<div>
							计算依据:<br />
							1.2014年8月1日之前按照《关于适用《中华人民共和国民事诉讼法》若干问题的意见》第294条:民事诉讼法第二百二十九条规定的加倍支付迟延履行期间的债务利息，是指在按银行同期贷款最高利率计付的债务利息上增加一倍。 也就是说加倍利率=2*同期贷款基准利率； 	
						</div>
					</li>
				</ul>
				
				<div class="btns" style="padding-top: 60px;">
					<Button type="primary">打印</Button>
					<Button type="success" @click="changeSetp(2)">返回</Button>
				</div>
				
			</div>
			
		</div>
		
		
		
		<div v-if="step==3">
			<div class="c_main">
				<ul class="tab">
					<li class="active">案件执行标的额情况汇总</li>
				</ul>
				<ul class="js_res">
					<li class="four">
						<Input style="width:200px;margin-right: 20px;" placeholder="" />
						<Select v-model="select" style="width:200px;">
							<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
						<div style="float: right;">
							<Select v-model="select" style="width:200px;margin-right: 40px;">
								<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
							<span>人民币单位/元</span>
						</div>
						
					</li>
					<li class="two">
						<div>
							<ul class="clearfix">
								<li class="tts clearfix">
									<span>序号</span>
									<span>案号</span>
									<span>执行标的额</span>
									<span>是否还清</span>
									<span>清偿本金额</span>
									<span>清偿利息额</span>
									<span>尚欠本金额</span>
									<span>计算来源</span>
									<span>备注</span>
									<span>操作</span>
								</li>
								<li class="clearfix">
									<span>1</span>
									<span>2018.12.05-2020.12.30</span>
									<span>757</span>
									<span>12121.123</span>
									<span>12121.123</span>
									<span>12121.123</span>
									<span>12121.123</span>
									<span>12121.123</span>
									<span>12121.123</span>
									<span>12121.123</span>
								</li>
							</ul>
						</div>
					</li>
				</ul>
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
	export default{
		data(){
			return{
				flag:{
					lv:false
				},
				step:0,
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
		methods:{
			changeSetp(type){
				this.step  = type
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_double{
		.tabs{
			span{
				display: inline-block;
				padding: 0 10px;
				cursor: pointer;
				color: #C7C7C7;
			}
			.active{
				color: #666;
			}
			span:first-child{
				font-weight: bold;
			}
			span:last-child{
				
				border-left: 1px solid #C7C7C7;
			}
		}
		
		
		.c_main {
			margin-top: 20px;
			padding-bottom: 100px;
			.tab {
				border-bottom: 1px solid #e0e0e0;
				li {
					display: inline-block;
					padding: 15px 0;
					
					cursor: pointer;
					text-align: center;
				}
				.active {
					color: @default-color;
					font-size: 16px;
					padding-left: 40px;
					font-weight: bold;
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
			.tips{
				position: absolute;
				right: 30px;
				top: 50%;
				width: 200px;
				transform: translateY(-50%);
				background-color: #C5D6FD;
				padding: 20px 0;
				padding-left: 30px;
				border-radius: 5px;
				color: #fff;
				.tips_t{
					margin-bottom: 5px;
				}
			}
		
			&>li {
				float: left;
				width: 50%;
		
				span {
					display: inline-block;
					width: 130px;
					text-align: right;
					padding-right: 10px;
					box-sizing: border-box;
					i{
						color: red;
						margin-right: 5px;
						position: relative;
						top: 3px;
					}
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
		
		.res_b{
			color: #4A4A4A;
			padding: 20px;
			padding-left: 50px;
			.m{
				span{
					float: left;
					width: 25%;
					i{
						display: inline-block;
						width: 130px;
						margin-bottom: 10px;
						padding-right: 10px;
						text-align: right;
					}
				}
			}
		}
		.cc{
			color: #C3C3C3;
			padding: 20px  60px;
		}
		
		.js_res{
			padding: 20px 30px;
			&>li{
				margin-bottom: 20px;
				&>span{
					position: relative;
					display: block;
					margin-bottom: 20px;
					font-size: 15px;
					font-weight: bold;
					padding-left: 18px;
					&::after{
						content: '';
						position: absolute;
						left: 0;
						top: 3px;
						width: 7px;
						height: 18px;
						background-color: @default-color;
						border-radius: 4px;
					}
				}
			}
			.one{
				&>div{
					color: #4A4A4A;
				}
			}
			.two{
				&>div{
					width: 100%;
					overflow-x: auto;
					&>p{
						color: #4A4A4A;
						margin-bottom: 15px;
					}
					ul{
						border-left: 1px solid #9B9B9B;
						border-top: 1px solid #9B9B9B;
						width: 2300px;
						li{
							text-align: center;
							span{
								float: left;
								width: 10%;
								border-right: 1px solid #9B9B9B;
								border-bottom: 1px solid #9B9B9B;
								overflow: hidden;
								
							}
						}
					}
				}
			}
			
			.three{
				color: #4F4F4F;
				div:last-child{
					margin-top: 30px;
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
