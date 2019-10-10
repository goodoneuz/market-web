<template>
  <v-app id="inspire">
    <Header />
    <v-content>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/footer'
import Header from '@/components/closable-header'

export default {
  name: 'MainLayout',
  components: { Footer, Header },
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  methods: {
    test() {
      console.log('test')
    }
  }
}
</script>
