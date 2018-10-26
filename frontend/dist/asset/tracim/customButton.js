var customButton = []

GLOBAL_customButton = {
  registerButton: function (p) {
    customButton.push({
      appSlug: p.appSlug || '',
      label: p.label || '',
      style: p.style || {},
      action: p.action || function () {}
    })
  },
  getButton: function (appSlug) {
    // return customButton.find(b => b.appSlug === appSlug)
    var result = null
    for (var i = 0; i < customButton.length; i++) {
      if (customButton[i].appSlug === appSlug) result = customButton[i]
    }
    return result
  },
  getButtonList: function () {
    return customButton
  }
}
