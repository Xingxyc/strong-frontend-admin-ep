import type { CrudSchema } from '@/hooks/web/useCrudSchemas'
import { getIntDictOptions } from '@/utils/dict'
import { dateFormatter } from '@/utils/formatTime'

// 表单校验
export const rules = reactive({
  name: [required],
  status: [required]
})

// CrudSchema https://doc.iocoder.cn/vue3/crud-schema/
const crudSchemas = reactive<CrudSchema[]>([
  {
    label: '编号',
    field: 'id',
    isForm: false
  },
  {
    label: '版号',
    field: 'name',
    isSearch: true
  },
  {
    label: '状态',
    field: 'status',
    isSearch: true,
    dictType: DICT_TYPE.COMMON_STATUS,
    search: {
      api: () => getIntDictOptions(DICT_TYPE.COMMON_STATUS) as any,
      component: 'Select',
      componentProps: {
        optionsAlias: {
          labelField: 'label',
          valueField: 'value'
        }
      }
    },
    form: {
      api: () => getIntDictOptions(DICT_TYPE.COMMON_STATUS) as any,
      component: 'Select',
      componentProps: {
        optionsAlias: {
          labelField: 'label',
          valueField: 'value'
        }
      }
    }
  },
  {
    label: '创建时间',
    field: 'createTime',
    formatter: dateFormatter,
    isSearch: true,
    search: {
      component: 'DatePicker',
      componentProps: {
        valueFormat: 'YYYY-MM-DD HH:mm:ss',
        type: 'daterange',
        defaultTime: [new Date('1 00:00:00'), new Date('1 23:59:59')]
      }
    },
    isForm: false
  },
  {
    label: '操作',
    field: 'action',
    isForm: false
  }
])
export const { allSchemas } = useCrudSchemas(crudSchemas)
