<template>
  <div>
    <router-view  transition-mode="out-in"></router-view>
  </div>
</template>

<script>
  import store from './vuex/store'
  export default {
    components: {
    },
    store,
    ready () {
      const appId = 'apLrGX1xumsj3TROPuj41A6z-gzGzoHsz'
      const appKey = 'pE0K2vCPp01I1DBS4NhcfOFo'
      AV.init({ appId, appKey })
    }
  }
</script>

<style lang="less">


    .expand-transition {

    }

    .expand-enter {
        animation: expand-in 0.2s;
    }

    .expand-leave{
        animation: expand-out 0.5s;
    }

    @keyframes expand-in {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0.25;
        }
        50% {
            opacity: 0.5;
        }
        75% {
            opacity: 0.75;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes expand-out {
       0% {
        opacity: 1;
    }
    25% {
        opacity: 0.75;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        opacity: 0.25;
    }
    100% {
        opacity: 0;
    }
}

</style>
