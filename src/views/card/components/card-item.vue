<template>
  <v-col cols="12">
    <v-card
      :color="'#fff'"
      >
      <v-list-item three-line>
        <v-list-item-content class="align-self-start">
          <v-list-item-title
            class="mb-2"
            v-text="item.name"
          ></v-list-item-title>

          <v-list-item-subtitle v-text="item.price + ' сум'"></v-list-item-subtitle>
          <v-card-actions>
            <v-btn text class="float-right">
              <van-stepper v-model="item.amount" input-width="40px" button-size="32px" />
            </v-btn>
          </v-card-actions>
        </v-list-item-content>
          <v-list-item-avatar
          size="100"
          tile
        >
          <v-img :src="item.image"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>
import Vue from 'vue';
import { Stepper } from 'vant';

Vue.use(Stepper);

export default {
  name: 'CardItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style lang="scss">
  .headline {
    font-size: 14px !important;
  }
</style>