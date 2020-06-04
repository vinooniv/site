<template>
  <Layout>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex sm12 class="d-md-none">
          <h2 class="section-header">Projects</h2>
        </v-flex>

        <v-flex lg8 offset-lg2 v-for="project in data" :key="project.title">
          <v-card flat outlined>
            <v-card-title>{{ project.title }}</v-card-title>
            <v-card-text>{{ project.description }}</v-card-text>

            <v-card-text>
              <v-chip-group column>
                <v-chip small label outlined color="#283238" text-color="#283238" v-for="tag in project.tags" :key="tag">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-tooltip bottom v-for="link in project.links" :key="link.type">
                <template v-slot:activator="{ on }">
                  <v-btn icon large v-on="on" :href="link.to" target="_blank">
                    <v-icon class="material-icons">{{ link.type }}</v-icon>
                  </v-btn>
                </template>
                <span>{{ link.tooltip }}</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </Layout>
</template>

<script>
import data from '~/data/projects.json'

export default {
  metaInfo: {
    title: 'Projects'
  },
  data () {
    return {
      data
    }
  }
}
</script>
