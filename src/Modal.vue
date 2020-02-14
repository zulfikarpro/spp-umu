<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-top">
            <slot name="header">
              Notifikasi
            </slot>
          </div>

          <div class="modal-middle">
            <slot name="body">
              text
            </slot>
          </div>

          <div class="modal-bottom">
            <slot name="footer">
              <button class="modal-default-button btn btn-primary" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal'
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-top {
  margin-top: 0;
  color: rgb(255, 85, 0);
  font-weight: bold;
  font-size: 18px;
  border-bottom:1px solid #dee2e6;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
  padding:1rem 1rem;
  text-align:center;
}

.modal-middle {
  padding: 1rem;
  font-size: 16px;
  position: relative;
  text-align: center;
}

.modal-bottom {
  padding: 1rem;
  text-align: center;
}

.modal-default-button {
  text-align: center;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
