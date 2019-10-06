<template>
  <v-app id="inspire">
    <navigation-drawer :drawer.sync="drawer" />
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Webozor.uz</v-toolbar-title>
      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-magnify </v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-basket</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo">
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/navigation-drawer';

export default {
  name: 'MainLayout',
  components: { NavigationDrawer },
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
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
  methods: {
    test() {
      console.log('test')
    }
  }
};
</script>
