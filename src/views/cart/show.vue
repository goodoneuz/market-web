<template>
  <v-row
    style="width: 100%; margin-top: -11px; height: 100%; position: relative;"
    class="d-flex align-content-start flex-wrap"
  >
    <v-col cols="12" style="position: relative;">
      <v-row class="scrollable">
        <cart-item v-for="item in items" :key="item.id" :item="item" />
      </v-row>
      <div class="shadow" />
    </v-col>
    <cart-total style="height: 100px;" />
  </v-row>
</template>

<script>
import CartItem from './components/cart-item'
import CartTotal from './components/cart-total'

export default {
  name: 'CartShow',
  components: { CartItem, CartTotal },
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
        },
        {
          id: 4,
          name: 'Рация Samcom CP500',
          image: 'https://static.olx.uz/img-olxuz/27336354_1_1000x700_ratsiya-samcom-cp500-tashkent_rev001.jpg',
          amount: 1,
          price: 20303
        },
        {
          id: 5,
          name: 'Золотой браслет. Италия. Проба 585. Вес 8.52 гр. Длина 18 см.',
          image: 'https://img3.olx.uz/images_olxuz/34043337_1_644x461_zolotoy-braslet-italiya-proba-585-ves-852-gr-dlina-18-sm-tashkent_rev004.jpg',
          amount: 1,
          price: 235235
        },
        {
          id: 6,
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
<style lang="scss">
.scrollable {
  height: calc(100vh - 250px);
  overflow-y: scroll;
  position: relative;
  min-height: 100%;
}
.shadow {
  background: rgb(250,250,250);
  background: -moz-linear-gradient(0deg, rgba(250,250,250,1) 21%, rgba(255,255,255,0) 100%);
  background: -webkit-linear-gradient(0deg, rgba(250,250,250,1) 21%, rgba(255,255,255,0) 100%);
  background: linear-gradient(0deg, rgba(250,250,250,1) 21%, rgba(255,255,255,0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fafafa",endColorstr="#ffffff",GradientType=1);
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 50px;
  width: inherit;
}
</style>
