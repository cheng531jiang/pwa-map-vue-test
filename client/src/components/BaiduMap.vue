<template>
  <div class="">
    <el-input type="text" v-model="location" placeholder="请输入地址" class="map-input">
      <el-button slot="append" icon="el-icon-search" @click="searchLocation"></el-button>
    </el-input>

    <div id="container">

    </div>
  </div>

</template>

<script>
export default {
  name: 'baidu-Map',
  data () {
    return {
      location:"",
      bpMap:""
    }
  },
  methods:{
    searchLocation(){
      let locationName = this.location;
      let map = this.bpMap;
      var local = new BMap.LocalSearch(map,
              { renderOptions:{map: map, autoViewport: true}});
      local.search(locationName);
    }
  },
  mounted(){
    let map = new BMap.Map("container");
    this.bpMap = map;
    var point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

html{height:100%}
body{height:100%;margin:0px;padding:0px}
#container{height:1000px}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
.map-input{width:35%;margin:30px 0 10px 10px;position: fixed;z-index:999}
</style>
