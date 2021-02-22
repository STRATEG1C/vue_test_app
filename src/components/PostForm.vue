<template>
  <form @submit.prevent="submit">
    <label>
      <input type="text" placeholder="title" v-model="title">
    </label>
    <p v-if="titleError" class="error">Title must contain symbols</p>
    <label>
      <input type="text" placeholder="body" v-model="body">
    </label>
    <p v-if="bodyError" class="error">Body must contain symbols</p>
    <button type="submit">Create Post</button>
    <hr>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      title: '',
      body: '',
      titleError: false,
      bodyError: false
    };
  },
  methods: {
    ...mapMutations(['createPost']),
    submit() {
      !this.title.trim() && (this.titleError = true);
      !this.body.trim() && (this.bodyError = true);

      if (!this.title.trim() || !this.body.trim()) {
        return;
      }

      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      });
      this.title = this.body = '';
      this.titleError = this.bodyError = false;
    }
  }
};
</script>


<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
}

.error {
  color: #BB3939;
}
</style>

