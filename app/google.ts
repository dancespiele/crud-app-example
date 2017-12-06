const scriptTag = document.createElement('script');
const googleToken = 'AIzaSyCKKPYuxP2XG4wB0lUdgWLGy3XFH_ec9Tc'

const scriptSrc = `https:///maps.googleapis.com/maps/api/js?key=${googleToken}`;

scriptTag.setAttribute('src', scriptSrc);
scriptTag.setAttribute('async', '');

document.head.appendChild(scriptTag);
