
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {

    addBook: (book) => ipcRenderer.invoke("add-book", book)
    
});