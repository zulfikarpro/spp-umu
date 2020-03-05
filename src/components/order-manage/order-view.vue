<template>
    <div class="container-fluid mt-3 p-5 shadow rounded">
        <div class="text-center font-weight-bold mb-4" style="font-size:x-large;">Detail Order</div>
        <div class="row  typoText">
            <div class="col-sm-6 row">
            <div class="form-group mt-4 col-sm-12 "><label class="typoText font-weight-bold col-5">Data Universitas/Sekolah</label></div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label" >Nama Universitas/Sekolah</label>
            <label class="offset-1 col-form-label" >:</label>
            <label class="col-5 col-form-label">{{allData.akademiName}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">Alamat</label>
            <label class="offset-1 col-form-label" >:</label>
            <label class="col-5 col-form-label">{{allData.akademiAddress}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">Jenjang</label>
            <label class="offset-1 col-form-label" >:</label>
            <label class="col-5 col-form-label">{{allData.jenjang}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">No. Telepon</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.akademiPhone}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">Email</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.akademiEmail}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">Nama Rekening</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.nameRekening}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">No Rekening</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.noRekening}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">Website</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.akademiWeb}}</label>
            </div>

            <div class="form-group mt-4 col-sm-12 "><label class="typoText font-weight-bold col-5">Data PenanggungJawab</label></div>
            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label" >Nama Pegawai</label>
            <label class="offset-1 col-form-label" >:</label>
            <label class="col-5 col-form-label">{{allData.namaPegawai}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">Jabatan</label>
            <label class="offset-1 col-form-label" >:</label>
            <label class="col-5 col-form-label">{{allData.jabatan}}</label>
            </div>

            <div class=" form-group col-sm-12">
            <label class="col-5 col-form-label">NIP</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.nip}}</label>
            </div>

             <div class=" form-group col-sm-12">
            <label class="col-5 col-form-label">Telpon</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.phone}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">Email</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.email}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">Tempat Lahir</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.tempatLahir}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">Tanggal Lahir</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.tanggalLahir}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">Alamat Identitas</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.alamatIdentitas}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">Alamat Tinggal</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.alamatTinggal}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">Jenis Kelamin</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.jenisKelamin}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">Kewarganegaraan</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.kewarganegaraan}}</label>
            </div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">NIK</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.nik}}</label>
            </div>

            <div class="form-group mt-4 col-sm-12 "><label class="typoText font-weight-bold col-5">Data Order</label></div>

            <div class="form-group col-sm-12">
            <label class="col-5 col-form-label">No Order</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.noOrder}}</label>
            </div>

            </div>

            <div class="row col-sm-6">
                <div class="col-12 mt-5">
                <img class="rounded-sm text-center mx-auto float-center d-block zoom-image" :src="'data:image/jpeg;base64,' + allData.dokumen"  />
                </div>
            </div>
        </div>

        <div class="col-sm-4 mt-2 mx-auto text-center" v-if="this.$store.state.checkApprovalFromView === true">
          <button type="submit" v-if="this.$store.state.permissionData.approval_u" style="background-color:#28dea1;color:white;" @click="onClickAction('approve')" class="btn btn-lg p-3 mx-2">Approve</button>
          <button type="submit" v-if="this.$store.state.permissionData.reject_u" style="background-color:#ff3330;color:white;" @click="onClickAction('reject')" class="btn btn-lg p-3 mx-2">Reject</button>
        </div>

        <modal v-if="showModal" @close="showModal = false">
        <div slot="header" v-if="rejectModal">Reject Form</div>
        <div slot="body" v-if="rejectModal" class="my-3">
        <textarea class="form-control" v-model="dataReject.keterangan" placeholder="Alasan Reject Order...." rows="3"></textarea>
        </div>
        <div slot="body" v-else>{{ msgModal }}</div>
        <div slot="footer" v-if="rejectModal">
          <button @click="rejectFromModal(true)" class="btn btn-primary">Oke</button>
          <button @click="rejectFromModal(false)" class="btn btn-danger">Batal</button>
        </div>
        <div slot="footer" v-else-if="valRedirectHome">
          <button @click="redirectToHome()" class="btn btn-primary">Oke</button>
        </div>
        </modal>

    </div>
</template>

<script>
import NProgress from 'nprogress'
import modal from '../../Modal'

export default {
  name: 'OrderView',
  components: {
    modal
  },
  data () {
    return {
      objSession: JSON.parse(sessionStorage.getItem('umuSS')),
      allData: {},
      rejectModal: false,
      confirmModal: false,
      msgModal: '',
      showModal: false,
      valRedirectHome: false,
      dataReject: {
        keterangan: '',
        idAkademi: '',
        email: ''
      }
    }
  },
  computed: {
    indexOneOrder () {
      return this.$store.state.indexOneOrder
    },
    indexApprovalOrder () {
      return this.$store.state.indexApprovalOrder
    },
    indexRejectOrder () {
      return this.$store.state.indexRejectOrder
    }
  },
  watch: {
    'indexOneOrder' () {
      this.allData = this.$store.state.oneOrderData.data
    },
    'indexApprovalOrder': function () {
      if (this.$store.state.oneApprovalOrder.success === true) {
        this.showModal = true
        this.msgModal = 'Berhasil Approval Order'
        this.valRedirectHome = true
      } else {
        this.showModal = true
        this.msgModal = this.$store.state.oneApprovalOrder.message
      }
      NProgress.done()
    },
    'indexRejectOrder': function () {
      if (this.$store.state.oneRejectOrder.success === true) {
        this.showModal = true
        this.msgModal = 'Berhasil Reject Order'
        this.valRedirectHome = true
      } else {
        this.showModal = true
        this.msgModal = this.$store.state.oneRejectOrder.message
      }
      NProgress.done()
    }
  },
  methods: {
    init () {
      this.$store.dispatch('getOrderOne', this.$route.params.id)
    },
    onClickAction (param) {
      switch (param) {
        case 'approve':
          this.$store.dispatch('approvalOrder', [this.$route.params.id, this.objSession.email])
          NProgress.configure({ showSpinner: false })
          NProgress.start()
          break
        case 'reject':
          NProgress.configure({ showSpinner: false })
          NProgress.start()
          this.dataReject['idAkademi'] = this.$route.params.id
          this.dataReject['email'] = this.objSession.email
          this.showModal = true
          this.rejectModal = true
          break
      }
    },
    redirectToHome () {
      this.showModal = false
      this.$router.push('../')
    },
    rejectFromModal (params) {
      if (params) {
        this.$store.dispatch('rejectOrder', [this.dataReject.idAkademi, this.dataReject.email, this.dataReject.keterangan])
        this.rejectModal = false
        this.showModal = false
      } else {
        this.rejectModal = false
        this.showModal = false
        NProgress.done()
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style >
.typoText {
    font-size: 18px;
    font-weight: 400;
}
.zoom-image {
    width: 31.25rem;
}
.zoom-image:hover {
    transform: scale(1.4);
}

</style>
