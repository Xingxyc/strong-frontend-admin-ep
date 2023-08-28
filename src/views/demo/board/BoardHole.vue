<script setup lang="ts">
import { useDraggable, type UseDraggableReturn } from 'vue-draggable-plus' // 拖拽

const { query } = useRoute() // 路由携带参数
const loading = ref(false) // 加载中

const mockData: any = ref([
  { id: 1, name: 'name1' },
  { id: 2, name: 'name2' },
  { id: 3, name: 'name3' },
  { id: 4, name: 'name4' },
  { id: 5, name: 'name5' },
  { id: 6, name: 'name6' }
])

const el = ref() // el-table 的 ref
const draggableDisable = ref(false)
// 返回值是一个对象，包含了一些方法，比如 start、destroy、pause 等
const draggable = useDraggable<UseDraggableReturn>(el, mockData, {
  // disabled: draggableDisable.value,
  animation: 150
})

const handleDraggableDisable = () => {
  if (draggableDisable.value) {
    draggable.pause()
  } else {
    draggable.start()
  }
  draggableDisable.value = !draggableDisable.value
}
</script>

<template>
  <div class="BoardHole">
    <h2>BoardHole {{ query.id }}</h2>
    <el-row :gutter="20" justify="space-between">
      <el-col :xl="16" :lg="16" :md="16" :sm="16" :xs="16">
        <el-card shadow="never">
          <template #header>
            <div class="flex justify-between h-3">
              <span>Card name</span>
              <el-button
                v-if="!draggableDisable"
                class="button"
                type="primary"
                @click="handleDraggableDisable"
                >开启</el-button
              >
              <el-button v-else class="button" type="danger" @click="handleDraggableDisable"
                >关闭</el-button
              >
            </div>
          </template>
          <el-skeleton :loading="loading">
            <el-row ref="el">
              <el-col
                v-for="(item, index) in mockData"
                :key="index"
                :xl="8"
                :lg="8"
                :md="8"
                :sm="8"
                :xs="8"
              >
                <el-card shadow="hover"> {{ item.name }} </el-card>
              </el-col>
            </el-row>
          </el-skeleton>
        </el-card>
      </el-col>
      <el-col :xl="8" :lg="8" :md="8" :sm="8" :xs="8">12121</el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped></style>
