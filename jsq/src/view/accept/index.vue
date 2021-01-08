<template>
	<div class="view_accept">
		<div class="top">
			标的金额:
			<Input v-model="price" style="width: 100px" />
			元
		</div>
		<div class="c_main">
			<ul class="tab">
				<li class="active">财产案件</li>
				<li>离婚案件</li>
				<li>人格权侵害赔偿</li>
			</ul>

			<div class="sx">
				<div class="i">
					<RadioGroup v-model="radio">
						<Radio label="1">
							<span>全部</span>
						</Radio>
						<Radio label="2">
							<span>减半</span>
						</Radio>
					</RadioGroup>
				</div>
				<div class="i">
					<RadioGroup v-model="radio">
						<Radio label="1">
							<span>大写</span>
						</Radio>
						<Radio label="2">
							<span>小写</span>
						</Radio>
					</RadioGroup>
				</div>
				<ul class="is">
					<li class="active">基础设置</li>
					<li>离婚50</li>
					<li>人格权100</li>
				</ul>
			</div>
			
			<div class="btn">
				<span>50.00</span>
				<Button size="large" type="primary">财产案件</Button>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			price: '',
			radio:'1'
		};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="less" scoped="scoped">
.view_accept {
	.c_main {
		margin-top: 20px;
		padding-bottom: 100px;
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
			}
		}
		
		.sx{
			padding: 20px;
			.i{
				display: inline-block;
				border-radius: 2px;
				padding: 5px 10px;
				border: 1px solid #E5E5E5;
				margin-right: 30px;
				text-align: center;
			}
			.is{
				display: inline-block;
				li{
					display: inline-block;
					width: 140px;
					text-align: center;
					margin-right: 30px;
					color: #C0C0C0;
					cursor: pointer;
				}
				.active{
					color: @default-color;
				}
			}
		}
		
		.btn{
			padding: 60px 0;
			text-align: center;
			span{
				display: block;
				margin: auto;
				border-radius: 5px;
				border: 1px solid #CFCFCF;
				padding: 7px;
				width: 260px;
			}
			button{
				margin-top: 20px;
				width: 260px;
			}
		}
	}
}
</style>
