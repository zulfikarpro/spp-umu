<template>
<div class="container-fluid mt-3">
<div class="mx-3">
<div class="d-flex my-4 buttonLeft">
  <div>Show <select v-model="selectedEntri">
  <option v-for="n in totalDataPage">{{ n }}</option>
  </select>
  Entires
  </div>
  <div><datepicker placeholder="Tanggal Awal" v-model="firstDate"></datepicker></div>
  <div><datepicker placeholder="Tanggal Akhir" v-model="secondDate"></datepicker></div>
  <div class="ml-auto">
    <button class="btn btn-primary px-3 mr-3" >Buat Order</button>
    <label>Cari :</label>
    <input type="text" placeholder=""/>
  </div>
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
          @vuetable:loaded="loadVuetable"
        >
      <div slot="actions" slot-scope="props">
      <button @click="onActionClicked('edit', props.rowData)">Edit</button>
      <button @click="onActionClicked('kirimKode', props.rowData)">Kirim Kode Aktivasi</button>
      <button @click="onActionClicked('delete', props.rowData)">Hapus</button>
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
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'AcademyOnboardList',
  components: {
    Vuetable,
    VuetablePagination,
    Datepicker
  },
  data () {
    return {
      firstDate: '',
      secondDate: '',
      selectedEntri: '',
      totalPages: 0,
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
    },
    indexTemplateSiswa () {
      return this.$store.state.indexTemplateSiswa
    },
    totalDataPage () {
      return this.totalPages
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
    },
    'selectedEntri': function () {
      alert('pilih')
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
        case 'delete':
          alert('Apakah Anda Yakin ingin untuk menghapus order')
          // this.$router.push({ path: `/admin/tagihan/viewTagihan/${data.idSiswa}` })
          break
        case 'kirimKode':
          alert('Apakah Anda Yakin Ingin Mengirim kode aktivasi')
          break
      }
    },
    loadVuetable () {
      this.totalPages = this.$refs.vuetable.tablePagination.totalPages
      console.log(this.$refs.vuetable)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
.buttonLeft > div:not(:first-of-type):not(:last-of-type) {
  margin-left: 1.5rem;
}
</style>
