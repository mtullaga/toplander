(function () {

	// Country from BB
	const currentCountry = getMeta('geo') //'VN';
	// if js is ON in browser delete required from name and phoneInput

	// Asyncronous function to get number and valididation result
	async function checkNumber( rawInput, country ) {

		if(rawInput.length <= 2){
			return await {
				"number": rawInput,
				"isValid": false
			}
		}

		let phoneNumber = new libphonenumber.parsePhoneNumberFromString(rawInput, country);
		console.log(phoneNumber.country);
		console.dir(phoneNumber.number);
		console.log(phoneNumber.isValid());

		if (phoneNumber.country === currentCountry && phoneNumber.isValid() === true) {
			//await console.log('number: ', phoneNumber.number);
			//await console.log('isValid: ', phoneNumber.isValid());
			return await {
				"number": phoneNumber.number,
				"isValid": phoneNumber.isValid()
			}
		}

		return await {
			"number": rawInput,
			"isValid": false
		}
	}

    function bbLogger(Name, Phone)
    {
        let xhr = new XMLHttpRequest()
        let formData = {
            name: Name,
            phone: Phone,
            url: window.location.href
    		}
                
            let url = 'https://ikonwrapper.com/api/v1/blackbox/logger';
            xhr.open('POST', url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(formData));
            xhr.onload = function() {
                let responseObj = xhr.response;
                console.log(responseObj)
            };

    }

    function getMeta(metaName) {
  		const metas = document.getElementsByTagName('meta');

  		for (let i = 0; i < metas.length; i++) {
    		if (metas[i].getAttribute('name') === metaName) {
      			return metas[i].getAttribute('content');
    		}
  		}
  		return '';
	}

	document.addEventListener("DOMContentLoaded", function () {


		// Country from BB
		//currentCountry = getMeta('geo') //'VN';

		
		//Localed errors
		var localeErrors = {
			EN: {
				name: 'Enter your name!',
				phone: 'Enter your number!',
			},
			VN: {
				name: 'Nhập tên của bạn!',
				phone: 'Nhập số chính xác!',
			},
			ID: {
				name: 'Masukkan nama Anda!',
				phone: 'Masukkan nomor yang benar!',
			},
			TH: {
				name: 'ใส่ชื่อของคุณ!',
				phone: 'ใส่หมายเลขของคุณ!',
			},
			IN: {
				name: 'अपना नाम दर्ज करें!',
				phone: 'अपना नंबर दर्ज करें!',
			},
			CZ: {
				name: 'Prosím zadejte své jméno!',
				phone: 'Zadejte své číslo!',
			},
			MY: {
				name: 'Masukkan nama anda!',
				phone: 'Masukkan nombor anda!',
			},
            ES: {
				name: '¡Introduzca su nombre!',
				phone: '¡Entra tu numero!',
			},
            GR: {
				name: 'Εισάγετε το όνομά σας!',
				phone: 'Καταχωρήστε τον αριθμό σας!',
			},
            HU: {
				name: 'Adja meg nevét!',
				phone: 'Írja be a számát!',
			},
            IT: {
				name: 'Inserisci il tuo nome!',
				phone: 'Inserisci il tuo numero!',
			},
            PL: {
				name: 'Wpisz swoje imię!',
				phone: 'Wprowadź swój numer!',
			},
            PT: {
				name: 'Digite seu nome!',
				phone: 'Coloque seu número!',
			},
            RO: {
				name: 'Introdu numele tau!',
				phone: 'Introdu numarul tau!',
			},
            SK: {
				name: 'Zadajte svoje meno!',
				phone: 'Zadajte svoje číslo!',
			},
            BG: {
				name: 'Въведете вашето име!',
				phone: 'Въведете своя номер!',
			},
            KH: {
				name: 'បញ្ចូល​ឈ្មោះ​របស់​អ្នក!',
				phone: 'បញ្ចូលលេខរបស់អ្នក!',
			},
            NL: {
				name: 'Vul uw naam in!',
				phone: 'Voer uw nummer in!',
			},
            NO: {
				name: 'Skriv inn navnet ditt!',
				phone: 'Skriv inn ditt nummer!',
			},
            DE: {
				name: 'Gib deinen Namen ein!',
				phone: 'Geben Sie ihre Nummer ein!',
			},
            SE: {
				name: 'Ange ditt namn!',
				phone: 'Ange ditt nummer!',
			},
            CH: {
				name: 'Gib deinen Namen ein!',
				phone: 'Geben Sie ihre Nummer ein!',
			},
            AU: {
				name: 'Enter your name!',
				phone: 'Enter your number!',
			}

		}

		//Добавление подсказки к номеру
		var leadPhoneMessage = new tippy('input[name="Lead[phone]"]', {
			placement: 'top-start',
			showOnCreate: false, // для теста показывать её при загрузке
			arrow: true,
			trigger: 'focusin',
			hideOnClick: false,
			theme: 'retro',
			content: localeErrors[currentCountry].phone,
							
		});

		var leadNameMessage = new tippy('input[name="Lead[name]"]', {
			placement: 'top-start',
			showOnCreate: false, // для теста показывать её при загрузке
			arrow: true,
			trigger: 'focusin',
			hideOnClick: false,
			theme: 'retro',
			content: localeErrors[currentCountry].name,

		});

		

		// All forms
	    let forms = document.querySelectorAll('form[action="../../blackbox/send.php"]');

	    // Add event listener to every form
	    forms.forEach((form, index) => {

					//Ограниечение на ввод, допускаются только цифры с 0-9, +, -
					let phoneInput = form.querySelector('input[name="Lead[phone]"]'),
							nameInput = form.querySelector('input[name="Lead[name]"]');

							if (phoneInput.hasAttribute('required')) {
								phoneInput.removeAttribute('required')
							};

							if (nameInput.hasAttribute('required')) {
								nameInput.removeAttribute('required')
							};


					phoneInput.addEventListener('keypress', e => {
						// Отменяем ввод не цифр
						if(/[^\+--0-9]/.test(e.key)) e.preventDefault();
					});

					// nameInput.addEventListener('keypress', e => {
					// 	// Отменяем ввод цифр
					// 	if(/[^\D]/.test(e.key)) e.preventDefault();
					// });

	        form.addEventListener('submit', (evt) => {

	        	let rawName = nameInput.value;
	            // Gdddet what user tried to submit
	            let rawValue = phoneInput.value;
	            let validName = rawName.replace(/[0-9]/g, '');
	            if(validName == ''){
					leadNameMessage[index].show();
					evt.preventDefault();
					bbLogger(nameInput.value, phoneInput.value);
				}

	            checkNumber(rawValue, currentCountry).then( (data) => {
	            	// If phone is valid we need to submit the form
	            	console.dir(data);
	            	if (data.isValid === false) {
			        	// Prevent form submission
			            evt.preventDefault();
			            // Popovet
			            leadPhoneMessage[index].show();
                        bbLogger(nameInput.value, phoneInput.value);
	            	} else {
	            		//Убрать строку ниже что форма ушла
	            		//evt.preventDefault();
						// 			leadPhoneMessage[index].setContent('Number is correct');
						// 			leadPhoneMessage[index].show();
	            		// console.log('DATA: ')
	            		// console.dir(data)
	            		nameInput.value = validName;
	            	}

	            	return false;

	            }).catch( (err) => {
					leadPhoneMessage[index].setContent(localeErrors[currentCountry].phone);
					leadPhoneMessage[index].show();
                    bbLogger(phoneInput.value, nameInput.value)
	            	evt.preventDefault();
	            	console.log(err.message);
	            	console.dir(err.stack);
	            });

	            return false;
		    });

		});

	    // Создать елемент
	    let styleTag = document.createElement('style');

	    // Получить контент стилей
	    let content = '.tippy-box[data-theme~=red]{background-color:red;padding-top:10px;text-align:center}.tippy-box[data-theme~=retro]{color:tomato;font-weight:700;background:beige;border-width:2px;border-style:solid;border-color:tomato;border-image:initial;z-index:1!important;text-align:center}.tippy-box[data-placement^=top]>.tippy-arrow:before{top:17px;border-top-color:tomato}';

	    //Добавить внутрь елемента
	    styleTag.innerHTML = content;

	    // Заапдейтить ДОМ
	    document.body.appendChild(styleTag);


	});

})();
