<template>
  <div class="cart-product" @click="goProduct">
    <div class="cart-product-image" :style="'background-image: url('+product.src+'); width: 100%; height: 150px;'">
      <div class="cart-product-tag">Abusaxiy</div>
    </div>
    <div class="cart-product-content">
      <div class="cart-product-title">{{ product.title }}</div>
      <div class="cart-product-price">{{ product.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCart',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goProduct() {
      this.$router.push({ name: 'product-show', params: { id: this.product.id }})
    }
  }
}
</script>

<style>
.cart-product {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background: #fff;
  border-radius: 4px;
  margin: -7px;
}
.cart-product-image {
  background-size: cover;
  background-position: center;
}
.cart-product-content{
  padding: 5px;
}
.cart-product-title {
  line-height: 20px;
  font-size: 14px;
  height: 40px;
  overflow: hidden;
  text-align: center;
}
.cart-product-price {
  text-align: center;
  color: #777;
}
.cart-product-tag{
  background-color: rgba(200, 250, 76, 0.7);
  border-radius: 0px 0px 5px 0px;
  display: inline-block;
  position: absolute;
  padding: 3px;
  font-size: 10px;
}

</style>
