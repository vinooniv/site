<template>
  <Layout>
    <v-container grid-list-xl>
      <v-layout row align-center>
        <v-flex lg6 xs12>
          <h1>Hello, I am Vino!</h1>
          <br>
          <p>
            A Computer Vision, Deep Learning and Quality Assurance engineer. Passionate to solve problems through code
          </p>
        </v-flex>
        <v-flex lg6 xs12>
          <img :src="require('~/assets/img/creativity.svg')">
        </v-flex>
      </v-layout>
      <v-layout grid-list-xl>
        <v-flex lg12>
          <div class="contact">
            Have questions? <v-btn outlined small href="mailto:contact@vinomahendran.com">CONTACT ME</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style scoped>
p {
  font-size: 1.5rem;
  line-height: 1.3;
  text-justify: distribute;
}
.contact {
  font-size: 1.2rem;
  text-align: center;
}
</style>
