<template>
  <div>
    <div class="hint-text">
      确定要删除吗？
    </div>
    <div class="footer-btns">
      <button @click="$emit('close')" class="btn btn-link">取消</button>
      <button @click="onDelete" class="btn btn-danger">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'feedItemEditor',
  props: ['onDelete'],
  data() {
    return {
      newItemText: this.text,
    };
  },
  methods: {
    submitNewItem() {
      window.console.log(this.newItemText);
    },
  },
};
</script>

<style scoped>
  .hint-text {
    padding: 20px;
  }
  .footer-btns {
    display: flex;
    justify-content: flex-end;
  }
</style>
