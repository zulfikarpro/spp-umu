<template>
<div class="container-fluid mt-3">
<div class="mx-3">
<div class="float-right form-inline">
  <div class="form-group mr-3 mb-2">
    <input @keyup.enter="filterSubmit" type="text" class="form-control" v-model="filterOrder" placeholder="No Order">
  </div>
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
      <div slot="actions" slot-scope="props" class="d-flex">
      <button class="btn mx-1 btn-success" @click="onActionClicked('view', props.rowData)">View</button>
      <button class="btn mx-1 btn-primary" :class="classEdit" v-if="props.rowData.approvalStatus === 0 || props.rowData.approvalStatus === 2" @click="onActionClicked('edit', props.rowData)">Edit</button>
      <button class="btn mx-1 btn-danger" :class="classDelete" v-if="props.rowData.approvalStatus === 0 || props.rowData.approvalStatus === 2" @click="onActionClicked('delete', props.rowData)">Delete</button>
      <button class="btn mx-1 btn-primary" :class="classApprove" v-if="props.rowData.approvalStatus === 0" @click="onActionClicked('approve', props.rowData)">Approve</button>
      <button class="btn mx-1 btn-danger" :class="classReject" v-if="props.rowData.approvalStatus === 0" @click="onActionClicked('reject', props.rowData)">Reject</button>
      </div>
      </vuetable>
      </div>
      <div style="clear:both;"></div>
      <vuetable-pagination  ref="pagination" :css="css.pagination" style="float:right;"
      @vuetable-pagination:change-page="onChangePage"
    ></vuetable-pagination>
</div>
<modal v-if="showModal" @close="showModal = false">
<div slot="header" v-if="rejectModal">Reject Form</div>
<div slot="body" v-if="confirmModal">Apakah Kamu Yakin Ingin Menghapus Order ?</div>
<div slot="body" v-if="rejectModal" class="my-3">
<textarea class="form-control" v-model="dataReject.keterangan" placeholder="Alasan Reject Order...." rows="3"></textarea>
</div>
<div slot="body" v-else>{{ msgModal }}</div>
<div slot="footer" v-if="confirmModal">
  <button @click="deleteFromModal('yes')" class="btn btn-primary">Ya</button>
  <button @click="deleteFromModal('no')" class="btn btn-danger">Tidak</button>
</div>
<div slot="footer" v-if="rejectModal">
  <button @click="rejectFromModal('yes')" class="btn btn-primary">Oke</button>
  <button @click="rejectFromModal('no')" class="btn btn-danger">Batal</button>
</div>
</modal>
</div>
</template>

<script>
import Vuetable from 'vuetable-2'
import VuetablePagination from
  'vuetable-2/src/components/VuetablePagination'
import NProgress from 'nprogress'
import modal from '../../Modal'
import GlobalVar from '../../mixins/global-var'

