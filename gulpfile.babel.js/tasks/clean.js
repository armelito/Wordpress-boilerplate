import del from 'del';

// clean function
const clean = () => del(['../public/themes/armel/dist']);

export default clean;