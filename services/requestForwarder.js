const axios = require('axios');

const forwardRequest = async (serviceUrl, req, res) => {
    let newPath = req.originalUrl;
    console.log('New Path:', newPath);
    if (req.originalUrl.startsWith('/medicine')) {
        newPath = req.originalUrl.replace(/^\/medicine/, '');
    } else if (req.originalUrl.startsWith('/doctor/auth') || req.originalUrl.startsWith('/pharmacy/auth')) {
        newPath = req.originalUrl.replace(/^\/(doctor|pharmacy)/, '');
    }

    console.log('New Path:', newPath);
    console.log('Service URL:', serviceUrl);
    console.log('Original URL:', req.originalUrl);
    try {


        const axiosConfig = {
            method: req.method,
            url: `${serviceUrl}${newPath.split('?')[0]}`,
            params: req.query,
            headers: {
                ...(req.headers.accept && { Accept: req.headers.accept }),
                ...(req.headers.authorization && { Authorization: req.headers.authorization }),
                ...(req.method !== 'GET' && req.headers['content-type'] && { 'Content-Type': req.headers['content-type'] })
            },
            timeout: 200000,
        };

        if (req.method !== 'GET') {
            axiosConfig.data = req.body;
        }

        console.log('Forwarding request to:', axiosConfig.url);
        console.log('Request Method:', req.method);
        console.log('Request Headers:', req.headers);
        console.log('Request Params:', req.query);
        console.log('Request Body:', req.body);

        const response = await axios(axiosConfig);

        console.log('Response from backend:', {
            status: response.status,
            data: response.data,
        });

        res.status(response.status).json(response.data);

    } catch (error) {
        console.error('Request error:', error);

        if (error.response) {
            return res.status(error.response.status).json(error.response.data);
        }

        res.status(500).json({ error: 'Request forwarding failed' });
    }
};

module.exports = forwardRequest;