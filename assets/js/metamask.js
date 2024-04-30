        
       function checkMetaMask() {
            if (typeof window.ethereum !== 'undefined') {
                console.log('MetaMask is installed!');
                return true;
            } else {
                console.log('MetaMask is not installed!');
                return false;
            }
        }

        // Function to connect to MetaMask
        async function connectToMetaMask() {
            try {
                // Requesting access to the user's MetaMask account
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                console.log('Connected to MetaMask:', accounts[0]);
                alert('Connected to MetaMask!');
            } catch (error) {
                console.error(error);
                alert('Error connecting to MetaMask. Please make sure you have MetaMask installed and unlocked.');
            }
        }

        // Event listener for the connect button
        document.getElementById('connectButton').addEventListener('click', async () => {
            if (checkMetaMask()) {
                await connectToMetaMask();
            } else {
                alert('MetaMask is not installed!');
            }
        });
