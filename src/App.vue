<template>
  <div id="app" class="container">
    <my-filter
      @filterPosts="setInputValue"
      :placeholder="'Filter by author...'"
    />
    <my-list :posts="filteredPosts" />
  </div>
</template>

<script>
import MyList from './components/MyList.vue';
import MyFilter from './components/MyFilter.vue';

export default {
  name: 'App',
  components: {
    MyList,
    MyFilter,
  },
  data() {
    return {
      posts: [],
      users: [],
      inputValue: '',
    };
  },
  computed: {
    filteredPosts() {
      return this.inputValue !== ''
        ? this.posts.filter((post) =>
            post.userName
              .toLowerCase()
              .includes(this.inputValue.trim().toLowerCase())
          )
        : this.posts;
    },
  },
  methods: {
    async getPosts() {
      const result = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );
      const posts = await result.json();
      this.posts = posts;
    },
    async getUsers() {
      const result = await fetch(
        'https://jsonplaceholder.typicode.com/users?_limit=10'
      );
      const users = await result.json();
      this.users = users;
    },
    preparedPosts() {
      this.posts = this.posts.map((post) => {
        const user = this.users.find(({ id }) => id === post.id);
        return { ...post, userName: user.name };
      });
    },
    setInputValue(searchQuery) {
      this.inputValue = searchQuery;
    },
  },
  async mounted() {
    try {
      await this.getUsers();
      await this.getPosts();
      this.preparedPosts();
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
}
body {
  min-height: 100vh;
  background-color: #f1f1ff !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px 0;
  width: 100%;
  height: 100%;
}
</style>
