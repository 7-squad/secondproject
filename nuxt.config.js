export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'secondproject',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'element-ui/lib/theme-chalk/index.css'
    '~/assets/style/theme/index.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/dotenv',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },
  server: {
    port: 80, // default: 3000
    // host 要用自己的 ip 地址
    // 设置网络里面的ip地址 在局域网可用访问的
    // 没设置 127.0.0.1 localhost 只有本机器可用访问调试，别人访问不了
    // 正式地址 baidu.com 公网可访问的
    // 这个是老师的别用
    // host: '192.168.9.250' // default: localhost
  },

  // 使用 nuxt 框架提供的 服务器中间件功能，实现 KOA 的后端服务
  serverMiddleware: [
    // /api 的地址请求，只有数据，没有页面
    // 所有的 /api 的请求都会转发到 api/app.js 脚本文件中
    { path: "/api", handler: "~/api/app.js" }
  ]

}
