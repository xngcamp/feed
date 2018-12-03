<template>
  <div class="component-container">
    <div class="main">
      <div class="avatar">
        <img src="https://via.placeholder.com/60x60" alt="avatar">
      </div>
      <div class="content">
        <div class="user-info">
          <b class="user-info-item user-name">西木心亘大㸚</b>
          <span class="user-info-item">@lihs</span>
          <span class="user-info-item">· 一个小时前</span>
        </div>
        <div class="text">
          快来围观，这是我的第一条微博！
          快来围观，这是我的第一条微博！
          快来围观，这是我的第一条微博！
          快来围观，这是我的第一条微博！
          快来围观，这是我的第一条微博！
          快来围观，这是我的第一条微博！
          快来围观，这是我的第一条微博！
          快来围观，这是我的第一条微博！
          快来围观，这是我的第一条微博！
          快来围观，这是我的第一条微博！
          快来围观，这是我的第一条微博！
          快来围观，这是我的第一条微博！
        </div>
      </div>
    </div>
    <div class="footer">
      <button type="button" class="btn btn-link">编辑</button>
      <button type="button" class="btn btn-link text-danger">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedItem',
};
</script>

<style scoped>
  .component-container {
    transition: all 300ms ease;
    border-top: 1px solid #E7ECEF;
    padding: 10px 12px;
  }
  .component-container:hover {
    background: #F6F8FA;
  }
  .component-container > .main {
    display: flex;
  }
  .component-container > .main > .avatar {
    flex: 0 0 60px;
  }
  .component-container > .main > .content {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }
  .component-container > .main > .content > .user-info > .user-info-item {
    margin-left: 2px;
    color: #999999;
  }
  .component-container > .main > .content > .user-info > .user-name {
    color: #000000;
  }
  .component-container > .main > .content > .user-info > .user-name:hover {
    color: #5D9FEE;
    text-decoration: underline;
  }
  .component-container > .main > .text {
    margin-top: 4px;
    line-height: 1.2;
  }
  .component-container > .footer {
    display: flex;
    justify-content: flex-end;
  }
</style>
