<template>
<div class="container-fluid mt-3">
<vuetable ref="vuetable"
          :query-params="queryParams"
          api-url="/umu-spp/siswa/getdata"
          :fields="fields"
          :css="css.table"
          :append-params="appendParams"
          :load-on-start="true"
          :initial-page="initialPage"
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
</template>

<script>
import Vuetable from 'vuetable-2'
import VuetablePagination from
  'vuetable-2/src/components/VuetablePagination'
export default {
  name: 'studentList',
  components: {
    Vuetable,
    VuetablePagination
  },
  data () {
    return {
      appendParams: {
        idAkademi: 1
      },
      url: '',
      queryParams: {
        sort: 'sort',
        page: 'page',
        perPage: 'size'
      },
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
      initialPage:0,
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

  methods: {
    // init () {
    //   const baseUrl = window.location.origin
    //   this.url = baseUrl + '/umu-spp/siswa/getdata'
    //   this.appendParams = {
    //     idAkademi: 1
    //   }
    // },
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
    }
  },
  // mounted () {
  //   this.init()
  // }
}
</script>
