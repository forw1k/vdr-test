<template>
  <div class="search-bar">
    <div class="input-group">
      <div class="input-group-append">
        <button @click="search" class="btn-lg search-btn" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </button>
      </div>
      <input
        type="text"
        class="form-control input-text"
        placeholder="Filter by author..."
        @input="searchQuery = $event.target.value"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-filter',
  props: {
    placeholder: {
      type: String,
    },
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    search() {
      this.$emit('filterPosts', this.searchQuery);
    },
  },
};
</script>

<style lang="scss">
.search-bar {
  justify-content: center;
  margin: auto;
  width: 400px;
  margin-bottom: 20px;
}
.search-btn {
  border: 1px solid #ced4da;
  background: #fff;
  padding: 10px;
  transition: 0.2s;
  cursor: pointer;
  &:active {
    background: #ececec;
  }
}
@media (max-width: 768px) {
  .search-bar {
    width: 300px;
  }
}
</style>
