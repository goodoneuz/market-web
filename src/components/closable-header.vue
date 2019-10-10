<template>
  <div>
    <filter-drawer :drawer.sync="filterDrawer" />
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-btn icon @click="goHome">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title class="d-block mx-auto">{{ pageTitle }}</v-toolbar-title>
      <div style="width: 80px; height: 80px;" />
    </v-app-bar>
  </div>
</template>

<script>
import getPageTitle from '@/utils/get-page-title'

export default {
  name: 'ClosableHeader',
  computed: {
    pageTitle() {
      return getPageTitle(this.$route.meta, false)
    }
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
