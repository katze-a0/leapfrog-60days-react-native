// Test if server is reachable
const testConnection = async () => {
  try {
    const response = await fetch('http://192.168.254.11:3000/api/income', {
      method: 'GET',
      timeout: 5000,
    });
    console.log('Server status:', response.status);
  } catch (error) {
    console.log('Server unreachable:', error.message);
  }
};

testConnection();
