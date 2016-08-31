'use strict';

const electron = require('electron');
const {app,BrowserWindow,Menu,ipcMain,ipcRenderer} = electron;

let isDevelopment = true;

if(isDevelopment){
  require('electron-reload')(__dirname,{ignored: /node_modules|[\/\\]\./});
}

var mainWindow = null;

function createMinWindow(){
  mainWindow = new BrowserWindow({
    width:1000,
    height:600,
    icon:"build/img/app-icon.png"
  });

  if(isDevelopment){
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed',() => {
    mainWindow = null;
  })
}

app.on('ready',createMinWindow);

app.on('window-all-closed',() => {
  app.quit();
});
