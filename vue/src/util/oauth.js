var config = require('../../config')

export function getToken (auth) {
  if (location.hostname.includes('localhost')) {
    return config.dev.localEnv.token.github
  } else {
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
