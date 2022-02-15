const { Router } = require('express');

const { getCustomers, createCustomer, updateCustomer, deleteCustomer } = require('../controllers/customer.controller');

const router = Router();

router.get('/get-customers', getCustomers);

router.post('/create-customer', createCustomer);

router.put('/update-customer', updateCustomer);

router.delete('/delete-customer', deleteCustomer);

module.exports = router;
