<template>
  <v-row style="width: 100%; margin-top: -11px;">
    <v-carousel
      :height="300"
      hide-delimiters
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      />
    </v-carousel>
    <div class="product-content">
      <div class="product-title">
        Строительство футбольных полей по всему Узбекистану
      </div>
      <div class="product-rating">
        <v-rating v-model="rating" color="purple" medium />
      </div>
      <div class="product-price">148 000</div>
      <v-divider />
      <div class="product-provider">
        <b>Продавец:</b> <br>
        <a href="#">Eclipse</a> <br>
        Наличные, Терминал UzCard, PayMe, Click
      </div>
      <v-divider />
      <div class="product-options">
        <b>Описание и характеристики товара:</b> <br>
        <div class="option">
          <span class="option-title">Размер: </span>
          <span class="option-value">M (46), XL (50)</span>
        </div>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'ProductDetails',
  data() {
    return {
      items: [
        {
          src: 'https://my.abad.uz/images/262/13979/5a4e07b489b06.jpg'
        },
        {
          src: 'https://my.abad.uz/images/262/13979/5a4e07b43ca9e.jpg'
        },
        {
          src: 'https://my.abad.uz/images/262/13979/5a4e07b475603.jpg'
        }
      ],
      rating: 4
    }
  }
}
</script>

<style lang="scss">
.product-content {
  padding: 10px;
}
.product-title {
  font-size: 16px;
  line-height: 18px;
}
.product-rating {
  line-height: 20px;
}
.product-price {
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
}
.product-provider,
.product-options {
  margin-top: 10px;
}
.product-options {
  .option {
    display: block;
    font-size: 14px !important;
    .option-title {
      color: #777;
    }
    .option-value {
      color: black;
    }
  }
}
</style>
