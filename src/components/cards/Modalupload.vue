<template>
  <el-upload
    class="upload-demo"
    action="http://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
  >
    <el-button size="small" type="primary" :value="countId"
      >Image {{ countId }}</el-button
    >
  </el-upload>
</template>
<script lang="ts">
export default {
  props: ["countId"],
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      alert("File size is exceeded.");
    },
    beforeRemove(file, fileList) {
      return alert(`Cancel the transfert of ${file.name} ?`);
    }
  }
};
</script>
