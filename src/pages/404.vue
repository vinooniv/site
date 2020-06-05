<template>
  <Layout fluid>
    <div class="not-found">
      <center>
        <img :src="require('../assets/img/404.svg')">
      </center>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '404'
  }
}
</script>

<style scoped>
.not-found {
  margin: 0;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

img {
  display: block;
  max-height: 100%;
  max-width: 100%;
}
</style>
