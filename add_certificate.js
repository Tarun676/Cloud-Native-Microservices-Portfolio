const http = require('http');

// ==========================================
// 🎓 CERTIFICATE UPLOAD SCRIPT
// ==========================================
// 1. Edit the properties of this certificate object
// 2. Make sure your Docker engine backend is running!
// 3. Open terminal and run: node add_certificate.js
// ==========================================

const newCertificate = {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "March 2026",
    // To use local images, put your image in 'frontend/public/certificates/' 
    // and reference it like this: "/certificates/aws-badge.png"
    imageUrl: "/certificates/aws-badge.png", 
    
    // Provide an external link to verify, OR link to a local PDF like: "/certificates/aws-cert.pdf"
    verifyUrl: "https://aws.amazon.com/verification-link"
};

const data = JSON.stringify(newCertificate);

const options = {
    hostname: 'localhost',
    port: 8081, // certificates-service port
    path: '/api/certificates',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    let responseBody = '';
    res.on('data', (chunk) => responseBody += chunk);
    res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 201) {
            console.log('✅ Successfully added certificate!');
            console.log('Response:', JSON.parse(responseBody));
            console.log('Refresh your browser at http://localhost:5173 to see it on the holographic grid!');
        } else {
            console.log('❌ Failed to add certificate. Status code:', res.statusCode);
            console.log('Response:', responseBody);
        }
    });
});

req.on('error', (error) => {
    console.error('❌ Error hitting backend:', error.message);
    console.log('Please make sure your Docker containers are running (start_app.bat).');
});

req.write(data);
req.end();
