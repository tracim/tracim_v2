// Côme - 2018/10/26 - this is an example of custom script for the app file custom Button

function onClickCustomButtonAppFile () {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://im.algoo.fr/hooks/mf8yaqjx8bbrmjk6igrcwgb33e', true)
  xhr.setRequestHeader('Content-Type', 'application/json')

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log('success')
    }
  }

  xhr.send('{"text": "Bravo."}')
}

GLOBAL_customButton.registerButton({
  appSlug: 'file',
  label: 'Bonjour?',
  action: onClickCustomButtonAppFile
})
