<template>
  <form @submit.prevent="submitNewItem" class="new-feed-item-editor">
    <textarea
      v-model="newItemText"
      ref="textarea"
      class="input-new-item-text"
      placeholder="有什么新鲜事？"
      title="new-item-text">
    </textarea>
    <div class="form-footer">
      <button type="button" @click="$emit('close')" class="btn btn-link btn-sm">取消</button>
      <button
        type="submit"
        class="btn btn-primary btn-sm"
        :disabled="!Boolean(newItemText.trim())"
      >
        完成
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'feedItemEditor',
  props: ['text'],
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
.new-feed-item-editor {
  background: #EBF5FC;
  padding: 20px;
}

.input-new-item-text {
  line-height: 1.2;
  background: #FFFFFF;
  border: 2px solid #C6E7FB;
  border-radius: 8px;
  width: 100%;
  height: 100px;
  padding: 8px 6px;
  cursor: text;
  color: #333333;
  font-size: 14px;
}
.input-new-item-text:focus {
  outline: none;
}
.input-new-item-text::placeholder {
  line-height: 1.2;
}
.form-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
