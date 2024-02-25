<template>
    <div class="carousel-container" style="hidden" >

      <!-- 左侧容器 -->
      <div :class="items[0]" >
        <transition name="slide" mode="out-in">
          <div class="carousel-wrapper" :style="{ transform: 'translateX(' + leftTranslateX + 'px)' }" ref="leftCarouselWrapper" >
            <!-- 第一个my-box -->
              <pageimg  class="pageimg" :action="actionlist[1]"></pageimg>
          </div>
        </transition>
      </div>
  
      <!-- 中间容器 -->
      <div :class="items[1]">
        <transition name="slide" mode="out-in">
          <div class="carousel-wrapper" :style="{ transform: 'translateX(' + middleTranslateX + 'px)' }" ref="middleCarouselWrapper" >
            <!-- 第一个my-box -->
         
              <pageimg  class="pageimg" :action="actionlist[2]"></pageimg>
          </div>
        </transition>
      </div>
  
      <!-- 右侧容器 -->
      <div :class="items[2]">
        <transition name="slide" mode="out-in">
          <div class="carousel-wrapper" :style="{ transform: 'translateX(' + rightTranslateX + 'px)' }" ref="rightCarouselWrapper">
            <!-- 第一个my-box -->
              <!-- Your content for the my-box -->
              <pageimg  class="pageimg" :action="actionlist[3]"></pageimg>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  import pageimg from '@/view/main_interface/components/pageimg.vue'
  
  export default {
    name: 'PageOne',
    props:{
      actionlist: {
      type: [Array,Object],
      required: true
    }
    },
    components: {
      pageimg
    },
    data() {
      return {
        items: ["carousel-left", "carousel-middle", "carousel-right"], // Your content array
        currentIndex: 1,
        boxWidth: 0,
        oneindex:0,
        twoindex:1,
        threeindex:2
      };
    },
    computed: {
      leftTranslateX() {
        return -this.currentIndex * this.boxWidth + 50;
      },
      middleTranslateX() {
        return -(this.currentIndex - 1) * this.boxWidth;
      },
      rightTranslateX() {
        return -(this.currentIndex - 2) * this.boxWidth -60;
      }
    },
    mounted() {
      // 确保在页面渲染后获取正确的宽度
      this.$nextTick(() => {
        this.boxWidth = this.$refs.leftCarouselWrapper.offsetWidth;
      });
  
      // 使用 setInterval 实现自动轮播
      setInterval(this.showNext, 53213123000);
    },
    methods: {
      showNext() {
        // 更新 currentIndex 来切换到下一个轮播项
        this.oneindex = (this.oneindex+1) % 3
        this.twoindex = (this.twoindex+1) % 3
        this.threeindex = (this.threeindex+1) %3
        this.currentIndex = (this.currentIndex + 1) % 3
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel-container {
    width: 100%;
    /* display: flex; */
    /* justify-content: space-between; */
    overflow: hidden;
    /* transform: translateY(1%); */
  }
  
  .carousel-wrapper {
    /* display: flex; */
    transition: transform 0.5s ease;
    width: 100%;
  }
  
  /* .my-box {
    flex: 0 0; 
  } */
  
  /* 定义轮播的过渡效果 */
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.5s ease;
  }
  .slide-enter,
  .slide-leave-to /* .slide-leave-active 在版本 2.1.8 之下 */ {
    transform: translateX(10%);
  }
  
  .carousel-left{
    position: absolute;
    /* width: 100%; */
    /* overflow: hidden; */
  }
  .carousel-right {
    /* flex: 0 0 calc(14.33% - 40px); */
    position: absolute;
    /* height: 100%; */
    width: 100%;
    overflow: hidden;
  }
  
  .carousel-middle {
    /* flex: 0 0 calc(14.33% - 40px); */
    position: absolute;
    overflow: hidden;
    width: 100%;
  }
  </style>