export default {
  data () {
    return {
      baseUrl: window.location.origin,
      // baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin + ':10015' : window.location.origin,
      objSession: JSON.parse(sessionStorage.getItem('umuSS'))
    }
  }
}
