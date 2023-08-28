<template>
  <!-- 搜索工作栏 -->
  <ContentWrap>
    <Search :schema="allSchemas.searchSchema" @search="setSearchParams" @reset="setSearchParams">
      <!-- 新增等操作按钮 -->
      <template #actionMore>
        <el-button
          type="primary"
          plain
          @click="openForm('create')"
          v-hasPermi="['demo:board:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
      </template>
    </Search>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <Table
      :columns="allSchemas.tableColumns"
      :data="tableObject.tableList"
      :loading="tableObject.loading"
      :pagination="{
        total: tableObject.total
      }"
      v-model:pageSize="tableObject.pageSize"
      v-model:currentPage="tableObject.currentPage"
    >
      <template #action="{ row }">
        <el-button
          link
          type="primary"
          @click="handleBoardHole(row.id)"
          v-hasPermi="['demo:board:update']"
        >
          操作
        </el-button>
        <el-button
          link
          type="primary"
          @click="openForm('update', row.id)"
          v-hasPermi="['demo:board:update']"
        >
          编辑
        </el-button>
        <el-button
          link
          type="danger"
          v-hasPermi="['demo:board:delete']"
          @click="handleDelete(row.id)"
        >
          删除
        </el-button>
      </template>
    </Table>
  </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <BoardForm ref="formRef" @success="getList" />
</template>
<script setup lang="ts" name="Board">
import { allSchemas } from './board.data'
import * as BoardApi from '@/api/demo/board'
import BoardForm from './BoardForm.vue'

// tableObject：表格的属性对象，可获得分页大小、条数等属性
// tableMethods：表格的操作对象，可进行获得分页、删除记录等操作
// 详细可见：https://doc.iocoder.cn/vue3/crud-schema/
const { tableObject, tableMethods } = useTable({
  getListApi: BoardApi.getBoardPage, // 分页接口
  delListApi: BoardApi.deleteBoard // 删除接口
})
// 获得表格的各种操作
const { getList, setSearchParams } = tableMethods
const { push } = useRouter() // 路由跳转

/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: number) => {
  formRef.value.open(type, id)
}

/** 删除按钮操作 */
const handleDelete = (id: number) => {
  tableMethods.delList(id, false)
}

/** 编辑操作 */
const handleBoardHole = (id: number) => {
  push('/board/boardHole?id=' + id)
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
