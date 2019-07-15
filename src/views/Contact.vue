<template>
    <div class="contact">
        <div class="top-banner">
        </div>
        <div class="center">
            <v-container grid-list-xl  text-xs-center>
                <v-layout>
                <v-flex xs12 sm3 offset-sm1 >
                    <v-card height="500px" color="#009688">
                    </v-card>
                </v-flex>
                <v-flex xs12 sm3>
                    <v-card height="500px" color="blue">
                    </v-card>
                </v-flex>
                <v-flex xs12 sm3>
                    <v-card height="500px" color="#4CAF50">
                    </v-card>
                </v-flex>                

            </v-layout>       
            </v-container>
                 
        </div>
        <div class="weixin">
            <img src="../assets/images/my_weixin.png" alt="">
        </div>
        <div class="week_map">
            <div id="allmap">
                <div id="dituContent" class="dituContent"></div>
            </div>
            <div class="mark-info">
                <h2>中国上海中山西路2025号永升大厦</h2>
                <p>Tel：(8621) 31351010 </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({

         }),
        mounted() {
            //创建和初始化地图函数：
            function initMap() {
                createMap(); //创建地图
                setMapEvent(); //设置地图事件
                addMapControl(); //向地图添加控件
                addMarker(); //向地图中添加marker
            }

            //创建地图函数：
            function createMap() {
                var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
                var point = new BMap.Point(121.434218, 31.189093); //定义一个中心点坐标
                map.centerAndZoom(point, 14); //设定地图的中心点和坐标并将地图显示在地图容器中
                window.map = map; //将map变量存储在全局
            }

            //地图事件设置函数：
            function setMapEvent() {
                map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
                map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
                map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
                map.enableKeyboard(); //启用键盘上下左右键移动地图
            }

            //地图控件添加函数：
            function addMapControl() {}

            //标注点数组
            var markerArr = [{
                title: "上海择仕企业管理有限公司",
                content: "中国上海中山西路2025号永升大厦",
                point: "121.434218|31.189093",
                isOpen: 1,
                icon: {
                    w: 23,
                    h: 25,
                    l: 46,
                    t: 21,
                    x: 9,
                    lb: 12
                }
            }];
            //创建marker
            function addMarker() {
                for (var i = 0; i < markerArr.length; i++) {
                    var json = markerArr[i];
                    var p0 = json.point.split("|")[0];
                    var p1 = json.point.split("|")[1];
                    var point = new BMap.Point(p0, p1);
                    var iconImg = createIcon(json.icon);
                    var marker = new BMap.Marker(point, {
                        icon: iconImg
                    });
                    var iw = createInfoWindow(i);
                    var label = new BMap.Label(json.title, {
                        "offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
                    });
                    marker.setLabel(label);
                    map.addOverlay(marker);
                    label.setStyle({
                        borderColor: "#808080",
                        color: "#333",
                        cursor: "pointer"
                    });

                    (function () {
                        var index = i;
                        var _iw = createInfoWindow(i);
                        var _marker = marker;
                        _marker.addEventListener("click", function () {
                            this.openInfoWindow(_iw);
                        });
                        _iw.addEventListener("open", function () {
                            _marker.getLabel().hide();
                        })
                        _iw.addEventListener("close", function () {
                            _marker.getLabel().show();
                        })
                        label.addEventListener("click", function () {
                            _marker.openInfoWindow(_iw);
                        })
                        if (!!json.isOpen) {
                            label.hide();
                            _marker.openInfoWindow(_iw);
                        }
                    })()
                }
            }
            //创建InfoWindow
            function createInfoWindow(i) {
                var json = markerArr[i];
                var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title +
                    "</b><div class='iw_poi_content'>" + json.content + "</div>");
                return iw;
            }
            //创建一个Icon
            function createIcon(json) {
                var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w, json
                    .h), {
                        imageOffset: new BMap.Size(-json.l, -json.t),
                        infoWindowOffset: new BMap.Size(json.lb + 5, 1),
                        offset: new BMap.Size(json.x, json.h)
                    })
                return icon;
            }

            initMap(); //创建和初始化地图
        }
    }
</script>

<style lang="stylus" scoped>
.top-banner
    height:300px
    background:url('../assets/images/bg_weixin.jpg')
    background-position: center center
    background-size: cover

.center
    height:600px;

.weixin
    display flex
    justify-content center
    align-items center
    height:400px
    background:url('../assets/images/bg5.jpg')
    background-attachment fixed
    background-position: center center
    background-size: cover
    img 
        width 250px

.week_map
    position relative
    .dituContent
        width:100%;height:520px;
    .mark-info
        position absolute
        width 100%
        height 100px
        line-height 50px
        text-align center
        bottom 0
        color #fff;
        background-color rgba(222,38,46,.7)
</style>