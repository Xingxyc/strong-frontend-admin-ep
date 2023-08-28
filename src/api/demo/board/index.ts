import request from '@/config/axios'

export interface BoardVO {
  id: number
  name: string
  status: number
}

// 查询格局版 demo列表
export const getBoardPage = async (params) => {
  return await request.get({ url: '/demo/board/page', params })
}

// 查询格局版 demo详情
export const getBoard = async (id: number) => {
  return await request.get({ url: '/demo/board/get?id=' + id })
}

// 新增格局版 demo
export const createBoard = async (data: BoardVO) => {
  return await request.post({ url: '/demo/board/create', data })
}

// 修改格局版 demo
export const updateBoard = async (data: BoardVO) => {
  return await request.put({ url: '/demo/board/update', data })
}

// 删除格局版 demo
export const deleteBoard = async (id: number) => {
  return await request.delete({ url: '/demo/board/delete?id=' + id })
}

// 导出格局版 demo Excel
export const exportBoardApi = async (params) => {
  return await request.download({ url: '/demo/board/export-excel', params })
}
