<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="deep-purple accent-4"
      dark
    >
    <v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0 text-center"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="80"
            :tile="false"
          >
            <v-img src="https://yt3.ggpht.com/a/AGF-l7_8zjcjsXj7sDs5vNOG4KJBp8gBXBtqVWsfVw=s900-c-k-c0xffffffff-no-rj-mo"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">Elmurod G'aniyev</v-list-item-title>
              <v-list-item-subtitle>Abu saxiy</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
      <v-list dense>
        <v-list-item v-for="(item,index) in navitems" :key="index" @click="test">
          <v-list-item-content>
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Выйти</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

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
    <v-footer app color="indigo">
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
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
