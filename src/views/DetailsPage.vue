<!-- src/views/Detail.vue -->
<template>
    <div class="container">
      <h1>{{ type.charAt(0).toUpperCase() + type.slice(1) }} Details</h1>
      <div v-if="data">
        <JsonRenderer :data="data" />
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import JsonRenderer from '@/components/JsonRenderer.vue';
  
  export default {
    name: 'DetailsPage',
    components: {
      JsonRenderer,
    },
    data() {
      return {
        data: null,
        type: '',
        id: '',
      };
    },
    async mounted() {
      const urlParams = new URLSearchParams(window.location.search);
      this.type = urlParams.get('type');
      this.id = urlParams.get('id');
  
      if (this.type && this.id) {
        try {
          const response = await axios.get(`http://localhost:3000/api/${this.type}/${this.id}`);
          this.data = response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  </style>
  