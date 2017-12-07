const scriptTag = document.createElement('script');
declare const config: {
    googleToken: string
};

const scriptSrc = `https:///maps.googleapis.com/maps/api/js?key=${config.googleToken}`;

scriptTag.setAttribute('src', scriptSrc);
scriptTag.setAttribute('async', '');

document.head.appendChild(scriptTag);
