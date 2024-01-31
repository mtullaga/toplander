new Vue({
    el: '#app',
    data: {
        landers: ['AppInstalls', 'Casino', 'Crypto', 'Ecom', 'Leadgen', 'MobContent', 'Nutra', 'Sweeps'],
        appinstall: [],
        casino: [],
        crypto: [],
        ecom: [],
        leadgen: [],
        mobcontent: [],
        nutra: [],
        sweeps: []
    },
    mounted() {
        // landers.forEach((el, ind) => {
        //     if (el == 'AppInstalls') {
                // Fetch HTML content from an external source
                console.log('/' + this.landers[0] + '/' + this.landers[0] + '_1/index.txt')
                fetch('./AppInstalls/AppInstalls_1/index.html')
                    .then(response => response.text())
                    .then(html => {
                    console.log(html)
                    })
                    .catch(error => console.error('Error fetching HTML:', error));
        //     }
        // });
        
    },
});     