<template>
  <div>
    <navigation-drawer :drawer.sync="drawer" />
    <filter-drawer :drawer.sync="filterDrawer" />
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <div class="flex-grow-1" />

      <v-btn icon @click="filterDrawer = !filterDrawer">
        <v-icon>mdi-magnify </v-icon>
      </v-btn>

      <v-btn icon @click="goBasket">
        <v-icon>mdi-basket</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import NavigationDrawer from '@/components/navigation-drawer'
import FilterDrawer from '@/components/filter-drawer'
import getPageTitle from '@/utils/get-page-title'

export default {
  name: 'Header',
  components: { NavigationDrawer, FilterDrawer },
  data: () => ({
    drawer: false,
    filterDrawer: false,
    navitems: [
      'Электроника',
      'Компьютерная техника',
      'Бытовая техника',
      'Дом, дача, ремонт',
      'Одежда и обувь',
      'Красота и здоровье',
      'Авто'
    ]
  }),
  computed: {
    pageTitle() {
      return getPageTitle(this.$route.meta)
    }
  },
  methods: {
    goBasket() {
      this.$router.push({ name: 'card-view' })
    }
  }
}
</script>
