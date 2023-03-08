const { remote } = require('electron')
const { webContents } = remote

const previousTabButton = document.getElementById('previous-tab')
previousTabButton.addEventListener('click', () => {
  webContents.getFocusedWebContents().goBack()
})
