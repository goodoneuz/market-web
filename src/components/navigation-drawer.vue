<template>
  <v-navigation-drawer
    v-model="drawer_inner"
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
              <v-img src="https://yt3.ggpht.com/a/AGF-l7_8zjcjsXj7sDs5vNOG4KJBp8gBXBtqVWsfVw=s900-c-k-c0xffffffff-no-rj-mo" />
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
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>Выйти</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    items: [
      {
        action: 'local_activity',
        title: 'Attractions',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'restaurant',
        title: 'Dining',
        active: true,
        items: [
          { title: 'Breakfast & brunch' },
          { title: 'New American' },
          { title: 'Sushi' }
        ]
      },
      {
        action: 'school',
        title: 'Education',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'directions_run',
        title: 'Family',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'healing',
        title: 'Health',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'content_cut',
        title: 'Office',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'local_offer',
        title: 'Promotions',
        items: [
          { title: 'List Item' }
        ]
      }
    ],
    drawer_inner: false
  }),
  watch: {
    drawer(newVal) {
      this.drawer_inner = newVal
    },
    drawer_inner(newVal) {
      this.$emit('update:drawer', newVal)
    }
  }
}
</script>
