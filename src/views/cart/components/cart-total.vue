<template>
  <v-col cols="12">
    <v-card
      :color="'#fff'"
      class="px-4 py-2"
    >
      <v-row>
        <v-col
          cols="5"
          class="pa-2 total-title"
        >
          <p>Общее: </p>
          123902 UZS
        </v-col>
        <v-col
          cols="7"
        >
          <v-btn large color="primary" class="w-100">Оформить заказ</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'CartTotal',
  data() {
    return {
      total: 1231223
    }
  }
}
</script>

<style lang="scss">
  .total-title {
    p {
      font-size: 14px;
      line-height: 16px;
      color: #888;
    }
    font-size: 16px;
    line-height: 18px;
  }
</style>
