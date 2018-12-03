<template>
  <div class="component-container">
    <div @click="showInput" v-show="!isInputShow" class="btn-new-item">有什么新鲜事？</div>
    <form v-show="isInputShow" @submit.prevent="submitNewItem">
      <textarea
        v-model="newItemText"
        ref="textarea"
        @blur="hideInput"
        class="input-new-item-text"
        placeholder="有什么新鲜事？"
        title="new-item-text">
      </textarea>
      <button class="btn btn-primary btn-sm">发送</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewFeedItem',
  data() {
    return {
      isInputShow: false,
      newItemText: '',
    };
  },
  methods: {
    showInput() {
      this.isInputShow = true;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    hideInput() {
      if (!this.newItemText.trim()) {
        this.newItemText = '';
        this.isInputShow = false;
      }
    },
    submitNewItem() {
      window.console.log(this.newItemText);
    },
  },
};
</script>

<style scoped>
.component-container {
  background: #EBF5FC;
  padding: 8px 10px;
}
.btn-new-item {
  line-height: 1.2;
  background: #FFFFFF;
  border: 1px solid #C6E7FB;
  border-radius: 8px;
  width: 100%;
  padding: 8px 6px;
  cursor: text;
  color: #1DA1F2;
  font-size: 14px;
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
</style>
