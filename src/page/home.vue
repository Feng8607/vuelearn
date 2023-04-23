<template>
  <div class="home">
    <h2>vue學習</h2>
    <ul>
      <li>
        <router-link to="/user">
          v-onclick單向綁定跟雙向綁定、v-model,v-ref、v-if-else，v-show</router-link
        >
      </li>
      <li><router-link to="/for">v-for跟key屬性渲染</router-link></li>
      <li><router-link to="/computed">computed</router-link></li>
      <li><router-link to="/watch">watch、watcheffect</router-link></li>
      <li><router-link to="/child">父傳子</router-link></li>
      <li><router-link to="/componentlife">組件生命</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style></style>
