<template>
  <v-row style="width: 100%; margin-top: -11px;" dense >
    <v-col
      cols="12"
      md="4"
    >
      <v-text-field
        v-model="firstname"
        :counter="50"
        label="Наименование товара"
      />
    </v-col>
    <v-col
      cols="6"
      md="4"
    >
      <v-text-field
        v-model="firstname"
        label="Цена"
      />
    </v-col>
    <v-col
      cols="6"
      md="4"
    >
      <v-text-field
        v-model="firstname"
        label="Количество"
      />
    </v-col>
    <v-col
      cols="12"
      md="4"
    >
      <v-select
        v-model="select"
        :items="markets"
        :rules="[v => !!v || 'Пункт требуется']"
        label="Рынок"
      />
    </v-col>
    <v-col
      cols="12"
      md="4"
    >
      <van-uploader v-model="fileList" multiple :max-count="5" />
    </v-col>
    <v-col cols="12" md="6">
      <v-textarea
        solo
        name="input-7-4"
        label="Описание"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-btn depressed large block color="primary">Добавить товар</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue';
import { Uploader } from 'vant';

Vue.use(Uploader);

export default {
  name: 'ProductCreate',
  data() {
    return {
      firstname: '',
      select: '',
      markets: [
        'Abu-saxiy',
        'Chorsu',
        'O\'rikzor',
        'Chinni bozor'
      ],
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/cat.jpeg' }
      ]
    }
  },
  methods: {
    afterRead(file) {
      console.log(file)
    }
  }
}
</script>

<style lang="scss">

</style>