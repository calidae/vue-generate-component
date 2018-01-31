<template>
  <div>
    <{{name}} />
  </div>
</template>

<script>
import {{name}} from './{{name}}'

export default {
  name: '{{name}}Container',
  components: {
    {{name}}
  },
  data() {
    return {}
  }
}
</script>
