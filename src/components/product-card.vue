<template>
    <v-card>
    <v-img
        :src="product.src"
        class="white--text"
        height="200px"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
        <v-card-title
        class="fill-height align-end"
        style="font-size: 14px; line-height: 15px"
        v-text="product.title"
        ></v-card-title>
    </v-img>
    <v-row style="width: 100%; display: flex; margin: auto;">
        <v-col :cols="2">
                <v-btn icon>
                <v-icon>mdi-phone</v-icon>
                </v-btn>
        </v-col>
        <v-col :cols="8">
            <p style="font-size: 12px; padding-top: 5px; padding-buttom: 5px; text-align: center; font-weight: bold;"> {{ product.price }}</p>
        </v-col>
        <v-col :cols="2">
                <v-btn icon>
                <v-icon>mdi-basket</v-icon>
                </v-btn>
        </v-col>
    </v-row>
    </v-card>
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
    .product {
        font-size: 14px;
        padding: 5px;
        background-color: #ffffff;
        border: 1px solid #f1f1f1;
        margin-top: 5px;
        margin-bottom: 5px;
        border-radius: 6px;
        box-shadow: 0 8px 12px #ebedf0;
    }
    .price {
        font-weight: bold;
    }
    .product-name {
        white-space: wrap;
    }
    .seller {
        text-align: right;
        color: #888;
    }
</style>