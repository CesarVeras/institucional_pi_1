const iframe = document.querySelector('iframe');
document.body.onresize = () => {
    let width = parseInt(getComputedStyle(document.body).getPropertyValue('width'), 10);
    if (iframe) {
        if (width >= 768) {
            iframe.width = '600px';
            iframe.height = '400px';
        } else {
            iframe.width = '300px';
            iframe.height = '200px';
        }
    }
}