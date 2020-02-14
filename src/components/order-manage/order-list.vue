<template>
<div class="container-fluid mt-3">
<div class="mx-3">
<div class="float-right">
  <button @click="critOrder" v-if="this.$store.state.permissionData.order_c" class="btn btn-primary mr-3 mb-2">Buat Order</button>
  <!-- <button class="btn btn-primary mr-3 mb-2" @click="tempExcel">Template Excel</button>
  <button class="btn btn-primary mb-2" @click="uploadExcel">Upload Excel
    <input type="file" style="display:none" ref="fileExcel" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" @change="uploadpick">
  </button> -->
  </div>
<div class="table-responsive">
<vuetable ref="vuetable"
          :query-params="queryParams"
          :api-url="url"
          :fields="fields"
          :sortOrder="sortOrder"
          :css="css.table"
          :append-params="appendParams"
          :load-on-start="false"
          pagination-path=""
          data-path="content"
          noDataTemplate=""
          @vuetable:pagination-data="onPaginationData"
        >
      <div slot="numbering" slot-scope="props">
        {{ props.rowIndex + 1}}
      </div>
      <div slot="actions" slot-scope="props">
      <button class="btn btn-success" @click="onActionClicked('view', props.rowData)">View</button>
      <button class="btn btn-primary" :class="classEdit" @click="onActionClicked('edit', props.rowData)">Edit</button>
      <button class="btn btn-danger" :class="classDelete" @click="onActionClicked('delete', props.rowData)">Delete</button>
      <button class="btn btn-primary" :class="classApprove" v-if="props.rowData.approvalStatus === 0" @click="onActionClicked('approve', props.rowData)">Approve</button>
      </div>
      </vuetable>
      </div>
      <div style="clear:both;"></div>
      <vuetable-pagination  ref="pagination" :css="css.pagination" style="float:right;"
      @vuetable-pagination:change-page="onChangePage"
    ></vuetable-pagination>
</div>
</div>
</template>

<script>
import Vuetable from 'vuetable-2'
import VuetablePagination from
  'vuetable-2/src/components/VuetablePagination'
import NProgress from 'nprogress'

export default {
  name: 'OrderList',
  components: {
    Vuetable,
    VuetablePagination
  },
  data () {
    return {
      objSession: JSON.parse(sessionStorage.getItem('umuSS')),
      classApprove: '',
      classEdit: '',
      classDelete: '',
      paraf: '',
      appendParams: {},
      url: '',
      queryParams: {
        sort: 'sort',
        page: 'page',
        perPage: 'size'
      },
      sortOrder: [
        {
          field: 'idAkademi',
          direction: 'desc',
          sortField: 'idAkademi'
        }
      ],
      css: {
        table: {
          tableClass: 'table table-striped table-bordered table-hovered',
          loadingClass: 'loading',
          ascendingIcon: 'glyphicon glyphicon-chevron-up',
          descendingIcon: 'glyphicon glyphicon-chevron-down',
          handleIcon: 'glyphicon glyphicon-menu-hamburger'
        },
        pagination: {
          infoClass: 'pull-left',
          wrapperClass: 'vuetable-pagination pull-right',
          activeClass: 'btn-primary color-light',
          disabledClass: 'disabled',
          pageClass: 'btn btn-border',
          linkClass: 'btn btn-border',
          icons: {
            first: '',
            prev: '',
            next: '',
            last: ''
          }
        }
      },
      fields: [
        {
          name: '__slot:numbering',
          title: 'No'
        },
        {
          name: 'noOrder',
          title: 'No Order',
          sortField: 'noOrder'
        },
        {
          name: 'akademiName',
          title: 'Nama Sekolah/Universitas',
          sortField: 'akademiName'
        },
        {
          name: 'akademiEmail',
          title: 'Email Terdaftar',
          sortField: 'akademiEmail'
        },
        {
          name: 'approvalStatus',
          title: 'Status',
          sortField: 'status',
          callback: 'tableStatus'
        },
        {
          name: 'createDate',
          title: 'Tanggal Order',
          sortField: 'createDate'
        },
        '__slot:actions'
      ]
    }
  },
  computed: {
    indexApprovalOrder () {
      return this.$store.state.indexApprovalOrder
    },
    indexDeleteOrder () {
      return this.$store.state.indexDeleteOrder
    }
  },
  watch: {
    'indexApprovalOrder': function () {
      if (this.$store.state.oneApprovalOrder.success === true) {
        alert('Berhasil Approval Order')
      } else {
        alert(this.$store.state.oneApprovalOrder.message)
      }
      this.$refs.vuetable.refresh()
      NProgress.done()
    },
    'indexDeleteOrder': function () {
      if (this.$store.state.deleteOrderData.success === true) {
        alert('Berhasil Hapus Order')
      } else {
        alert(this.$store.state.deleteOrderData.message)
      }
      this.$refs.vuetable.refresh()
      NProgress.done()
    }
  },
  methods: {
    init () {
      const baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin + ':10015' : window.location.origin
      this.url = baseUrl + '/umu-spp/order/listData'
      this.showHiddenApprove()
    },
    showHiddenApprove () {
      if (this.$store.state.permissionData.approval_u === 0) {
        this.classApprove = 'd-none'
      } else {
        this.classApprove = ''
      }
      if (this.$store.state.permissionData.order_u === 0) {
        this.classEdit = 'd-none'
      } else {
        this.classEdit = ''
      }
      if (this.$store.state.permissionData.order_d === 0) {
        this.classDelete = 'd-none'
      } else {
        this.classDelete = ''
      }
    },
    getSortParam: function (sortOrder) {
      this.loaded = false
      return sortOrder.map(function (sort) {
        return sort.sortField + ',' +
        (sort.direction === 'asc' ? 'asc' : 'desc')
      }).join(',')
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    onPaginationData (paginationData) {
      paginationData.total = paginationData.totalElements
      paginationData.per_page = paginationData.size
      paginationData.current_page = paginationData.number + 1
      paginationData.last_page = paginationData.totalPages
      paginationData.from = paginationData.number * paginationData.size + 1
      paginationData.to = paginationData.from * paginationData.numberOfElements - 1
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onActionClicked (action, data) {
      switch (action) {
        case 'view':
          this.$router.push({ path: `/admin/order/viewOrder/${data.idAkademi}` })
          break
        case 'edit':
          this.$router.push({ path: `/admin/order/editOrder/${data.idAkademi}` })
          break
        case 'delete':
          NProgress.configure({ showSpinner: false })
          NProgress.start()
          if (confirm('Apakah Kamu Yakin Ingin Menghapus Order ?')) {
            if (data.approvalStatus) {
              alert('Order Yang Sudah Aktif Tidak Bisa Dihapus')
              NProgress.done()
            } else {
              this.$store.dispatch('deleteOrder', data.idAkademi)
            }
          } else {
            this.$refs.vuetable.refresh()
            NProgress.done()
          }
          break
        case 'approve':
          this.$store.dispatch('approvalOrder', [data.idAkademi, this.objSession.email])
          NProgress.configure({ showSpinner: false })
          NProgress.start()
          break
      }
    },
    tableStatus (value) {
      if (value === 0) {
        value = 'Belum Aktif'
      }
      if (value === 1) {
        value = 'Aktif'
      }
      if (value === 2) {
        value = 'Ditolak'
      }
      return value
    },
    critOrder () {
      this.$router.push('addOrder/1')
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style>

</style>
