export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cms',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css' ,
    '~/assets/css/sb-admin-2.min.css',
    '~/assets/vendor/fontawesome-free/css/all.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    {src:'@/plugins/jquery/jquery.min.js', body:true, mode:'client'},
    {src:'@/plugins/bootstrap/js/bootstrap.bundle.min.js', body:true, mode:'client'},
    {src:'@/plugins/jquery-easing/jquery.easing.min.js', body:true, mode:'client'},
    {src:'@/plugins/js/sb-admin-2.min.js', body:true, mode:'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/apollo",
    'bootstrap-vue/nuxt'
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.HASURA_ENDPOINT,
        httpLinkOptions: {
          headers: {
            "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
          },
        },
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
