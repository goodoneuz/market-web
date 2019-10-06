<template>
    <!-- <van-card
    num="2"
    :price="product.price"
    :title="product.title"
    desc="Description"
    thumb=""
    /> -->
    <div class="card-product">
        <div class="card-product-image" :style="'background-image: url('+product.src+'); width: 100%; height: 150px;'">
          <div class="card-product-tag">Abusaxiy</div>
        </div>
        <div class="card-product-content">
          <div class="card-product-title">{{ product.title }}</div>
          <div class="card-product-price">{{ product.price }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Product',
    props: {
        product:{
            type: Object,
            default: {}
        }
    }
}
</script>

<style>
.card-product {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background: #fff;
  border-radius: 4px;
  margin: -7px;
}
.card-product-image {
  background-size: cover;
  background-position: center;
}
.card-product-content{
  padding: 5px;
}
.card-product-title {
  line-height: 20px;
  font-size: 14px;
  height: 40px;
  overflow: hidden;
  text-align: center;
}
.card-product-price {
  text-align: center;
  color: #777;
}
.card-product-tag{
  background-color: rgba(200, 250, 76, 0.7);
  border-radius: 0px 0px 5px 0px;
  display: inline-block;
  position: absolute;
  padding: 3px;
  font-size: 10px;
}

</style>
