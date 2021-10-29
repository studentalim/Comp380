window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const firstname = params.get('firstname');
    const lastname = params.get('lastname');
    const email = params.get('email');
    const password = params.get('password');
    
    document.getElementById('data').innerHTML = firstname;
    document.getElementById('data1').innerHTML = lastname;
    document.getElementById('data2').innerHTML = email;
    document.getElementById('data3').innerHTML = password;

})