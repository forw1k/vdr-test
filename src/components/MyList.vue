<template>
  <div class="row d-flex justify-content-center">
    <my-post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import MyPost from './MyPost.vue';

export default {
  name: 'my-list',
  props: {
    posts: { type: Array, required: true, default: () => [] },
  },
  components: {
    MyPost,
  },
};
</script>

<style lang="scss">
.my-list {
  display: grid;
  row-gap: 10px;
  column-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 768px) {
  .my-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 425px) {
  .my-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
