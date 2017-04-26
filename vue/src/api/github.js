
module.exports.createClient = function() {
  return new GithubClient(null)
}

// module.exports.GithubClient = GithubClient

function GithubClient(co) {
  // this.token = build.token
  // this.repo = build.repo
  // this.commit = build.commit
  // this.logUrl = build.logUrl
}

GithubClient.prototype.test = function () {
  console.log("bok")

}
