import $http from './api_config'

const {_get, _post} = $http

const getAboutMe = () => _get('/getAboutMe')

export default {
  getAboutMe
}