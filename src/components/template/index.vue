<template>
<div >
<top></top>
<mid></mid>
<bot></bot>
</div>
</template>

<script>
import mid from './mid'
import top from './top'
import bot from './bot'
export default {
  name: 'template',
  components: {
    mid, bot, top
  }
}
</script>
