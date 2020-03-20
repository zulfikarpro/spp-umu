<template>
<div class="container-fluid mt-3">
<div class="mx-3">
<div class="float-right" v-if="this.$store.state.permissionData.student_c">
  <button class="btn btn-primary mr-3 mb-2" @click="tempExcel">Template Excel</button>
  <button class="btn btn-primary mb-2" @click="uploadExcel">Upload Excel
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
          :transform="transform"
          :reactive-api-url="true"
          pagination-path="pagination"
          data-path="mydata"
          noDataTemplate=""
          @vuetable:loading="onLoadingData"
          @vuetable:load-success="onLoadingSuccess"
          @vuetable:pagination-data="onPaginationData"
        >
      <!-- <div slot="numbering" slot-scope="props">
        {{ props.rowIndex + 1}}
      </div> -->
      <div slot="actions" slot-scope="props">
      <button class="btn btn-primary" @click="onActionClicked('tagihan', props.rowData)">Tagihan</button>
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
  name: 'studentList',
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
          activeClass: 'btn-primary color-whitening',
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
          name: '__sequence',
          title: 'No'
        },
        {
          name: 'name',
          title: 'Nama Siswa',
          sortField: 'name',
          callback: 'nameFunc'
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
      // const baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin + ':10015' : window.location.origin
      // const baseUrl = 'http://mumu.hike.id:10015'
      this.url = this.$store.state.baseUrl + '/umu-spp/siswa/getdata'
      this.appendParams = {
        idAkademi: this.objSession.idAkademi
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
    // onPaginationData (paginationData) {
    //   paginationData.total = paginationData.totalElements
    //   paginationData.per_page = paginationData.size
    //   paginationData.current_page = paginationData.number + 1
    //   paginationData.last_page = paginationData.totalPages
    //   paginationData.from = paginationData.number * paginationData.size + 1
    //   paginationData.to = paginationData.from * paginationData.numberOfElements - 1
    //   this.$refs.pagination.setPaginationData(paginationData)
    // },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    transform (data) {
      let transformed = {}

      transformed.pagination = {
        total: data.totalElements,
        per_page: data.size,
        current_page: data.number + 1,
        last_page: data.totalPages,
        next_page_url: this.$store.state.baseUrl + '/umu-spp/siswa/getdata?idAkademi=' + this.objSession.idAkademi + '&page=' + (data.number + 1),
        prev_page_url: data.first === true ? null : this.$store.state.baseUrl + '/umu-spp/siswa/getdata?idAkademi=' + this.objSession.idAkademi + '&page=' + (data.number - 1),
        from: data.number * data.size + 1,
        to: data.number * data.size + 1 * data.numberOfElements - 1
      }

      transformed.mydata = data.content

      return transformed
    },
    onLoadingData () {
      NProgress.start()
    },
    onLoadingSuccess () {
      NProgress.done()
    },
    nameFunc (value) {
      // Ubah ukuran text
      let namaValue = value.toLowerCase().split(' ')
      for (let i = 0; i < namaValue.length; i++) {
        namaValue[i] = namaValue[i].charAt(0).toUpperCase() + namaValue[i].substring(1)
      }
      return namaValue.join(' ')
    },
    onActionClicked (action, data) {
      switch (action) {
        case 'tagihan':
          this.$router.push({ path: `/admin/tagihan/viewTagihan/${data.idSiswa}` })
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
        this.$store.dispatch('excelUploadSiswa', [this.objSession.idAkademi, this.file])
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
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style>
.color-whitening {
  color: white !important;
}
</style>
