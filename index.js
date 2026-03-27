const { app, BrowserWindow, ipcMain } = require("electron");
const { exec } = require("child_process"); // This runs system commands

const createWindow = () => {
    const window = new BrowserWindow({
        width: 600,
        height: 280,
        frame: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: true, // Allows HTML to talk to Node
            contextIsolation: false
        }
    });

    window.loadFile("index.html");
    window.setMenuBarVisibility(false);
};

// --- THE GHOST LOGIC ---
ipcMain.on('toggle-ghost', (event, shouldBlock) => {
    const ruleName = "LoLGhostMode";

    // We target the port 5223 which is the standard for Riot's XMPP chat
    // We also use 'any' for remoteip to ensure it catches all Riot chat servers
    let command;
    if (shouldBlock) {
        command = `netsh advfirewall firewall add rule name="${ruleName}" dir=out action=block protocol=TCP remoteport=5223`;
    } else {
        command = `netsh advfirewall firewall delete rule name="${ruleName}"`;
    }

    exec(command, (error, stdout, stderr) => {
        if (error) {
            // This error almost always means "Access Denied" (Not Admin)
            console.error("Privilege Error:", stderr);
            event.reply('status-response', "Error: Restart as Admin!");
        } else {
            event.reply('status-response', shouldBlock ? "Ghost Mode Active" : "Online Mode Active");
        }
    });
});

app.whenReady().then(createWindow);