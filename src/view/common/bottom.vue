<template>
  <footer class="footer">
		<router-link :to="{name:'index'}" tag="div" active-class="active">
			<span class="iconfont">&#xe828;</span>
			<p>首页</p>
		</router-link>
		<router-link :to="{name:'collect'}" tag="div" active-class="active">
			<span class="iconfont">&#xe6a0;</span>
			<p>收藏</p>
		</router-link>
		<div class="iconfont play" v-if="$store.state.play" @click="handlePlay">
			&#xe65a;
		</div>
		<div class="iconfont play pause" v-if="!$store.state.play"  @click="handlePlay" >
			&#xe694;
		</div>
		<router-link :to="{name:'community'}" tag="div" active-class="active">
			<span class="iconfont">&#xe7ce;</span>
			<p>社区</p>
		</router-link>
		<router-link :to="{name:'person'}" tag="div" active-class="active">
			<span class="iconfont">&#xe6b8;</span>
			<p>我的</p>
		</router-link>
  </footer>
</template>

<script>
export default {
	data(){
		return{
			
		}
	},
	getters:{
		audioDOM(){
			return this.$store.state.audioDOM
		}
	},
	methods:{
		handlePlay(){
			
			//根据状态来看是否播放和暂停
			if($store.state.play){
				audioDOM.play();
			}else{
				audioDOM.pause();
			}
			this.$store.commit('CHANGEPLAY');
		}
	}
}
</script>

<style lang="less" scoped>
@foot-height:2.5rem;
footer{
	box-sizing: border-box;
	border-top:1px solid #cbcbcb;
	position: fixed;
	bottom:0;
	left: 0;
	width: 100%;
	height: @foot-height;
	display: flex;
	justify-content: space-around;
	padding-top: 0.3rem;
	div{
		text-align: center;
		p{
			margin:0;
			margin-top: 0.2rem;
			font-size: 0.3rem;
		}
	}
	div.active{
		color:#5e61f8;
	}
	div.play{
		font-size: 1.5rem;
		color: #f2ca27;
		width: 2rem;
		height: 2rem;
		line-height: 2rem;
		cursor: pointer;
	}
}
.pause{
	animation: rotation 3s linear infinite;
}
@keyframes rotation{
	from{
		transform-origin:center center;
		transform:rotateZ(0deg);
	}
	to{
		transform-origin:center center;
		transform:rotateZ(360deg);
	}
}
</style>

