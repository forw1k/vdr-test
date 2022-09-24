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

