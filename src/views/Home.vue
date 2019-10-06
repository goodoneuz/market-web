<template>
  <v-row style="width: 100%">
    <v-col
      v-for="(card, index) in cards"
      :key="index"
      :cols="6"
      no-gutters
    >
      <product :product="card" />
    </v-col>
  </v-row>
</template>

<script>
import Product from '@/components/product-card'

export default {
  name: 'Home',
  components: {
    Product
  },
  data() {
    return {
      cards: [
        { title: 'Honda cbr600 rr', src: 'https://static.olx.uz/img-olxuz/33633085_1_1000x700_honda-cbr600-rr-tashkent_rev008.jpg', price: '7 000' },
        { title: 'Строительство футбольных полей по всему Узбекистану ', src: 'https://static.olx.uz/img-olxuz/27488100_1_1000x700_stroitelstvo-futbolnyx-polej-po-vsemu-uzbekistanu-toshkent_rev001.jpg', price: '9 000' },
        { title: 'Строительный пылесос от японской SHARP на 22 литра. 2400 ватт мощности', src: 'https://static.olx.uz/img-olxuz/33600437_1_1000x700_stroitelnyy-pylesos-ot-yaponskoy-sharp-na-22-litra-2400-vatt-moschnosti-eshanguzar_rev005.jpg', price: '1 799 000' },
        { title: 'Honda cbr600 rr', src: 'https://static.olx.uz/img-olxuz/33633085_1_1000x700_honda-cbr600-rr-tashkent_rev008.jpg', price: '7 000' },
        { title: 'Строительство футбольных полей по всему Узбекистану ', src: 'https://static.olx.uz/img-olxuz/27488100_1_1000x700_stroitelstvo-futbolnyx-polej-po-vsemu-uzbekistanu-toshkent_rev001.jpg', price: '12 000' },
        { title: 'Строительный пылесос от японской SHARP на 22 литра. 2400 ватт мощности', src: 'https://static.olx.uz/img-olxuz/33600437_1_1000x700_stroitelnyy-pylesos-ot-yaponskoy-sharp-na-22-litra-2400-vatt-moschnosti-eshanguzar_rev005.jpg', price: '1 799 000' },
        { title: 'Honda cbr600 rr', src: 'https://static.olx.uz/img-olxuz/33633085_1_1000x700_honda-cbr600-rr-tashkent_rev008.jpg', price: '7 000' },
        { title: 'Строительство футбольных полей по всему Узбекистану ', src: 'https://static.olx.uz/img-olxuz/27488100_1_1000x700_stroitelstvo-futbolnyx-polej-po-vsemu-uzbekistanu-toshkent_rev001.jpg', price: '894 099' },
        { title: 'Строительный пылесос от японской SHARP на 22 литра. 2400 ватт мощности', src: 'https://static.olx.uz/img-olxuz/33600437_1_1000x700_stroitelnyy-pylesos-ot-yaponskoy-sharp-na-22-litra-2400-vatt-moschnosti-eshanguzar_rev005.jpg', price: '1 799 000' },
        { title: 'Honda cbr600 rr', src: 'https://static.olx.uz/img-olxuz/33633085_1_1000x700_honda-cbr600-rr-tashkent_rev008.jpg', price: '7 000' },
        { title: 'Строительство футбольных полей по всему Узбекистану ', src: 'https://static.olx.uz/img-olxuz/27488100_1_1000x700_stroitelstvo-futbolnyx-polej-po-vsemu-uzbekistanu-toshkent_rev001.jpg', price: '439 493' },
        { title: 'Строительный пылесос от японской SHARP на 22 литра. 2400 ватт мощности', src: 'https://static.olx.uz/img-olxuz/33600437_1_1000x700_stroitelnyy-pylesos-ot-yaponskoy-sharp-na-22-litra-2400-vatt-moschnosti-eshanguzar_rev005.jpg', price: '1 799 000' }
      ]
    }
  }
}
</script>
