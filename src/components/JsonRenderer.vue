<!-- src/components/JsonRenderer.vue -->
<template>
    <div class="renderer">
      <div v-if="isObject(data)" class="object">
        <div v-for="(value, key) in data" :key="key" class="key-value">
          <span class="key">{{ key }}:</span>
          <JsonRenderer :data="value" />
        </div>
      </div>
      <div v-else-if="Array.isArray(data)" class="array">
        <div v-for="(item, index) in data" :key="index" class="array-item">
          <JsonRenderer :data="item" />
        </div>
      </div>
      <div v-else class="value">
        {{ data }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'JsonRenderer',
    props: {
      data: {
        type: [Object, Array, String, Number, Boolean, null],
        required: true,
      },
    },
    methods: {
      isObject(value) {
        return value && typeof value === 'object' && !Array.isArray(value);
      },
    },
  };
  </script>
  
  <style scoped>
  .renderer {
    margin-left: 10px;
  }
  .key {
    font-weight: bold;
    color: #2c3e50;
  }
  .value {
    color: #555;
    word-break: break-word;
  }
  .object,
  .array {
    margin-left: 10px;
    border: 2px solid #ccc;
    padding-left: 10px;
    margin-top: 5px;
  }
  </style>
  