<template>
<div class="container-fluid mt-3">
<div class="mx-3">
<div class="float-right">
  <button @click="critOrder" class="btn btn-primary mr-3 mb-2">Buat Order</button>
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
      <div slot="image" slot-scope="props">
        <img class="rounded-sm" :src="'data:image/jpeg;base64,' + props.rowData.dokumen" width="200" height="200" />
      </div>
      <div slot="actions" slot-scope="props">
      <button @click="onActionClicked('view', props.rowData)">View</button>
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
          direction: 'asc',
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
          name: '__slot:image',
          title: 'Gambar Formulir'
        },
        {
          name: 'noOrder',
          title: 'No Order',
          sortField: 'noOrder'
        },
        {
          name: 'approvalStatus',
          title: 'Status',
          sortField: 'status'
        },
        {
          name: 'createDate',
          title: 'Tanggal dibuat',
          sortField: 'createDate'
        },
        '__slot:actions'
      ]
    }
  },
  computed: {
    indexUploadSiswa () {
      return this.$store.state.indexUploadSiswa
    },
    indexTemplateSiswa () {
      return this.$store.state.indexTemplateSiswa
    }
  },
  watch: {
    'indexUploadSiswa': function () {
      if (this.$store.state.uploadSiswaData.success === true) {
        alert(this.$store.state.uploadSiswaData.message)
      } else {
        alert(this.$store.state.uploadSiswaData.message + '\n')
        this.paraf = this.$store.state.uploadSiswaData.data
        let url = window.URL.createObjectURL(new Blob([this.paraf], {type: 'text/txt'}))
        let link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'siswaFail.txt')
        link.click()
        window.URL.revokeObjectURL(url)
      }
      NProgress.done()
      this.$refs.fileExcel.value = '' // Reset Input File
      this.$refs.vuetable.refresh()
    },
    'indexTemplateSiswa': function () {
      this.$refs.vuetable.refresh()
      NProgress.done()
    }
  },
  methods: {
    init () {
      const baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin + ':10015' : window.location.origin
      this.url = baseUrl + '/umu-spp/order/listData'
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
          this.$router.push({ path: `/admin/order/viewOrder/${data.namaAkademi}` })
          break
      }
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
        this.$store.dispatch('excelUploadSiswa', [1, this.file])
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
      this.$store.dispatch('excelTemplateSiswa')
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
