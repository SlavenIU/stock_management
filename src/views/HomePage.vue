<!-- src/views/Home.vue -->
<template>
    <div class="container">
      <h1>Welcome to Stock Management</h1>
      <p>Select a type and ID to view details:</p>
      <form @submit.prevent="goToDetail">
        <div>
          <label for="type">Type:</label>
          <select v-model="type" id="type">
            <option value="article">Article</option>
            <option value="section">Section</option>
            <option value="stock">Stock</option>
          </select>
        </div>
        <div>
          <label for="id">ID:</label>
          <input v-model="id" id="id" type="number" required />
        </div>
        <button type="submit">Go</button>
      </form>
  
      <div v-if="message" class="message">{{ message }}</div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'HomePage',
    data() {
      return {
        type: '',
        id: '',
        message: '',
      };
    },
    methods: {
      goToDetail() {
        if (this.type && this.id) {
          this.$router.push({ path: '/details', query: { type: this.type, id: this.id } });
        } else {
          this.message = 'Please select both type and id.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  form {
    margin: 20px 0;
  }
  .message {
    color: red;
  }
  </style>
  