// Start Storage Session
export const objSession = {
  idAkademi: JSON.parse(sessionStorage.getItem('umuSS')) === null ? '' : JSON.parse(sessionStorage.getItem('umuSS')).idAkademi,
  status: JSON.parse(sessionStorage.getItem('umuSS')) === null ? '' : JSON.parse(sessionStorage.getItem('umuSS')).status
}
// End Storage Session
