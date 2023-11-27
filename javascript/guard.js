const usr = JSON.parse(localStorage.getItem('currentUser'));

if(!usr || usr.role != 'ADMIN_ROLE'){
    window.location.href = '/index.html'
}