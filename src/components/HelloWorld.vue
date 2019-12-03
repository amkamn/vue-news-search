<template>
  <div class="hello">
      {{title}}
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'HelloWorld',
  computed: mapState({
      title: state => state.title
  }),
}
</script>
