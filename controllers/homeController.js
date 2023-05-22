// dependencies


// configuration
const PORT = process.env.PORT || 3001;


// app scaffolding
const homeController = {};
const BASEURL = 'http://localhost:' + PORT;


homeController.index = (req, res) => {

    const data = [
        {
            action_name: 'Fetch all data',
            method: 'GET',
            api_url: '/api/fetch-all',
            body: 'None',
            send_body_type: 'None',
            status: '200',
            description: 'Fetch all data from database',
            badge: 'badge bg-info',
            btn: 'btn btn-outline-info'
        },
        {
            action_name: 'Fetch single data',
            method: 'GET',
            api_url: '/api/fetch/:id',
            body: 'None',
            send_body_type: 'None',
            status: '200',
            description: 'Fetch single data from database',
            badge: 'badge bg-info',
            btn: 'btn btn-outline-info'
        },
        {
            action_name: 'Create a new data',
            method: 'POST',
            api_url: '/api/create',
            body: 'name, email, phone, address, password',
            send_body_type: 'JSON',
            status: '201',
            description: 'Create a new data',
            badge: 'badge bg-success',
            btn: 'btn btn-outline-success'
        },
        {
            action_name: 'Update a data',
            method: 'PUT',
            api_url: '/api/update/:id',
            body: 'name, email, phone, address, password',
            send_body_type: 'JSON',
            status: '200',
            description: 'Update a data',
            badge: 'badge bg-warning',
            btn: 'btn btn-outline-warning'
        },
        {
            action_name: 'Delete a data',
            method: 'DELETE',
            api_url: '/api/delete/:id',
            body: 'None',
            send_body_type: 'None',
            status: '202',
            description: 'Delete a data',
            badge: 'badge bg-danger',
            btn: 'btn btn-outline-danger'
        },
    ];

    res.render('index', { title: 'Home', port: PORT, data: data, baseurl: BASEURL });
};





// export
module.exports = homeController;