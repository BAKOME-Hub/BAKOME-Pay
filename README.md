# 💸 BAKOME Pay — Solana P2P Payments

[![Solana](https://img.shields.io/badge/Solana-Payments-orange)](https://solana.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status: MVP](https://img.shields.io/badge/Status-Building-blue)]()

## 🎯 What is BAKOME Pay?

**BAKOME Pay** is a minimalist P2P payment tool on Solana. Send SOL or USDC to anyone with a simple link — no app required.

## 🔥 Features (MVP in 2 weeks)

| Feature | Description |
|---------|-------------|
| 💰 **Send SOL/USDC** | Instant P2P payments |
| 🔗 **Payment Links** | Share a link, get paid |
| 📊 **Transaction History** | View all your payments |
| 🧠 **AI Assistant** | "Send 5 USDC to @baksbaxe" |
| 📱 **PWA Ready** | Works on mobile |

## ⚙️ Tech Stack

- **Frontend**: HTML/CSS/JS + Tailwind
- **Blockchain**: Solana Web3.js
- **AI**: DeepSeek API / Cursor Pro
- **Wallet**: Phantom, Solflare, Backpack

## 🚀 Quick Start

```bash
git clone https://github.com/BAKOME-Hub/BAKOME-Pay.git
cd BAKOME-Pay
# Open index.html in browser
cd ~/BAKOME-Pay

# Créer le dashboard
mkdir -p docs
cat > docs/index.html << 'HTMLEOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>💸 BAKOME Pay — Solana P2P</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-950 text-white min-h-screen flex items-center justify-center">
    <div class="text-center max-w-lg p-8">
        <div class="text-6xl mb-4">💸</div>
        <h1 class="text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            BAKOME Pay
        </h1>
        <p class="text-xl text-gray-400 mb-8">P2P Payments on Solana. Send SOL or USDC with a link.</p>
        
        <div class="grid grid-cols-3 gap-4 mb-8">
            <div class="bg-gray-900 p-4 rounded-xl">
                <div class="text-2xl">💰</div>
                <div class="text-xs text-gray-400 mt-1">SOL/USDC</div>
            </div>
            <div class="bg-gray-900 p-4 rounded-xl">
                <div class="text-2xl">🔗</div>
                <div class="text-xs text-gray-400 mt-1">Links</div>
            </div>
            <div class="bg-gray-900 p-4 rounded-xl">
                <div class="text-2xl">🧠</div>
                <div class="text-xs text-gray-400 mt-1">AI</div>
            </div>
        </div>

        <a href="https://github.com/BAKOME-Hub/BAKOME-Pay" class="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-500">
            View on GitHub
        </a>
    </div>
</body>
</html>
HTMLEOF

# Créer la licence
cat > LICENSE << 'EOF'
MIT License
Copyright (c) 2026 BAKOME-Hub
Permission is hereby granted, free of charge, to any person obtaining a copy.
