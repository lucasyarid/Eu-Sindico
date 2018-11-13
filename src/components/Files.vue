<template>
  <div
    :class="{ dark: dark }"
    class="file-upload">
    <v-layout v-if="thumb" class="file-thumb">
      <v-flex>
        <img
          :key="key"
          v-for="(file, key) in files"
          class="thumb"
          :src="file.base64Data">
      </v-flex>
    </v-layout>
    <v-layout v-if="list">
      <v-flex>
        <ul class="file-list">
          <li
            class="file-list-item d-flex justify-content-between align-space-between"
            :key="key"
            v-for="(file, key) in files">
            <v-icon
              v-if="file.fileExtension === '.jpeg' || file.fileExtension === '.png'"
              :size="20"
              class="file-list-item-icon"
              :color="isDark">
              collections
            </v-icon>
            <v-icon
              v-if="file.fileExtension === '.pdf'"
              :size="20"
              class="file-list-item-icon"
              :color="isDark">
              picture_as_pdf
            </v-icon>
            <div class="file-list-item-title">{{ file.name }}</div>
            <div class="file-list-item-close">
              <v-avatar
                :size="25"
                color="red"
                @click="selectedFiles.splice(key, 1)">
                <v-icon :size="15" color="white">close</v-icon>
              </v-avatar>
            </div>
          </li>
        </ul>
      </v-flex>
    </v-layout>
    <template v-if="!hideBtn">
      <input
        style="display: none;"
        type="file"
        ref="fileInput"
        accept=".jpg,.png,.pdf"
        @change="onFileSelected"
        multiple>
      <v-avatar v-if="dark"
        class="file-upload-button"
        size="45"
        :color="isDark"
        @click="$refs.fileInput.click()">
        <v-icon color="primary">attachment</v-icon>
      </v-avatar>
      <v-avatar v-else
        class="file-upload-button"
        size="45"
        color="accent"
        @click="$refs.fileInput.click()">
        <v-icon color="white">attachment</v-icon>
      </v-avatar>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Files',
  props: {
    files: {
      type: Array,
      required: false,
      default: () => []
    },
    list: {
      type: Boolean,
      required: false,
      default: false
    },
    thumb: {
      type: Boolean,
      required: false,
      default: false
    },
    hideBtn: {
      type: Boolean,
      required: false,
      default: false
    },
    dark: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      selectedFiles: []
    }
  },
  computed: {
    isDark () {
      if (this.dark) {
        return 'white'
      }
    }
  },
  created () {
    this.selectedFiles = this.files
  },
  watch: {
    selectedFiles () {
      this.$emit('uploadedFiles', this.selectedFiles)
    }
  },
  methods: {
    onFileSelected (e) {
      const files = e.currentTarget.files
      var vm = this
      Object.keys(files).forEach(i => {
        const file = files[i]
        var imageObject = {}
        var fileName = file.name
        imageObject.name = fileName.substr(0, 10) + '...' + fileName.substr(fileName.length - 10)
        imageObject.contentType = file.type
        imageObject.fileExtension = '.' + file.type.split('/')[1]
        const reader = new FileReader()
        reader.onload = (e) => {
          imageObject.base64Data = reader.result
          vm.selectedFiles.push(imageObject)
        }
        reader.readAsDataURL(file)
      })
    }
  }
}
</script>
