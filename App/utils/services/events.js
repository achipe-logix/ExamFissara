import client from './index';

const getAllEmp = () => client.get('/employees');

export {getAllEmp};
