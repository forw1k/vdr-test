<template>
  <div class="mb-4 col-lg-4 col-md-4 col-sm-0">
    <div class="card h-100 border-0">
      <div class="card-body">
        <div class="card-title">{{ post.title }}</div>
        <div class="card-text">{{ post.body }}</div>
        <div class="card-subtitle">{{ post.userName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-post',
  props: {
    post: { type: Object, required: true, default: () => ({}) },
  },
};
</script>

<style lang="scss">
.card {
  text-align: left;
  background: #fff;
  padding: 20px;
  &-title {
    color: rgb(0, 155, 255);
    font-weight: bold;
    margin-bottom: 20px;
  }
  &-text {
    margin-bottom: 20px;
  }
  &-subtitle {
    font-size: 12px;
    color: #969696;
  }
}
</style>
