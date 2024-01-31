new Vue({
    el: '#app',
    data: {
        landers: ['AppInstalls', 'Casino', 'Crypto', 'Ecom', 'Leadgen', 'MobContent', 'Nutra', 'Sweeps'],
        baseURL: "https://mtullaga.github.io/toplander/",
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
        this.landers.forEach(async (el, ind) => {
            if (el == 'AppInstalls') {
                for (let index = 1; index <= 24; index++) {
                    await fetch('./'+el+'/'+el+'_'+index+'/index.html')
                    .then(response => response.text())
                    .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        let titleElement = doc.querySelector('title')
                        titleElement = titleElement ? titleElement.textContent : 'Title Not Found'
                        this.appinstall.push({
                            title: titleElement.trim(),
                            image: el+'/'+el+'_'+index+'/Screenshot.png',
                            linkto: this.baseURL + '' + el +'/'+el+'_'+index+'/index.html',
                            id: el+''+ind+''+index
                        })
                    }).catch(error => console.error('Error fetching HTML:', error));
                }
                
            }

            if (el == 'Casino') {
                for (let index = 1; index <= 10; index++) {
                    await fetch('./'+el+'/'+el+'_'+index+'/index.html')
                    .then(response => response.text())
                    .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        let titleElement = doc.querySelector('title')
                        titleElement = titleElement ? titleElement.textContent : 'Title Not Found'
                        this.casino.push({
                            title: titleElement.trim(),
                            image: el+'/'+el+'_'+index+'/Screenshot.png',
                            linkto: this.baseURL + '' + el +'/'+el+'_'+index+'/index.html',
                            id: el+''+ind+''+index
                        })
                    }).catch(error => console.error('Error fetching HTML:', error));
                }
                
            }

            if (el == 'Crypto') {
                for (let index = 1; index <= 38; index++) {
                    await fetch('./'+el+'/'+el+'_'+index+'/index.html')
                    .then(response => response.text())
                    .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        let titleElement = doc.querySelector('title')
                        titleElement = titleElement ? titleElement.textContent : 'Title Not Found'
                        this.crypto.push({
                            title: titleElement.trim(),
                            image: el+'/'+el+'_'+index+'/Screenshot.png',
                            linkto: this.baseURL + '' + el +'/'+el+'_'+index+'/index.html',
                            id: el+''+ind+''+index
                        })
                    }).catch(error => console.error('Error fetching HTML:', error));
                }
                
            }

            if (el == 'Ecom') {
                for (let index = 1; index <= 25; index++) {
                    await fetch('./'+el+'/'+el+''+index+'/index.html')
                    .then(response => response.text())
                    .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        let titleElement = doc.querySelector('title')
                        titleElement = titleElement ? titleElement.textContent : 'Title Not Found'
                        this.ecom.push({
                            title: titleElement.trim(),
                            image: el+'/'+el+''+index+'/Screenshot.png',
                            linkto: this.baseURL + '' + el +'/'+el+''+index+'/index.html',
                            id: el+''+ind+''+index
                        })
                    }).catch(error => console.error('Error fetching HTML:', error));
                }
                
            }

            if (el == 'Leadgen') {
                for (let index = 1; index <= 17; index++) {
                    await fetch('./'+el+'/'+el+'_'+index+'/index.html')
                    .then(response => response.text())
                    .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        let titleElement = doc.querySelector('title')
                        titleElement = titleElement ? titleElement.textContent : 'Title Not Found'
                        this.leadgen.push({
                            title: titleElement.trim(),
                            image: el+'/'+el+'_'+index+'/Screenshot.png',
                            linkto: this.baseURL + '' + el +'/'+el+'_'+index+'/index.html',
                            id: el+''+ind+''+index
                        })
                    }).catch(error => console.error('Error fetching HTML:', error));
                }
                
            }

            if (el == 'MobContent') {
                for (let index = 1; index <= 16; index++) {
                    await fetch('./'+el+'/'+el+'_'+index+'/index.html')
                    .then(response => response.text())
                    .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        let titleElement = doc.querySelector('title')
                        titleElement = titleElement ? titleElement.textContent : 'Title Not Found'
                        this.mobcontent.push({
                            title: titleElement.trim(),
                            image: el+'/'+el+'_'+index+'/Screenshot.png',
                            linkto: this.baseURL + '' + el +'/'+el+'_'+index+'/index.html',
                            id: el+''+ind+''+index
                        })
                    }).catch(error => console.error('Error fetching HTML:', error));
                }
                
            }

            if (el == 'Nutra') {
                for (let index = 1; index <= 54; index++) {
                    await fetch('./'+el+'/'+el+'_'+index+'/index.html')
                    .then(response => response.text())
                    .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        let titleElement = doc.querySelector('title')
                        titleElement = titleElement ? titleElement.textContent : 'Title Not Found'
                        this.nutra.push({
                            title: titleElement.trim(),
                            image: el+'/'+el+'_'+index+'/Screenshot.png',
                            linkto: this.baseURL + '' + el +'/'+el+'_'+index+'/index.html',
                            id: el+''+ind+''+index
                        })
                    }).catch(error => console.error('Error fetching HTML:', error));
                }
                
            }

            if (el == 'Sweeps') {
                for (let index = 1; index <= 38; index++) {
                    await fetch('./'+el+'/'+el+'_'+index+'/index.html')
                    .then(response => response.text())
                    .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        let titleElement = doc.querySelector('title')
                        titleElement = titleElement ? titleElement.textContent : 'Title Not Found'
                        this.sweeps.push({
                            title: titleElement.trim(),
                            image: el+'/'+el+'_'+index+'/Screenshot.png',
                            linkto: this.baseURL + '' + el +'/'+el+'_'+index+'/index.html',
                            id: el+''+ind+''+index
                        })
                    }).catch(error => console.error('Error fetching HTML:', error));
                }
                
            }
        });
        
        
    },
    methods: {
        openLink() {
            console.log(this.casino)
        }
    }
});     