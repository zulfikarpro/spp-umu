<template>
<div class="container-fluid">
        <div class="mx-3">
            <div class="float-right mb-3 d-none">
            <button @click="tempExcel">Template Excel</button>
            <button @click="uploadExcel">Upload Excel
                <input type="file" style="display:none" ref="fileExcel" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" @change="uploadpick">
            </button>
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
                </vuetable>
                <div style="clear:both;"></div>
                <vuetable-pagination  ref="pagination" :css="css.pagination" style="float:right;"
                @vuetable-pagination:change-page="onChangePage"
                ></vuetable-pagination>
            </div>
              <div class="float-right mt-7 mb-5">
                <router-link to="/admin/feeManage/" style="padding-left: 7rem;padding-right: 7rem" class="btn btn-primary btn-lg py-3">Kembali</router-link>
              </div>
            </div>
    </div>
</template>

<script>
import Vuetable from 'vuetable-2'
import VuetablePagination from
  'vuetable-2/src/components/VuetablePagination'
import NProgress from 'nprogress'

export default {
  name: 'FeeBillingView',
  components: {
    Vuetable,
    VuetablePagination
  },
  data () {
    return {
      billingData: {},
      appendParams: {},
      url: '',
      queryParams: {
        sort: 'sort',
        page: 'page',
        perPage: 'size'
      },
      sortOrder: [
        {
          field: 'name',
          direction: 'desc',
          sortField: 'name'
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
          name: 'name',
          title: 'Nama Tagihan',
          sortField: 'name'
        },
        {
          name: 'jumlahTertagih',
          title: 'Jumlah Tertagih',
          sortField: 'jumlahTertagih'
        },
        {
          name: 'noInvoice',
          title: 'No Invoice',
          sortField: 'noInvoice'
        },
        {
          name: 'tanggalInvoice',
          title: 'Tanggal Invoice',
          sortField: 'tanggalInvoice',
          callback: 'tableTanggal|YYYY-MM-DD'
        },
        {
          name: 'status',
          title: 'Status',
          sortField: 'status',
          callback: 'tableStatus'
        }
      ]
    }
  },
  computed: {
    indexUploadTagihan () {
      return this.$store.state.indexUploadTagihan
    },
    indexSiswaData () {
      return this.$store.state.indexSiswaData
    },
    indexTemplateTagihan () {
      return this.$store.state.indexTemplateTagihan
    }
  },
  watch: {
    'indexUploadTagihan': function () {
      if (this.$store.state.uploadTagihanData.success === true) {
        alert('Berhasil: ' + this.$store.state.uploadTagihanData.data.inserted + '\n' + 'Total data: ' + this.$store.state.uploadTagihanData.data.total)
      } else {
        alert(this.$store.state.uploadTagihanData.message)
      }
      NProgress.done()
      this.$refs.fileExcel.value = '' // Reset Input File
      this.$refs.vuetable.refresh()
    },
    'indexSiswaData': function () {
      NProgress.start()
      this.billingData = this.$store.state.oneSiswaData.data
      NProgress.done()
    },
    'indexTemplateTagihan': function () {
      this.$refs.vuetable.refresh()
      NProgress.done()
    }
  },
  methods: {
    init () {
      // const baseUrl = window.location.origin
      const baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin + ':10015' : window.location.origin
      this.url = baseUrl + '/umu-spp/tagihan/getdata'
      this.appendParams = {
        idSiswa: this.$route.params.id
      }
      this.$store.dispatch('getSiswaOne', this.$route.params.id)
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
    tableTanggal (value) {
      return (value === null)
        ? ''
        : value
    },
    tableStatus (value) {
      return (value === 'close')
        ? 'Done'
        : 'Dalam Proses'
    },
    uploadExcel () {
      this.$refs.fileExcel.click()
    },
    uploadpick (val) {
      let dataexcel = new FormData()
      dataexcel.append('file', val.target.files[0])
      let extfile = val.target.files[0].name.substring(val.target.files[0].name.lastIndexOf('.'))
      NProgress.configure({ showSpinner: false })
      NProgress.start()
      if (extfile === '.xls' || extfile === '.xlsx') {
        this.file = dataexcel
        var reader = new FileReader()
        reader.readAsDataURL(val.target.files[0])
        this.$store.dispatch('excelUploadTagihan', [this.$route.params.id, this.file, 1])
      } else {
        this.failedMsg = 'Tipe Excel harus xlsx/xls'
        alert('Tipe Excel harus xlsx/xls')
        this.$refs.fileExcel.value = '' // Reset Input File
        this.$refs.vuetable.refresh()
        NProgress.done()
      }
    },
    tempExcel () {
      NProgress.configure({ showSpinner: false })
      NProgress.start()
      this.$store.dispatch('excelTemplateTagihan')
    }
  },
  mounted () {
    this.init()
    // this.$nextTick(() => {
    // })
  }
}
</script>

<style scoped>
.mt-7 {
  margin-top: 7rem;
}
</style>
