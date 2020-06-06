<template>
  <Layout>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex sm12 class="d-md-none">
          <h2 class="section-header">Blogs</h2>
        </v-flex>

        <v-flex sm12 md6 lg4 xl3 v-for="edge in $page.posts.edges" :key="edge.node.id">
          <v-card hover height="100%">
            <v-img :src="edge.node.cover_img_src" height="200"></v-img>
            <v-card-text>
              <v-icon class="material-icons">account_circle</v-icon> {{ edge.node.creator }}
              <p class="pub-date">{{ new Date(edge.node.pubDate).toDateString() }}</p>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>{{ edge.node.title }}</v-card-title>
            <v-card-text>{{ edge.node.highlights.slice(0, 150) }}...</v-card-text>

            <!-- <v-card-text>
              <v-chip-group column>
                <v-chip small label outlined color="#283238" text-color="#283238" v-for="category in edge.node.categories" :key="category">
                  {{ category }}
                </v-chip>
              </v-chip-group>
            </v-card-text> -->

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="black" small :href="edge.node.link" target="_blank">
                <b>READ MORE</b>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </Layout>
</template>

<page-query>
query Posts  {
  posts: allPosts (sortBy: "id", order: ASC) {
    edges {
      node {
        creator
        title
        link
        pubDate
        highlights
        categories
        cover_img_src
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blogs'
  }
}
</script>

<style scoped>
  .pub-date {
    float: right;
  }
</style>
