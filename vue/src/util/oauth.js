var config = require('../../config')

export function getToken (auth) {
  if (location.hostname.includes('localhost')) {
    console.log('localhost')
    return config.dev.localEnv.token.github
  } else {
    console.log('apiway.io')
    return auth.getToken()
  }
}

export function isAuthenticated (auth) {
  if (location.hostname.includes('localhost')) {
    return true
  } else {
    return auth.isAuthenticated()
  }
}