export default {
  name: 'OrderList',
  components: {
    Vuetable,
    VuetablePagination,
    modal
  },
  mixins: [GlobalVar],
  data () {
    return {
      classApprove: '',
      classEdit: '',
      classDelete: '',
      classReject: '',
      paraf: '',
      appendParams: {},
      url: '',
      showModal: false,
      msgModal: '',
      filterOrder: '',
      countFilter: 0,
      confirmModal: false,
      rejectModal: false,
      dataDelete: {},
      dataReject: {
        keterangan: '',
        idAkademi: '',
        email: ''
      },
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
          activeClass: 'btn-primary color-light text-white',
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
          name: 'keterangan',
          title: 'Keterangan',
          sortField: 'keterangan'
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
    },
    indexRejectOrder () {
      return this.$store.state.indexRejectOrder
    },
    triggerFilterOrder () {
      return this.countFilter
    }
  },
  watch: {
    'indexApprovalOrder': function () {
      if (this.$store.state.oneApprovalOrder.success === true) {
        this.showModal = true
        this.msgModal = 'Berhasil Approval Order'
      } else {
        this.showModal = true
        this.msgModal = this.$store.state.oneApprovalOrder.message
      }
      this.$refs.vuetable.refresh()
      NProgress.done()
    },
    'indexDeleteOrder': function () {
      if (this.$store.state.deleteOrderData.success === true) {
        this.showModal = true
        this.msgModal = 'Berhasil Hapus Order'
      } else {
        this.showModal = true
        this.msgModal = this.$store.state.deleteOrderData.message
      }
      this.$refs.vuetable.refresh()
      NProgress.done()
    },
    'indexRejectOrder': function () {
      if (this.$store.state.oneRejectOrder.success === true) {
        this.showModal = true
        this.msgModal = 'Berhasil Reject Order'
      } else {
        this.showModal = true
        this.msgModal = this.$store.state.oneRejectOrder.message
      }
      this.$refs.vuetable.refresh()
      NProgress.done()
    },
    'triggerFilterOrder': function () {
      this.$refs.vuetable.refresh()
    }
  },
  methods: {
    init () {
      // const baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin + ':10015' : window.location.origin
      // const baseUrl = window.location.origin
      this.url = this.baseUrl + '/umu-spp/order/listData'
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
      if (this.$store.state.permissionData.reject_u === 0) {
        this.classReject = 'd-none'
      } else {
        this.classReject = ''
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
    deleteFromModal (params) {
      switch (params) {
        case 'yes' :
          if (this.dataDelete.approvalStatus === 1) {
            this.showModal = false
            this.failDelete()
            this.confirmModal = false
          } else {
            this.$store.dispatch('deleteOrder', this.dataDelete.idAkademi)
            this.confirmModal = false
            this.showModal = false
          }
          break
        case 'no' :
          this.confirmModal = false
          this.showModal = false
          NProgress.done()
          this.$refs.vuetable.refresh()
          break
      }
    },
    rejectFromModal (params) {
      switch (params) {
        case 'yes' :
          this.$store.dispatch('rejectOrder', [this.dataReject.idAkademi, this.dataReject.email, this.dataReject.keterangan])
          this.rejectModal = false
          this.showModal = false
          break
        case 'no' :
          this.rejectModal = false
          this.showModal = false
          NProgress.done()
          this.$refs.vuetable.refresh()
          break
      }
    },
    failDelete () {
      return new Promise(resolve => {
        setTimeout(() => {
          this.showModal = true
          this.msgModal = 'Order Yang Sudah Aktif Tidak Bisa Dihapus'
          NProgress.done()
        }, 1000)
      })
    },
    onActionClicked (action, data) {
      switch (action) {
        case 'view':
          if (data.approvalStatus === 0) {
            this.$store.state.checkApprovalFromView = true
          } else {
            this.$store.state.checkApprovalFromView = false
          }
          this.$router.push({ path: `/admin/order/viewOrder/${data.idAkademi}` })
          break
        case 'edit':
          this.$router.push({ path: `/admin/order/editOrder/${data.idAkademi}` })
          break
        case 'delete':
          NProgress.configure({ showSpinner: false })
          NProgress.start()
          this.dataDelete = {
            approvalStatus: data.approvalStatus,
            idAkademi: data.idAkademi
          }
          this.showModal = true
          this.confirmModal = true
          // if (confirm('Apakah Kamu Yakin Ingin Menghapus Order ?')) {
          //   if (data.approvalStatus === 1) {
          //     alert('Order Yang Sudah Aktif Tidak Bisa Dihapus')
          //     NProgress.done()
          //   } else {
          //     this.$store.dispatch('deleteOrder', data.idAkademi)
          //   }
          // } else {
          //   this.$refs.vuetable.refresh()
          //   NProgress.done()
          // }

          break
        case 'approve':
          this.$store.dispatch('approvalOrder', [data.idAkademi, this.objSession.email])
          NProgress.configure({ showSpinner: false })
          NProgress.start()
          break
        case 'reject':
          NProgress.configure({ showSpinner: false })
          NProgress.start()
          this.dataReject['idAkademi'] = data.idAkademi
          this.dataReject['email'] = this.objSession.email
          this.showModal = true
          this.rejectModal = true
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
    filterSubmit () {
      // const baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin + ':10015' : window.location.origin
      const baseUrl = window.location.origin
      this.url = baseUrl + '/umu-spp/order/listData?noOrder=' + this.filterOrder
      this.countFilter++
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
