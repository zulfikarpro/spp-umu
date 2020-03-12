<template>
<div class="container-fluid mt-3">
  <div class="form-inline float-right">
    <div class="form-group mr-3 mb-2">
      <input @keyup.enter="filterSubmit" type="text" class="form-control" v-model="nimFilter" placeholder="Filter Nim">
    </div>
    <div class="form-group mr-3 mb-2">
      <input  @keyup.enter="filterSubmit" type="text" class="form-control" v-model="periodeFilter" placeholder="Filter Tahun Ajaran">
    </div>
    <div v-if="this.$store.state.permissionData.billing_c">
    <button class="btn btn-primary  mr-3 mb-2" @click="tempExcel">Template Excel</button>
    <button class="btn btn-primary mb-2" @click="uploadExcel">Upload Excel
    <input type="file" style="display:none" ref="fileExcel" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" @change="uploadpick">
    </button>
    </div>
  </div>
            <!-- <div class="float-right mb-3">
            <input type="text" class="form-control" placeholder="Filter Nim"/>
            <button class="btn btn-primary" @click="tempExcel">Template Excel</button>
            <button class="btn btn-primary" @click="uploadExcel">Upload Excel
                <input type="file" style="display:none" ref="fileExcel" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" @change="uploadpick">
            </button>
            </div> -->
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
</div>
</template>

<script>
import Vuetable from 'vuetable-2'
import VuetablePagination from
  'vuetable-2/src/components/VuetablePagination'
import NProgress from 'nprogress'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import Accounting from 'accounting/accounting'

export default {
  name: 'billingList',
  components: {
    Vuetable,
    VuetablePagination
  },
  data () {
    return {
      objSession: JSON.parse(sessionStorage.getItem('umuSS')),
      billingData: {},
      appendParams: {},
      nimFilter: '',
      periodeFilter: '',
      url: '',
      queryParams: {
        sort: 'sort',
        page: 'page',
        perPage: 'size'
      },
      sortOrder: [
        {
          field: 'createDate',
          direction: 'desc',
          sortField: 'createDate'
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
          name: 'periode',
          title: 'Periode',
          sortField: 'periode'
        },
        {
          name: 'namaSiswa',
          title: 'Nama Siswa',
          sortField: 'namaSiswa'
        },
        {
          name: 'nim',
          title: 'Nim',
          sortField: 'nim'
        },
        {
          name: 'jnsPembayaran',
          title: 'Jenis Pembayaran',
          sortField: 'jnsPembayaran'
        },
        {
          name: 'amount',
          title: 'Total Tagihan',
          sortField: 'amount',
          callback: 'numToCurrency'
        },
        {
          name: 'jumlahTerbayar',
          title: 'Terbayar',
          sortField: 'jumlahTerbayar',
          callback: 'numToCurrency'
        },
        {
          name: 'jumlahSisa',
          title: 'Sisa',
          sortField: 'jumlahSisa',
          callback: 'numToCurrency'
        },
        {
          name: 'jumlahTerhutang',
          title: 'Tunggakan',
          sortField: 'jumlahTerhutang',
          callback: 'numToCurrency'
        },
        {
          name: 'createDate',
          title: 'Tanggal Dibuat',
          sortField: 'createDate',
          callback: 'tanggalReadHuman|YYYY-MM-DD'
        },
        {
          name: 'jatuhTempo',
          title: 'Jatuh Tempo',
          sortField: 'jatuhTempo',
          callback: 'tableTanggal|YYYY-MM-DD'
        },
        {
          name: 'status',
          title: 'Status',
          sortField: 'status',
          callback: 'tableStatus'
        },
        {
          name: 'tanggalTerbayar',
          title: 'Tanggal Bayar',
          sortField: 'tanggalTerbayar',
          callback: 'tableTanggal|YYYY-MM-DD'
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
        alert(this.$store.state.uploadTagihanData.message)
      } else {
        alert(this.$store.state.uploadTagihanData.message + '\n')
        let url = window.URL.createObjectURL(new Blob([this.$store.state.uploadTagihanData.data], {type: 'text/txt'}))
        let link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'tagihanFail.txt')
        link.click()
        window.URL.revokeObjectURL(url)
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
      // const baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin + ':10015' : window.location.origin
      const baseUrl = window.location.origin
      this.url = baseUrl + '/umu-spp/tagihan/getAllTagihan?idAkademi=' + this.objSession.idAkademi
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
    tableTempo (value) {
      if (value !== null) {
        // let dateChunk = value.split('-');
        // return dayjs(dateChunk[2] + '-' + dateChunk[1] + '-' + dateChunk[0]).format('dd-mm-yyyy');
        return value
      } else {
        return ''
      }
      // return (value === null)
      //   ? ''
      //   : dayjs(value).format("dd-MM-yyyy")
    },
    tableTanggal (value) {
      return (value === null)
        ? ''
        : value
    },
    tanggalReadHuman (value) {
      dayjs.extend(customParseFormat)
      return (value === null)
        ? ''
        : dayjs(value.split(' ')[0], 'DD-MM-YYYY').format('DD-MM-YYYY')
    },
    numToCurrency (value) {
      return (value === null)
        ? 0
        : Accounting.formatMoney(value, 'Rp ', 0, '.')
    },
    tableStatus (value) {
      return (value === 'close')
        ? 'Lunas'
        : 'Belum Lunas'
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
        this.$store.dispatch('excelUploadTagihan', [this.objSession.idAkademi, this.file])
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
      this.$store.dispatch('excelTemplateTagihan', this.objSession.idAkademi)
    },
    filterSubmit () {
      NProgress.configure({ showSpinner: false })
      NProgress.start()
      // const baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin + ':10015' : window.location.origin
      const baseUrl = window.location.origin
      this.url = baseUrl + '/umu-spp/tagihan/getAllTagihan?idAkademi=' + this.objSession.idAkademi + '&&nim=' + this.nimFilter + '&&periode=' + this.periodeFilter
      this.$refs.vuetable.refresh()
      NProgress.done()
    }
  },
  mounted () {
    this.init()
    // this.$nextTick(() => {
    // })
  }
}
</script>
