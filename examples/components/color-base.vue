<template>
  <div class="color-pain">
    <h3>概述</h3>
    <p>Bin-UI 默认具有一套较为美观的配色方案，在开发中也推荐使用一下色板来达到视觉统一效果</p>
    <p>默认的色彩样式有5个主色调，并根据白色混入得到了若干个色板值，这些颜色基本可以满足中后台设计中对于颜色的要求</p>
    <h4 style="margin-bottom: 20px;">主色</h4>
    <b-row :gutter="20">
      <b-col span="8">
        <div class="color-wrap">
          <div class="item" :class="name" v-for="(name,index) in primaryName" :key="index"
               @click="copyColor(primary[index])"
               :style="{color:index<4?'#fff':'rgba(0,0,0,.85)'}">
            <span>{{ name }}</span><span>{{ primary[index] }}</span>
          </div>
        </div>
      </b-col>
      <b-col span="8">
        <div class="color-wrap">
          <div class="item" :class="name" v-for="(name,index) in successName" :key="index"
               @click="copyColor(success[index])"
               :style="{color:index<4?'#fff':'rgba(0,0,0,.85)'}">
            <span>{{ name }}</span><span>{{ success[index] }}</span>
          </div>
        </div>
      </b-col>
      <b-col span="8">
        <div class="color-wrap">
          <div class="item" :class="name" v-for="(name,index) in infoName" :key="index"
               @click="copyColor(info[index])"
               :style="{color:index<4?'#fff':'rgba(0,0,0,.85)'}">
            <span>{{ name }}</span><span>{{ info[index] }}</span>
          </div>
        </div>
      </b-col>
    </b-row>
    <br/>
    <b-row :gutter="20">
      <b-col span="8">
        <div class="color-wrap">
          <div class="item" :class="name" v-for="(name,index) in warningName" :key="index"
               @click="copyColor(warning[index])"
               :style="{color:index<4?'#fff':'rgba(0,0,0,.85)'}">
            <span>{{ name }}</span><span>{{ warning[index] }}</span>
          </div>
        </div>
      </b-col>
      <b-col span="8">
        <div class="color-wrap">
          <div class="item" :class="name" v-for="(name,index) in dangerName" :key="index"
               @click="copyColor(danger[index])"
               :style="{color:index<4?'#fff':'rgba(0,0,0,.85)'}">
            <span>{{ name }}</span><span>{{ danger[index] }}</span>
          </div>
        </div>
      </b-col>
      <b-col span="8">
        <div class="color-wrap">
          <div class="item" :class="name" v-for="(name,index) in cyanName" :key="index"
               @click="copyColor(cyan[index])"
               :style="{color:index<4?'#fff':'rgba(0,0,0,.85)'}">
            <span>{{ name }}</span><span>{{ cyan[index] }}</span>
          </div>
        </div>
      </b-col>
    </b-row>
    <br/>
    <h4 style="margin-bottom: 20px;">中性色</h4>
    <p>中性色包含了黑、白、灰。在后台设计中被大量使用到，合理地选择中性色能够令页面信息具备良好的主次关关系。</p>
    <div class="gary">
      <div class="item" v-for="(color,index) in garyColor" :key="index"
           @click="copyColor(color)"
           :style="{background:color,color:index>5?'#fff':'rgba(0,0,0,.85)'}">
        {{ color }}
      </div>
    </div>
  </div>
</template>

<script>
  import tinycolor from 'tinycolor2'

  export default {
    name: 'color-base',
    data() {
      return {
        primaryName: [
          'primary-dark',
          'primary',
          'primary-light1',
          'primary-light2',
          'primary-light3',
          'primary-light4',
          'primary-light5',
          'primary-light6'
        ],
        primary: [],
        successName: [
          'success-dark',
          'success',
          'success-light1',
          'success-light2',
          'success-light3',
          'success-light4',
          'success-light5',
          'success-light6'
        ],
        success: [],
        infoName: [
          'info-dark',
          'info',
          'info-light1',
          'info-light2',
          'info-light3',
          'info-light4',
          'info-light5',
          'info-light6'
        ],
        info: [],
        warningName: [
          'warning-dark',
          'warning',
          'warning-light1',
          'warning-light2',
          'warning-light3',
          'warning-light4',
          'warning-light5',
          'warning-light6'
        ],
        warning: [],
        dangerName: [
          'danger-dark',
          'danger',
          'danger-light1',
          'danger-light2',
          'danger-light3',
          'danger-light4',
          'danger-light5',
          'danger-light6'
        ],
        danger: [],
        cyanName: [
          'cyan-dark',
          'cyan',
          'cyan-light1',
          'cyan-light2',
          'cyan-light3',
          'cyan-light4',
          'cyan-light5',
          'cyan-light6'
        ],
        cyan: [],
        garyColor: [
          '#ffffff',
          '#fafafa',
          '#f5f5f5',
          '#f0f0f0',
          '#d9d9d9',
          '#bfbfbf',
          '#8c8c8c',
          '#595959',
          '#434343',
          '#262626',
          '#1f1f1f',
          '#141414',
          '#000000'
        ]
      }
    },
    mounted() {
      this.primary = this.initColors(this.primaryName)
      this.success = this.initColors(this.successName)
      this.info = this.initColors(this.infoName)
      this.warning = this.initColors(this.warningName)
      this.danger = this.initColors(this.dangerName)
      this.cyan = this.initColors(this.cyanName)
    },
    methods: {
      initColors(names) {
        let colors = []
        for (let i = 0; i < names.length; i++) {
          colors[i] = this.getColor(names[i])
        }
        return colors
      },
      getColor(name) {
        let node = document.querySelector(`.${name}`)
        return node
          ? tinycolor(getComputedStyle(node).getPropertyValue('background-color')).toHexString() : ''
      },
      copyColor(color) {
        this.$copy(color).then(result => {
          if (result) {
            this.$message({ type: 'success', content: `已复制颜色 ${color} 至剪切板` })
            console.log(color)
          }
        })
      }
    }
  }
</script>
