<template>
	<div id="app">
		<router-view/>
  	</div>
</template>

<script>
export default {
  name: 'App',
  watch: {
  	$route: {
  		handler (route) {
  			if (route.path !== "/index") {
  				// const loading = document.getElementById("loading");
  				// if (loading) loading.parentNode.removeChild(loading);
  			}
  		},
  		deep: true,
  		immediate: true
  	}
  }
}
</script>

<style lang="scss" scope>
body {
	position: relative;
	width: 100%;
	height: auto;
	margin: 0;
	padding: 0;

}
#app {
	position: relative;
	width: 100%;
	height: auto;
	margin: 0;
	padding: 0;
}
* {
	box-sizing: border-box;
}
</style>
