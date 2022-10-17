var customerName = `bob`;

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = `not bob`;
    return bestCustomer;
}

function overwriteBestCustomer() {
    return bestCustomer = `maybe bob`;
}

const leastFavoriteCustomer = `teddy`;

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = `still teddy`;
}