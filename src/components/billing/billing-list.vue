<template>
<div class="container-fluid">
    <div class="row mt-5">
        <div class="col-md-4">
            <p class="h2"> Informasi Siswa </p>
            <ul class="list-group">
            <li class="list-group-item">Tahun Ajaran: {{ billingData.tahunAkademik }}</li>
            <li class="list-group-item">Nim: {{ billingData.nim }}</li>
            <li class="list-group-item">Nama Siswa: {{ billingData.name }}</li>
            <li class="list-group-item">Tanggal Lahir: {{ billingData.tglLahir }}</li>
            <li class="list-group-item">Jurusan: {{ billingData.jurusan }}</li>
            <li class="list-group-item">Jenjang: {{ billingData.tingkatan }}</li>
            </ul>
        </div>
        <div class="col-md-8">
            <div class="mx-3">
            <div class="float-right">
            <button @click="tempExcel">Template Excel</button>
            <button @click="uploadExcel">Upload Excel
                <input type="file" style="display:none" ref="fileExcel" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" @change="uploadpick">
            </button>
            </div>
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
                </vuetable>
                <div style="clear:both;"></div>
                <vuetable-pagination  ref="pagination" :css="css.pagination" style="float:right;"
                @vuetable-pagination:change-page="onChangePage"
                ></vuetable-pagination>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vuetable from 'vuetable-2'
import VuetablePagination from
  'vuetable-2/src/components/VuetablePagination'
import NProgress from 'nprogress'
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'billingList',
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
          name: 'name',
          title: 'Tagihan',
          sortField: 'name'
        },
        {
          name: 'idJnsTagihan',
          title: 'Jenis Tagihan',
          sortField: 'idJnsTagihan'
        },
        {
          name: 'periode',
          title: 'Periode',
          sortField: 'nim'
        },
        {
          name: 'amount',
          title: 'Amount',
          sortField: 'amount'
        },
        {
          name: 'jumlahTerbayar',
          title: 'Terbayar',
          sortField: 'jumlahTerbayar'
        },
        {
          name: 'jumlahTerhutang',
          title: 'Sisa Tunggakan',
          sortField: 'jumlahTerhutang'
        },
        {
          name: 'jatuhTempo',
          title: 'Jatuh Tempo',
          sortField: 'jatuhTempo',
          callback: 'tableTempo|YYYY-MM-DD'
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
    oneStudent () {
      return this.$store.state.oneStudent
    },
    indexUploadTagihan () {
      return this.$store.state.indexUploadTagihan
    }
  },
  watch: {
    'indexUploadTagihan': function () {
      if (this.$store.state.uploadTagihanData.success === true) {
        alert(this.$store.state.uploadTagihanData.message)
      } else {
        alert(this.$store.state.uploadTagihanData.message)
      }
      NProgress.done()
      this.$refs.vuetable.refresh()
    }
  },
  methods: {
    init () {
      const baseUrl = window.location.origin
      this.url = baseUrl + '/umu-spp/tagihan/getdata'
      this.appendParams = {
        idSiswa: this.$route.params.id
      }
      this.billingData = this.oneStudent
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
      return (value === null)
        ? ''
        : moment(value).format('DD/MM/YYYY')
    },
    tableStatus (value) {
      return (value === 'open')
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
        this.$store.dispatch('excelUploadTagihan', [this.$route.params.id, this.file])
      } else {
        this.failedMsg = 'Tipe Excel harus xlsx/xls'
        alert('Tipe Excel harus xlsx/xls')
        this.$refs.fileExcel.value = '' // Reset Input File
        this.$refs.vuetable.refresh()
        NProgress.done()
      }
    },
    tempExcel () {
      const baseUrl = window.location.origin
      NProgress.configure({ showSpinner: false })
      NProgress.start()
      axios({
        method: 'GET',
        url: baseUrl + '/umu-spp/tagihan/excel/template',
        params: {
          idAkademi: 1
        },
        responseType: 'blob'
      }).then((response) => {
        let userAgent = navigator.userAgent
        let url = window.URL.createObjectURL(new Blob([response.data]))
        let link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'tagihan.xlsx')
        if (userAgent.includes('Firefox')) {
          document.body.appendChild(link)
          link.click()
          setTimeout(function () {
            window.URL.revokeObjectURL(url)
          }, 100)
        } else {
          link.click()
          window.URL.revokeObjectURL(url)
        }
      })
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
