<template>
  <div v-if="modal" class="bin-icon-select">
    <b-input :size="size" :value="selectIcon"
             :placeholder="placeholder"
             :prefix="selectIcon"
             :disabled="disabled"
             readonly clearable @clear="selectChange('')"></b-input>
    <b-button :disabled="disabled" :type="buttonType" :size="size" @click="iconDialog = true" plain>选择</b-button>
    <b-modal title="选择图标" v-model="iconDialog" width="1000"
             :body-styles="{padding:0}" footer-hide :stop-remove-scroll="stopRemoveScroll">
      <div style="height: 500px; overflow: auto;padding: 12px 7px;">
        <div class="icon-wrap">
          <div class="icon-item" v-for="icon in icons" :key="icon" :title="icon"
               @click="selectChange(icon)">
            <b-icon :name="icon"></b-icon>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
  <b-select v-else :disabled="disabled"
            :value="selectIcon" :prefix="selectIcon" filterable clearable
            :placeholder="placeholder" @change="selectChange" @clear="selectChange('')">
    <b-option v-for="item in icons" :value="item" :key="item">
      <b-icon :name="item" style="margin-right: 8px;"></b-icon>{{ item }}
    </b-option>
  </b-select>
</template>

<script>
import Emitter from '../../mixins/emitter'
import allIcons from './icon.config'

export default {
  name: 'BIconSelect',
  mixins: [Emitter],
  props: {
    modal: { // 开启弹窗选择
      type: Boolean
    },
    value: {
      type: String
    },
    filterable: {
      type: Boolean
    },
    clearable: {
      type: Boolean
    },
    placeholder: {
      type: String,
      default: '请选择图标'
    },
    disabled: {
      type: Boolean
    },
    size: {
      type: String,
      default: 'default'
    },
    buttonType: {
      type: String,
      default: 'primary'
    },
    stopRemoveScroll: Boolean,
    customIcons: Array
  },
  data() {
    return {
      icons: [],
      selectIcon: '',
      iconDialog: false
    }
  },
  created() {
    this.icons = this.customIcons || allIcons
  },
  watch: {
    value: {
      handler(val) {
        this.selectIcon = val
      },
      immediate: true
    }
  },
  methods: {
    selectChange(val) {
      this.selectIcon = val
      this.iconDialog = false
      this.$emit('input', val)
      this.$emit('change', val)
      this.dispatch('BFormItem', 'form-change', val)
    }
  }
}
</script>
