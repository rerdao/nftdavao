function connectToPhantom() {
    const wallet = new WalletAdapter.WalletAdapter({
        provider: window.solana,
        preferredTestnet: 'mainnet-beta' // Specify mainnet-beta instead of devnet
    });

    wallet.connect();
}