<template>
<div class="container-fluid mt-3">
<div class="mx-3">
<div class="float-right">
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
      <div slot="actions" slot-scope="props">
      <button @click="onActionClicked('tagihan', props.rowData)">Tagihan</button>
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
import axios from 'axios'

export default {
  name: 'studentList',
  components: {
    Vuetable,
    VuetablePagination
  },
  data () {
    return {
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
          title: 'Nama Siswa',
          sortField: 'name'
        },
        {
          name: 'nim',
          title: 'Nim',
          sortField: 'nim'
        },
        {
          name: 'tglLahir',
          title: 'Tanggal Lahir',
          sortField: 'tglLahir'
        },
        {
          name: 'tingkatan',
          title: 'Tingkatan',
          sortField: 'tingkatan'
        },
        {
          name: 'fakultas',
          title: 'Fakultas',
          sortField: 'fakultas'
        },
        {
          name: 'jurusan',
          title: 'Jurusan',
          sortField: 'jurusan'
        },
        {
          name: 'peminatan',
          title: 'Peminatan',
          sortField: 'peminatan'
        },
        {
          name: 'tahunAkademik',
          title: 'Tahun Akademik',
          sortField: 'tahunakademik'
        },
        {
          name: 'statusMasuk',
          title: 'Status Masuk',
          sortField: 'statusMasuk'
        },
        '__slot:actions'
      ]
    }
  },
  computed: {
    indexUploadSiswa () {
      return this.$store.state.indexUploadSiswa
    }
  },
  watch: {
    'indexUploadSiswa': function () {
      if (this.$store.state.uploadSiswaData.success === true) {
        alert("Berhasil: " + this.$store.state.uploadSiswaData.data.inserted + "\n" + "Total data: " + this.$store.state.uploadSiswaData.data.total)
      } else {
        alert(this.$store.state.uploadSiswaData.message)
      }
      NProgress.done()
      this.$refs.vuetable.refresh()
    }
  },
  methods: {
    init () {
      const baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin + ':10015' : window.location.origin
      // const baseUrl = 'http://mumu.hike.id:10015'
      this.url = baseUrl + '/umu-spp/siswa/getdata'
      this.appendParams = {
        idAkademi: 1
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
        case 'tagihan':
          this.$router.push({ path: `/admin/tagihan/listTagihan/${data.idSiswa}` })
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
        this.$store.dispatch('excelUploadSiswa', this.file)
      } else {
        this.failedMsg = 'Tipe Excel harus xlsx/xls'
        alert('Tipe Excel harus xlsx/xls')
        this.$refs.fileExcel.value = '' // Reset Input File
        this.$refs.vuetable.refresh()
        NProgress.done()
      }
    },
    tempExcel () {
      const baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin + ':10015' : window.location.origin
      // const baseUrl = window.location.origin
      NProgress.configure({ showSpinner: false })
      NProgress.start()
      axios({
        method: 'GET',
        url: baseUrl + '/umu-spp/siswa/excel/template',
        responseType: 'blob'
      }).then((response) => {
        let userAgent = navigator.userAgent
        let url = window.URL.createObjectURL(new Blob([response.data]))
        let link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'siswa.xlsx')
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
  }
}
</script>
