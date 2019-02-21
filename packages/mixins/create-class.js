let ELEMENT = '--'

const join = function (name, type) {
  return type ? name + ELEMENT + type : name
}

const prefix = function (name, extra) {
  if (typeof extra === 'string') {
    return join(name, extra)
  }

  if (Array.isArray(extra)) {
    return extra.map((item) => {
      return prefix(name, item)
    })
  }

  let obj = {}
  Object.keys(extra).map((item) => {
    if (item.includes('dxy-common')) {
      obj[item] = extra[item]
      return
    }
    obj[name + ELEMENT + item] = extra[item]
  })
  return obj
}

export default {
  methods: {
    createClass: function (type, extra) {
      let name = this.$options.name

      if (type && typeof type !== 'string') {
        extra = type
        type = ''
      }

      type = join (name, type)
      return extra ? [type, prefix(type, extra)] : type
    }
  }
}