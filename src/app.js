// BAKOME Pay — Solana P2P Payments
// Connect wallet and send transactions

class BAKOMEPay {
    constructor() {
        this.connection = null;
        this.wallet = null;
    }

    async connectWallet() {
        if (window.solana) {
            await window.solana.connect();
            this.wallet = window.solana;
            return this.wallet.publicKey.toString();
        }
        throw new Error('Phantom wallet not found');
    }

    async sendSOL(recipient, amount) {
        const transaction = new solanaWeb3.Transaction().add(
            solanaWeb3.SystemProgram.transfer({
                fromPubkey: this.wallet.publicKey,
                toPubkey: new solanaWeb3.PublicKey(recipient),
                lamports: amount * solanaWeb3.LAMPORTS_PER_SOL,
            })
        );
        return await this.wallet.signAndSendTransaction(transaction);
    }

    async getBalance() {
        return await this.connection.getBalance(this.wallet.publicKey);
    }
}

window.BAKOMEPay = new BAKOMEPay();
console.log('💸 BAKOME Pay ready!');
