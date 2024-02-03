<template>
    <div class="t002">
      <img :src="imageSrc" alt="Image" class="t002-image">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageSrc: '/src/assets/2.jpg',
      }
    }
  }
  </script>
  <style>
  .t002 {
    text-align: center;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .t002-image {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  </style>
  