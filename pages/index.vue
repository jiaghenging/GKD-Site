<template>
  <div class="container">
    <header class="page_header">
      <div class="header-container">
        <div class="logo-box">
          <img src="/img/logo.png" alt="" />
        </div>
        <div>
          <a href="javascript:void(0);" @click="tapMenu()" class="menuBtn">
            <ul ref="menuRef" :class="menuState">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </a>
        </div>
      </div>
    </header>
    <main class="page_main" @mousewheel="handleWheel($event)">
      <div class="slide_img_box">
        <ul>
          <li :class="actIndex == 0 ? 'current' : ''">
            <span style="background-image: url('/img/bg1.jpg')"></span>
          </li>
          <li :class="actIndex == 1 ? 'current' : ''">
            <span style="background-image: url('/img/bg2.jpg')"></span>
          </li>
          <li :class="actIndex == 2 ? 'current' : ''">
            <span style="background-image: url('/img/bg3.jpg')"></span>
          </li>
        </ul>
      </div>
      <div class="point_box">
        <ul>
          <li :class="actIndex == 0 ? 'current_point' : ''">
            <a href="javascript:void(0);">
              <span></span>
            </a>
          </li>
          <li :class="actIndex == 1 ? 'current_point' : ''">
            <a href="javascript:void(0);">
              <span></span>
            </a>
          </li>
          <li :class="actIndex == 2? 'current_point' : ''">
            <a href="javascript:void(0);">
              <span></span>
            </a>
          </li>
        </ul>
      </div>
      <section
        class="page_sec"
        :class="actIndex == 0 ? 'current_sec' : ''"
        ref="top1"
        data-section-name="top1"
      >
        <div class="sec_container">
          <article class="middleBox_abs" style="top: 42%">
            <h1 class="text-white f-60 font-bold">精准、及时、速度开搞！</h1>
          </article>
        </div>
      </section>
      <section
        class="page_sec"
        :class="actIndex == 1 ? 'current_sec' : ''"
        ref="top2"
        data-section-name="top2"
      >
        <div class="sec_container">
          <article class="middleBox_abs" style="top: 50%;left:30%">
            <h1 class="text-white f-30 font-bold">添加性格特点</h1>
            <h1 class="text-white f-40 font-bold">匹配期望队友</h1>
            <h1 class="text-white f-60 font-bold">让你不再社恐、焦虑</h1>
          </article>
        </div>
      </section>
      <section
        class="page_sec2"
        :class="actIndex == 2 ? 'current_sec' : ''"
        ref="top2"
        data-section-name="top2"
      >
        <div class="sec_container">
          <article class="middleBox_abs" style="top: 20%;left:20%">
            <h1 class="text-white f-30 font-bold">各玩各的</h1>
            <h1 class="text-white f-40 font-bold">各耍各的</h1>
            <h1 class="text-white f-60 font-bold">开冲!</h1>
          </article>
        </div>
        <div class="sec_container_100" style="background-color:#3390ff">
            <article class="middleBox_abs" style="top: 20%">
            <h1 class="text-white f-30 font-bold">扫码下载，立刻开始寻找搭子！</h1>
            <img src="" alt="">
          </article>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { debounce } from "lodash";
const menuRef = ref("");
const menuState = ref("close");
const actIndex = ref(0);
const tapMenu = function () {
  menuState.value = menuState.value == "close" ? "open" : "close";
};
const work = function (e) {
  console.log(e.deltaY);
  if (e.deltaY > 0) {
    // 向下翻页
    if (actIndex.value < 2) {
      actIndex.value += 1;
    }
  } 
  // else {
  //   // 向上翻页
  //   if (actIndex.value > 0) {
  //     actIndex.value -= 1;
  //   }
  // }
};
const top1 = ref("");
const top2 = ref("");
const top3 = ref("");
const handleWheel = debounce(work, 300);
</script>
<style lang="scss" scoped>
@import "~/public/css/index.scss";
</style>
