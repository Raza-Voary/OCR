const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow; //module de fenetre
const path = require("path"); // le module chapeau pour construire le chemin du fichier 
const url = require("url"); // le module URL integre pour construire l'URL approprie

let screen; //declaration de variable

function createWindow (){

    // creation de fenetre
    screen = new BrowserWindow({
        height: 700, 
        width: 900, 
        webPreferences: {
            nodeIntegration: true
        }
    });

    screen.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'), // chargement du fichier html de nom 'one.html'
        protocol: 'file',
        slashes: true
    }));

    // fermeture du fenetre 
    screen.on('closed', () => {
    screen = null;
    });
}

app.on('ready', createWindow); // creation deu fenetre lorsque l'electron a finie d'initialiser

// Quitter l'appli lorsque tous les fenetre du systeme sont fermer
app.on('window-all-closed', () => {
 if (process.platform !== 'darwin') {
  app.quit();
 }
});

//Recree l'appli 
app.on('activate', () => {
 if (screen === null) {
  createWindow();
 }
});