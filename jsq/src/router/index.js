import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

const routes = [{
	path: '',
	component: () => import('_c/main/index'),
	children: [{
			path: '',
			redirect: 'accept'
		},
		{
			path: 'accept',
			component: () => import('_v/accept/index'),
			meta: {
				title: "案件受理费计算器",
				title2:"(金额为X，结果为Y，Y有效值保留小数点后两位)",
				noCheak: true
			}
		},
		{
			path: 'application',
			component: () => import('_v/application/index'),
			meta: {
				title: "申请费计算器",
				noCheak: true
			}
		},
		{
			path: 'maintenamce',
			component: () => import('_v/maintenamce/index'),
			meta: {
				title: "保全费计算器",
				noCheak: true
			}
		},
		{
			path: 'revoke',
			component: () => import('_v/revoke/index'),
			meta: {
				title: "申请撤销仲裁裁决",
				noCheak: true
			}
		},
		{
			path: 'interest',
			component: () => import('_v/interest/index'),
			meta: {
				title: "利息计算",
				noCheak: true
			}
		},
		{
			path: 'falsify',
			component: () => import('_v/falsify/index'),
			meta: {
				title: "违约金计算器",
				noCheak: true
			}
		},
	]
}]


const router = new vueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})



export default router
