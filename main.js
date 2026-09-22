
const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('path')
const fileSystem = require('fs')

const createWindow = () => {

  const win = new BrowserWindow({
    width: 1024,
    height: 768,

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false

    }
  })
  
  win.setMenu(null)

  win.loadFile('index.html')

}

ipcMain.handle("add-book", (event, book) => {
  const filePath = path.join(__dirname, "data", "books.json");

  let books = [];

  if (fileSystem.existsSync(filePath)) {

    const data = fileSystem.readFileSync(filePath, "utf8");

    if (data.trim() !== "") {
      books = JSON.parse(data);
    }
  }

  books.push(book)

  fileSystem.writeFileSync(
    filePath,
    JSON.stringify(books, null, 2)
  )

  return book

})

app.whenReady().then(() => {

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }

  })

})

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()

  }

})