
const connectButton = document.getElementById('connectButton');

// Check if the Phantom wallet is installed
async function checkPhantomWallet() {
    try {
    // Check if the window object has the solana object
    if (!window.solana || !window.solana.isPhantom) {
        alert('Please install the Phantom wallet extension');
        return false;
    }
    return true;
    } catch (error) {
    console.error('Error checking Phantom wallet:', error);
    return false;
    }
}

// Connect to the Phantom wallet
async function connectToPhantom() {
    try {
    // Check if the Phantom wallet is installed
    const isPhantomInstalled = await checkPhantomWallet();
    if (!isPhantomInstalled) return;

    // Request access to the user's Phantom wallet
    await window.solana.connect();

    // Get the user's public key (address)
    const userPublicKey = window.solana.publicKey.toString();
    console.log('Connected user public key:', userPublicKey);
    } catch (error) {
    console.error('Error connecting to Phantom wallet:', error);
    }
}

// Add a click event listener to the connect button
connectButton.addEventListener('click', connectToPhantom);
