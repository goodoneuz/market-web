<template>
  <v-row style="width: 100%; margin-top: -11px;" dense>
    <card-item v-for="item in items" :key="item.id" :item="item" />
    <card-total />
  </v-row>
</template>

<script>
import CardItem from './components/card-item'
import CardTotal from './components/card-total'

export default {
  name: 'CardShow',
  components: { CardItem, CardTotal },
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Рация Samcom CP500',
          image: 'https://static.olx.uz/img-olxuz/27336354_1_1000x700_ratsiya-samcom-cp500-tashkent_rev001.jpg',
          amount: 1,
          price: 20303
        },
        {
          id: 2,
          name: 'Золотой браслет. Италия. Проба 585. Вес 8.52 гр. Длина 18 см.',
          image: 'https://img3.olx.uz/images_olxuz/34043337_1_644x461_zolotoy-braslet-italiya-proba-585-ves-852-gr-dlina-18-sm-tashkent_rev004.jpg',
          amount: 1,
          price: 235235
        },
        {
          id: 3,
          name: 'Надувной матрас ',
          image: 'https://static.olx.uz/img-olxuz/33932747_1_1000x700_naduvnoy-matras-nukus_rev001.jpg',
          amount: 1,
          price: 23532
        }
      ]
    }
  },
  methods: {
  }
}
</script>
