const moment = require('moment')

module.exports = {
  ifCond: function (a, b, options) {
    if (a === b) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  },

  ifCheck: function (a, b, options) {
    if (a.id === b) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  },

  moment: function (time) {
    return moment(time).fromNow()
  },

  getId: function (user) {
    return user.dataValues.id
  },

  checkLike: function (user, arr, options) {
    arr = arr.map(item => item.UserId)
    const id = Number(user.id)
    if (arr.includes(id)) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  },

  checkReply: function (user, arr, options) {
    arr = arr.map(item => item.UserId)
    const id = Number(user.id)
    if (arr.includes(id)) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  },

  checkCommentReply: function (user, arr, options) {
    arr = arr.map(item => item.user.id)
    const id = Number(user.id)
    if (arr.includes(id)) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  },

  countNum: function (arr) {
    return arr.length
  },

  // need
  checkReplyNumReplies: function (arr) {
    if (arr && arr.length) {
      return arr[0].repliesNum
    }
    return 0
  },
// need
  checkReplyNumLikes: function (arr) {
    if (arr && arr.length) {
      return arr[0].likesNum
    }
    return 0
  },

  checkIfBeLiked: function (arr, options) {
    return arr.length ? options.fn(this) : options.inverse(this)
  },

  leftSdieBarCheck: function (data, options) {
    if (data === ('userInfo') || data === ('userTweets') || data === ('userReplies') || data === ('userLikes')) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  },

  checkUserFollowing: function (arr, userId, options) {
    if (arr.includes(userId)) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  }
}