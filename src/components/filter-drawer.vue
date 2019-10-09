<template>
  <v-navigation-drawer
    v-model="drawer_inner"
    app
    class="accent-4"
    right
  >
    <v-toolbar
      flat
      color="deep-purple accent-4"
      dark
    >
      <v-btn icon @click="drawer_inner = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Фильтр</v-toolbar-title>
    </v-toolbar>
    <v-row class="px-2">
      <v-col cols="12">
        <v-text-field
          label="Текст"
          placeholder="введите текст"
        />
      </v-col>
      <v-col cols="12">
        <v-select
          v-model="selectedFruits"
          :items="fruits"
          label="Категории"
          multiple
        >
          <template v-slot:prepend-item>
            <v-list-item
              ripple
              @click="toggle"
            >
              <v-list-item-action>
                <v-icon :color="selectedFruits.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Выбрать все</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="mt-2" />
          </template>
          <template v-slot:append-item>
            <v-divider class="mb-2" />
            <v-list-item disabled>
              <v-list-item-avatar color="grey lighten-3">
                <v-icon>mdi-food-apple</v-icon>
              </v-list-item-avatar>

              <v-list-item-content v-if="likesAllFruit">
                <v-list-item-title>Holy smokes, someone call the fruit police!</v-list-item-title>
              </v-list-item-content>

              <v-list-item-content v-else-if="likesSomeFruit">
                <v-list-item-title>Fruit Count</v-list-item-title>
                <v-list-item-subtitle>{{ selectedFruits.length }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-content v-else>
                <v-list-item-title>
                  How could you not like fruit?
                </v-list-item-title>
                <v-list-item-subtitle>
                  Go ahead, make a selection above!
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-select>
      </v-col>
      <v-col cols="12">
        <v-card
          flat
          color="transparent"
        >
          <v-subheader>Стоимость</v-subheader>
          <v-range-slider
            v-model="range"
            :max="max"
            :min="min"
            hide-details
            class="align-center"
            :thumb-label="true"
          >
            <template v-slot:prepend>
              {{ range[0] }}
            </template>
            <template v-slot:append>
              {{ range[1] }}
            </template>
          </v-range-slider>
        </v-card>
      </v-col>
    </v-row>
    <v-card-text>
      <h2 class="title mb-2">Choose amenities</h2>
      <v-chip-group
        v-model="amenities"
        column
        multiple
      >
        <v-chip filter outlined small>Elevator</v-chip>
        <v-chip filter outlined small>Washer / Dryer</v-chip>
        <v-chip filter outlined small>Fireplace</v-chip>
        <v-chip filter outlined small>Wheelchair access</v-chip>
        <v-chip filter outlined small>Dogs ok</v-chip>
        <v-chip filter outlined small>Cats ok</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'FilterDrawer',
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    drawer_inner: false,
    amenities: [],
    fruits: [
      'Apples',
      'Apricots',
      'Avocado',
      'Bananas',
      'Blueberries',
      'Blackberries',
      'Boysenberries',
      'Bread fruit',
      'Cantaloupes (cantalope)'
    ],
    selectedFruits: [],
    min: 0,
    max: 900000,
    slider: 450000,
    range: [45000, 700000]
  }),
  computed: {
    likesAllFruit() {
      return this.selectedFruits.length === this.fruits.length
    },
    likesSomeFruit() {
      return this.selectedFruits.length > 0 && !this.likesAllFruit
    },
    icon() {
      if (this.likesAllFruit) return 'mdi-close-box'
      if (this.likesSomeFruit) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    }
  },
  watch: {
    drawer(newVal) {
      this.drawer_inner = newVal
    },
    drawer_inner(newVal) {
      this.$emit('update:drawer', newVal)
    }
  },
  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.likesAllFruit) {
          this.selectedFruits = []
        } else {
          this.selectedFruits = this.fruits.slice()
        }
      })
    }
  }
}
</script>

<style lang="scss">
.title{
  font-size: 20px;
}
</style>
