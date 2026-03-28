# 👻 League Ghost Mode

**League Ghost Mode** is a lightweight, open-source utility for League of Legends players who want to play privately. By blocking specific chat server ports via Windows Firewall, this tool allows you to appear **Offline** to your friends list while maintaining full access to matchmaking, the shop, and the game itself.

## 📥 Download

[![Download Latest Release](https://img.shields.io/badge/Download-Latest_Release-blue?style=for-the-badge&logo=github)](https://github.com/mohsumzadah/League-Ghost-Mode/releases/latest)

> **Note:** Run the application as **Administrator** to allow it to manage Windows Firewall rules.

---

## ✨ Features

* **Appear Offline:** Stay invisible to your friends list while in-game or in-client.
* **One-Click Toggle:** Seamlessly switch between "Ghost Mode" and "Online Mode."
* **Safety First:** Uses standard Windows Firewall rules—no memory hacking, no client injections, and no risk to your account.
* **Privacy-Focused:** Avoid unwanted invites or messages when you just want to focus on your climb.

---

## 📸 Screenshots

### 🖥️ Main Dashboard
*A clean, minimalist interface to manage your visibility status with a single click.*

![Main Interface](https://raw.githubusercontent.com/mohsumzadah/League-Ghost-Mode/main/screenshots/main_app.png)

### 🎮 In-Client Effect
*How the League Client looks when Ghost Mode is active (Chat disconnected, Play button available).*

![Client Status](https://raw.githubusercontent.com/mohsumzadah/League-Ghost-Mode/main/screenshots/client_preview.png)

---

## 🚀 Getting Started

### Prerequisites
* **Windows OS** (7, 10, or 11)
* **Administrator Privileges** (Required to modify Firewall rules)
* **League of Legends** installed

### Installation
1.  Navigate to the [Releases](https://github.com/mohsumzadah/League-Ghost-Mode/releases) page.
2.  Download the latest `LeagueGhostMode.exe`.
3.  **Right-click** the file and select **Run as Administrator**.

---

## 🛠️ Technical Overview

The application automates the process of blocking outgoing TCP traffic to Riot’s chat servers (specifically port `5223`).

* **Ghost Mode ON:** Adds a "Block" rule to Windows Defender Firewall.
* **Ghost Mode OFF:** Deletes the rule, instantly restoring chat connectivity.

>## ⚠️ Important Note: How it Works

When you enable **Ghost Mode**, you will notice the effect immediately on your side: **your friends list will disappear or show a connection error.**

* **Status Sync Delay:** Even though you are "Ghosted" if after the game started, your friends might still see you as "Online" for a few minutes. This is because Riot’s servers cache your last known status.
* **Total Privacy:** Do not worry—even if your name still appears "Online" to them briefly, they will not see it after a few minutes
* **Queue Status:** You can safely enter a queue or start a game immediately; they will not see you, and the "Ghost" effect will fully synchronize on their end shortly after.
---

## ⚖️ Safety & Compliance
This tool functions similarly to "Deceive." It does not interact with the game's memory or modify any game files. It strictly manages network traffic via built-in Windows features, making it a safe alternative to more intrusive mods. Use at your own discretion.

---

## 🤝 Contributing
Contributions make the open-source community an amazing place!
1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request


---
**Developed by [mohsumzadah](https://github.com/mohsumzadah)**
