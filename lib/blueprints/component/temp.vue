<template>
  <div class="{{name | kebabCase }}">{{ name }} component</div>
</template>

<script>
export default {
  name: '{{name}}',
  data () {
    return {}
  }
}
</script>

<style scoped></style>
