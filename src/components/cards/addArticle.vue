<template>
  <div>
    <!-- { userprofile.accounttype == 'ah' ? '<el-button
      type="text"
      @click="centerDialogVisible = true"
      class="addArticle"
      >Add Article</el-button
    >' : '' } -->
    <div v-if="userprofile.accounttype == 'ah'">
      <el-button
        type="text"
        @click="centerDialogVisible = true"
        class="addArticle"
        >Add Article</el-button
      >
    </div>
    <el-dialog
      v-model="centerDialogVisible"
      title="Add New Article"
      width="50%"
      destroy-on-close
      center
    >
      <div class="modal-title">
        <strong>title : </strong>
        <span>
          <input type="text" />
        </span>
      </div>
      <div class="modal-upload">
        <Modalupload v-model="name1" countId="1" />
      </div>
      <div class="modal-upload">
        <Modalupload v-model="name2" countId="2" />
      </div>
      <div class="modal-editor">
        <Ckeditor />
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import Modalupload from "./Modalupload.vue";
import Ckeditor from "./Ckeditor.vue";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    Modalupload,
    Ckeditor
  },
  data: () => ({
    name1: "image1",
    name2: "image2"
  }),
  setup() {
    const store = useStore();

    const userprofile = computed(() => {
      console.log(
        "Getting user Details in Main Menu -- " +
          JSON.stringify(store.getters.userprofile)
      );

      return store.getters.userprofile;
    });
    return {
      centerDialogVisible: ref(false),
      userprofile
    };
  }
});
</script>
<style scoped>
.addArticle {
  background-color: #0d698e;
  color: white;
  border: 0px;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
}
.addArticle:hover {
  background-color: #0d6970;
}
.modal-title {
  text-align: center;
}
.modal-upload {
  margin-top: 10px;
  text-align: center;
}
.modal-editor {
  margin-top: 10px;
}
</style>
