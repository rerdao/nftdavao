function connectToPhantom()
{
window.solana.connect();
window.solana.request({ method: "connect" })
  
window.solana.isConnected
window.solana.autoApproved

  document.getElementById("user-account").innerHTML = window.solana.publicKey;
}

function disconnectPhantom()
{
  window.solana.disconnect();
  window.solana.on('disconnect', () => console.log("disconnected!"))
}
