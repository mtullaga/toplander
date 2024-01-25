// Проверка на дженерики и прочее

if ((device_brand == 'Generic') // основное условие
|| (device_model == 'Generic') // пример доп условия, можно копировать и вставлять с новой строки, работает как "или"
|| (device_model == 'generic')
|| (device_brand == 'generic')
|| (device_model == 'Android 6.0')
|| (device_model == 'Android 5.1')
|| (device_model == 'Android 5.0')
|| (device_model == 'Android 6.1')
|| (device_model == 'Android 3.0')
 ) {

// Задаём значение при нахождении соответствия 	
device_brand = 'Android';
device_model = '';
}


/*------------------EN----------------------*/
var enSet = {
	titleText: 'Attention!',
	alertStart: 'Attention!\n\nYour '+ device_brand +' may still be slowed down.',
	alertBack: 'Wait!\n\nYour '+ device_brand +' may still be slowed down.\n\nStay on the page and install recommended app to clean up your '+ device_brand +' immediately.',
	header: ''+ device_brand +' cleanup may be required!',
	text1: 'Your '+ device_brand +' may be slowed down and your battery may discharge quickly.',
	text2: 'Please clean your '+ device_brand +' memory to increase phone speed.',
	text3: 'Install '+ app_name +' for FREE to clean up your '+ device_brand +' immediately!',
	button: 'Install Now'
};

/*------------------DA----------------------*/
var daSet = {
	titleText: 'Se her!',
	alertStart: 'Vent!\n\nDin '+ device_brand +' kan stadig være langsom.',
	alertBack: 'Vent!\n\nDin '+ device_brand +' kan stadig være langsom. \n\nBliv på siden og installér den anbefalede app for at rense din '+ device_brand +'.',	
	header: 'Rensning af din '+ device_brand +' kan være nødvendig!',
	text1: 'Din '+ device_brand +' kan være langsom, og dit batteri aflades måske hurtigt.</b>',
	text2: 'Rens din '+ device_brand +' hukommelse for at øge din telefons hastighed.</b>',
	text3: 'Installér '+ app_name +' GRATIS for at rense din '+ device_brand +'!',
	button: 'Installér nu'
};
 
/*------------------FI----------------------*/
var fiSet = {
	titleText: 'Huomio!',
	alertStart: 'Odota!\n\n'+ device_brand +'-laitteesi voi edelleen olla hidastunut.',
	alertBack: 'Odota!\n\n'+ device_brand +'-laitteesi voi edelleen olla hidastunut. \n\nPysy sivulla ja asenna suositeltu sovellus puhdistaaksesi '+ device_brand +'-laitteeseen.',	
	header: ''+ device_brand +'-puhdistus voi olla tarpeen!',
	text1: ''+ device_brand +'-laitteesi voi olla hidastunut ja akkusi voi tyhjentyä nopeammin.</b>',
	text2: 'Puhdista '+ device_brand +'-laitteesi muisti parantaaksesi puhelimen nopeutta.</b>',
	text3: 'Asenna '+ app_name +' ILMAISEKSI puhdistaaksesi '+ device_brand +'-laitteesi!',
	button: 'Asenna nyt'
};

/*------------------RU----------------------*/
var ruSet = {
	titleText: 'Внимание!',
	alertStart: 'Внимание!\n\nВаш телефон '+ device_brand +' может работать медленно.',
	alertBack: 'Подождите!\n\nВаш телефон все еще может работать медленно.\n\nОставайтесь на странице и установите это рекомендованное для телефонов '+ device_brand +' приложение прямо сейчас.',	
	header: 'Ваш телефон '+ device_brand +' может быть засорен мусорными файлами!',
	text1: 'Скорость Вашего телефона '+ device_brand +' может быть снижена и его память может быть засорена.</b>',
	text2: 'Очистите Ваш телефон, чтобы ускорить его.</b>',
	text3: 'Установите <strong>БЕСПЛАТНОЕ</strong> приложение '+ app_name +', чтобы очистить ваш '+ device_brand +' прямо сейчас!',
	button: 'Установить'
};

/*------------------ES----------------------*/
var esSet = {
	titleText: '¡Advertencia!',
	alertStart: '¡Advertencia!\n\n¡Su celular '+ device_brand +' '+ device_model +' puede estar en riesgo!\n\n¡Siga las instrucciones para protegerlo!',
	alertBack: '¡Espere!\n\nTu '+ device_brand +' '+ device_model +' puede ser lento.\n\nPermanezca en la página e instale '+ app_name +' para limpiar su teléfono inmediatamente.',
	header: '¿La memoria de su teléfono '+ device_brand +' siempre es insuficiente?',
	text1: '¿Su '+ device_brand +' '+ device_model +' es lento y la batería se descarga rápidamente?',
	text2: 'Limpie su memoria '+ device_brand +' para aumentar la velocidad del teléfono.',
	text3: '¡Instale esta aplicación <strong>GRATIS</strong> '+ app_name +' para limpiar su teléfono '+ device_brand +' ahora!',
	button: 'Instalar'
};

/*------------------JA----------------------*/
var jaSet = {
	titleText: 'ご注意！',
	alertStart: 'ご注意！\n\nお使いのスマホはまだ遅いかもしれません。',
	alertBack: 'お待ちください！\n\nお使いのスマホはまだ遅いかもしれません。\n\nページに留まり、今すぐスマホをクリーンアップできる推奨アプリをインストールしてください。',
	header: 'スマホのクリーンアップが必要かもしれません！',
	text1: 'スマートフォンの動作が遅い場合があり。 バッテリーはすぐに放電する場合があります。',
	text2: 'スマートフォンを高速化するには、メモリをクリアしてください。',
	text3: '無料でアプリをインストールし、今すぐスマホをクリーンナップしてください！',
	button: '今すぐインストール'
};

/*------------------DE----------------------*/
var deSet = {
	titleText: 'Achtung!',
	alertStart: 'Achtung!\n\nIhr  '+ device_brand +' könnte zu langsam funktionieren.',
	alertBack: 'Warten Sie!\n\nIhr '+ device_brand +'  funktioniert immer noch zu langsam.',
	header: 'Möglicherweise brauchen Sie Ihren '+ device_brand +' reinigen!',
	text1: 'Ihr '+ device_brand +'  ist möglicherweise langsam. Der Akku kann sich sofort entladen.',
	text2: 'Bereinigen Sie Ihren '+ device_brand +' Speicher, um die Handygeschwindigkeit zu erhöhen.',
	text3: 'Installieren Sie '+ app_name +' KOSTENLOS, um Ihre '+ device_brand +' jetzt zu schützen!',
	button: 'Jetzt installieren!'
};

/*------------------FR----------------------*/
var frSet = {
	titleText: 'Attention ! ',
	alertStart: 'Attention ! \n\nVotre '+ device_brand +' pourrait encore être ralenti.',
	alertBack: 'Attendez, votre '+ device_brand +' pourrait encore être ralenti\n\nRestez sur la page et installez l\'application recommandée pour nettoyer votre '+ device_brand +' immédiatement.',
	header: 'La mémoire de votre téléphone '+ device_brand +' est-elle toujours insuffisante?',
	text1: 'Il est possible que votre '+ device_brand +' soit ralenti. La batterie peut se décharger immédiatement.',
	text2: 'Veuillez nettoyer la mémoire de votre '+ device_brand +' pour augmenter la vitesse du téléphone.',
	text3: 'Installez'+ app_name +' gratuite pour nettoyer maintenant votre '+ device_brand +' ! ',
	button: 'Installer maintenant'
};

/*------------------ID----------------------*/
var idSet = {
	titleText: 'Perhatian!',
	alertStart: 'Perhatian!\n\nPembersihan '+ device_brand +' mungkin diperlukan!',
	alertBack: 'Tunggu!\n\n'+ device_brand +' Anda semakin melambat. Tetap di halaman dan pasang aplikasi yang direkomendasikan untuk segera membersihkan '+ device_brand +' Anda.',
	header: 'Pembersihan '+ device_brand +' mungkin diperlukan!',
	text1: ''+ device_brand +' Anda mungkin melambat. Baterai ponsel Anda mungkin terkuras dengan cepat.',
	text2: 'Harap bersihkan memori '+ device_brand +' untuk meningkatkan kecepatan ponsel.',
	text3: 'Pasang '+ app_name +' yang direkomendasikan secara GRATIS untuk membersihkan '+ device_brand +' Anda dengan segera!',
	button: 'Pasang sekarang'
};

/*------------------PT----------------------*/
var ptSet = {
	titleText: 'Atenção!',
	alertStart: 'Atenção!\n\nSeu '+ device_brand +' ainda pode estar lento.',
	alertBack: 'É necessário limpar o sistema!\n\n Clique em "Instalar" e instale o app GRÁTIS para limpar seu '+ device_brand +'',
	header: 'Pode ser necessário limpar '+ device_brand +'!',
	text1: 'Seu '+ device_brand +' pode estar lento. Sua bateria pode descarregar rapidamente.',
	text2: 'Limpe a memória do seu '+ device_brand +' para acelere o seu celular.',
	text3: 'Clique no botão abaixo e aproveite todas as funções do '+ app_name +' GRATUITO',
	button: 'Instale já'
};


/*------------------AR----------------------*/
var arSet = {
	titleText: 'انتباه',
	alertStart: 'انتباه\n\nنظام  هاتفك ربما يبطئ ويستنزف بطاريتك بشكلٍ أسرع. يرجى اتباع التعليمات لإصلاح الهاتف.',
	alertBack: 'لا تغلق هذه النافذة.\n\nنظام  هاتفك ربما يبطئ ويستنزف بطاريتك بشكلٍ أسرع. يرجى اتباع التعليمات لإصلاح الهاتف.',	
	header: '<div style="text-align: right;">ربما يتطلب الأمر تنظيفاً لـ '+ device_brand +'</div>',
	text1: '<div style="text-align: right;">قد يتباطأ + device_brand + '+ device_model +'. يمكن أن تستنزف البطارية بشكل أسرع.</div>',
	text2: '<div style="text-align: right;">ييرجى تنظيف ذاكرة '+ device_brand +' الخاصة بك لزيادة سرعة الهاتف.</div>',
	text3: '<div style="text-align: right;">قم بتثبيت التطبيق الموصى به مجاناً لتنظيف '+ device_brand +' الخاص بك فوراً!</div>',
	button: 'تثبيت'
};

/*------------------TR----------------------*/
var trSet = {
	titleText: 'Dikkat!',
	alertStart: 'Dikkat!\n\n'+ device_brand +' halen yavaş olabilir.',
	alertBack: 'Durun!\n\n'+ device_brand +' unuz halen yavaş olabilir. Sayfada kalın ve '+ device_brand +' derhal temizlemek için tavsiye edilen uygulamayı kurun.',
	header: ''+ device_brand +' temizliği gerekli olabilir!',
	text1: ''+ device_brand +' yavaş olabilir ve pilinizin şarjı hızlıca tükenebilir.',
	text2: 'Lütfen telefon hızını artırmak için '+ device_brand +' hafızanızı temizleyin.',
	text3: ''+ device_brand +' ıderhal temizlemek için uygulamayı ÜCRETSİZ kurun!',
	button: 'Şimdi kur'
};

/*------------------KO----------------------*/
var koSet = {
	titleText: '기기가 느려질 수 있습니다!',
	alertStart: '응용 프로그램 업데이트를 사용할 수 있습니다!\n\n휴대 전화를 청소해야 할 수도 있습니다',
	alertBack: '응용 프로그램 업데이트를 사용할 수 있습니다!\n\n휴대 전화를 청소해야 할 수도 있습니다',
	header: ''+ device_brand +' 메모리가 항상 부족합니까? ',
	text1: ''+ device_brand +'가 느려질 수 있습니다. 배터리가 빨리 방전 될 수 있습니다.',
	text2: '최신'+ app_name + '를 설치하면 앱 및 사이트 로딩 시간이 단축되고 공간이 비워지며 휴대 전화가 보호됩니다.',
	text3: '확인을 클릭하고 '+ app_name +' 을 설치하십시오. <span class="green">무료</span>.',
	button: '설치'
};

/*------------------ZH----------------------*/
var zhSet = {
	titleText: '警告！',
	alertStart: '警告！\n\n你的手機可能仍然很慢。\n\n留在頁面上，立即安裝這個推薦的手機應用程序',
	alertBack: '請稍等\n\n你的手機可能仍然很慢。\n\n留在頁面上，立即安裝這個推薦的手機應用程序',
	header: '你的手機 '+ device_brand +' 可能會被垃圾文件亂七八糟!',
	text1: '手機的速度 '+ device_brand +' '+ device_model +' 可以減少，它的記憶可以被堵塞',
	text2: '從垃圾文件中清理手機並加快速度。 ',
	text3: '安裝此推薦用於手機 '+ device_brand +' 应用 <strong>免費</strong> 現在！',
	button: '建立'
};

/*------------------RO----------------------*/
var roSet = {
	titleText: 'Atenție!',
	alertStart: 'Telefonul poate lucra în continuare lent.\n\nRămâneți pe pagină și instalați acum această aplicație recomandată pentru telefon '+ device_brand +' chiar acum!',
	alertBack: 'Așteptați!\n\nTelefonul poate lucra în continuare lent.\n\nRămâneți pe pagină și instalați acum această aplicație recomandată pentru telefon '+ device_brand +' chiar acum!',	
	header: 'Telefonul '+ device_brand +' poate fi înfundat gunoi de fișiere!',
	text1: 'Viteza telefonului '+ device_brand +' '+ device_model +' poate fi redusă. Memoria ei poate fi înfundată.',
	text2: 'Curățați telefonul de fișiere de gunoi și accelerați-l</b>.',
	text3: 'Instalați această aplicație recomandată pentru telefon  '+ device_model +' aplicația <strong>GRATUIT</strong> chiar acum!',
	button: 'Instalați'
};

/*------------------BG----------------------*/
var bgSet = {
	titleText: 'Внимание!',
	alertStart: 'Вашият телефон може да работи още по-бавно.\n\nОстанете на страницата и  инсталирайте това препоръчително за телефони '+ device_brand +' приложение сега!',
	alertBack: 'Изчакайте\n\nВашият телефон може да работи още по-бавно.\n\nОстанете на страницата и  инсталирайте това препоръчително за телефони '+ device_brand +' приложение сега!',	
	header: 'Вашият телефон '+ device_brand +' може да бъде пълен с нежелани файлове!',
	text1: 'Скоростта на телефона ви '+ device_brand +' '+ device_model +' може да бъде намалена. Паметта му може да бъде запушена</b>.',
	text2: 'Почистете телефона си от нежелани файлове и го ускорете.',
	text3: 'Инсталирайте това препоръчително за телефони '+ device_brand +' приложение <strong>БЕЗПЛАТНО</strong> сега! ',
	button: 'Инсталирате'
};

/*------------------EL----------------------*/
var elSet = {
	titleText: 'Προσοχή!',
	alertStart: 'Το τηλέφωνό σας μπορεί να είναι αργό.\n\nΠαρακαλώ παραμείνετε στη σελίδα και εγκαταστήστε αυτή τη συνιστώμενη εφαρμογή τηλεφώνου για την '+ device_brand +' τώρα.',
	alertBack: 'Περιμένετε!\n\nΤο τηλέφωνό σας μπορεί να είναι αργό.\n\nΠαρακαλώ παραμείνετε στη σελίδα και εγκαταστήστε αυτή τη συνιστώμενη εφαρμογή τηλεφώνου για την '+ device_brand +' τώρα.',	
	header: ' Το τηλέφωνό '+ device_brand +' σας μπορεί να είναι γεμάτο με άχρηστα αρχεία!',
	text1: 'Η ταχύτητα του τηλεφώνου '+ device_brand +' '+ device_model +' σας μπορεί να μειωθεί και η μνήμη του να είναι φραγμένη. ',
	text2: 'Καθαρίστε το τηλέφωνό σας από τα ανεπιθύμητα αρχεία και επιταχύνετε .',
	text3: ' Εγκαταστήστε αυτή τη συνιστώμενη τηλεφώνου '+ device_brand +' εφαρμογή  <strong>ΔΩΡΕΑΝ</strong> τώρα! ',
	button: 'Εγκατάσταση'
};

/*------------------PL----------------------*/
var plSet = {
	titleText: 'Uwaga!',
	alertStart: 'Uwaga!\n\nTwoje urządzenie '+ device_brand +' ciągle może powoli działać',
	alertBack: 'Czekaj!\n\nTwoje urządzenie '+ device_brand +' ciągle może powoli działać.\n\nPozostań na tej stronie i zainstaluj zalecaną aplikację, by natychmiast wyczyścić swoje urządzenie '+ device_brand +'.',	
	header: 'Może być konieczne czyszczenie '+ device_brand +'!',
	text1: 'Twoje urządzenie '+ device_brand +' może powoli działać. Akumulator może się szybko wyczerpywać.',
	text2: 'Wyczyść pamięć swojego urządzenia '+ device_brand +', by przyspieszyć telefon.',
	text3: 'Zainstaluj za DARMO '+ app_name +', by natychmiast wyczyścić swoje urządzenie '+ device_brand +'!',
	button: 'Zainstaluj teraz'
};

/*------------------TH----------------------*/
var thSet = {
	titleText: 'ความสนใจ!',
	alertStart: 'รอ!\n\n'+ device_brand +' '+ device_model +' ของคุณยังคงสามารถชะลอตัวได้ \n\nอยู่บนหน้าเว็บและติดตั้งแอ็พพลิเคชันเพื่อทำความสะอาด '+ device_brand +' ทันที',
	alertBack: 'รอ!\n\n'+ device_brand +' '+ device_model +' ของคุณยังคงสามารถชะลอตัวได้ \n\nอยู่บนหน้าเว็บและติดตั้งแอ็พพลิเคชันเพื่อทำความสะอาด '+ device_brand +' ทันที',	
	header: 'หน่วยความจำโทรศัพท์ '+ device_brand +' ไม่เพียงพอ?',
	text1: ''+ device_brand +' '+ device_model +' ของคุณอาจช้าลง แบตเตอรี่อาจหมดเร็ว! ',
	text2: 'ล้างหน่วยความจำโทรศัพท์ '+ device_brand +' ของโทรศัพท์ของคุณและเพิ่มความเร็วของโทรศัพท์',
	text3: 'ติดตั้ง สำหรับ ฟรี  ในการทำความสะอาด '+ device_brand +' ของคุณทันที!',
	button: 'ติดตั้ง'
};

/*------------------HW----------------------*/
var hwSet = {
	titleText: '!תשומת הלב',
	alertStart: '!תשומת הלב\n\יתכן וה'+ device_brand +' שלך עדיין יואט',
	alertBack: '!חכה\n\nיתכן וה'+ device_brand +' שלך עדיין יואט\n\n.הישאר בדף והתקן אפליקציה מומלצת כדי לנקות את '+ device_brand +' שלך מייד',
	header: '<div style="text-align: right;">ניקוי '+ device_brand +' עשוי להידרש!</div>',
	text1: '<div style="text-align: right;">יתכן והאטת '+ device_brand +' שלך והסוללה עשויה להתרוקן במהירות.</div>',
	text2: '<div style="text-align: right;">אנא נקה את הזיכרון '+ device_brand +' כדי להגדיל את מהירות הטלפון/</div>',
	text3: '<div style="text-align: right;">התקן '+ app_name +' בחינם כדי לנקות את '+ device_brand +' שלך מייד!</div>',
	button: 'התקן עכשיו'
};

/*------------------CS----------------------*/
var csSet = {
	titleText: 'Pozor!',
	alertStart: 'Pozor!\n\nVaše '+ device_brand +' může být stále zpomaleno.',
	alertBack: 'Wait!\n\nVaše '+ device_brand +' může být stále zpomaleno.\n\nZůstaňte na stránce a nainstalujte doporučenou aplikaci pro okamžité vyčištění '+ device_brand +'.',
	header: 'Může být vyžadováno vyčištění '+ device_brand +'!',
	text1: 'Váš '+ device_brand +' může být zpomalen. Vaše baterie může rychle vybít.',
	text2: 'Vyčistěte paměť '+ device_brand +', abyste zvýšili rychlost telefonu.',
	text3: 'Nainstalujte '+ app_name +' ZDARMA a okamžitě si vyčistěte '+ device_brand +'!',
	button: 'Nainstalovat nyní'
};

/*------------------NL----------------------*/
var nlSet = {
	titleText: 'Aandacht!',
	alertStart: 'Aandacht!\n\nUw '+ device_brand +' kan nog worden vertraagd.',
	alertBack: 'Wacht!\n\nUw '+ device_brand +' kan nog worden vertraagd.\n\nBlijf op de pagina en installeer de aanbevolen app om je '+ device_brand +' onmiddellijk op te ruimen.',
	header: ''+ device_brand +' opruimen kan nodig zijn!',
	text1: 'Uw '+ device_brand +' kan worden vertraagd. Uw batterij kan snel leeg raken.',
	text2: 'Maak uw '+ device_brand +' geheugen schoon om de telefoonsnelheid te verhogen.',
	text3: 'Installeer '+ app_name +' GRATIS om uw '+ device_brand +' onmiddellijk op te ruimen!',
	button: 'Installeer nu'
};

/*------------------SQ----------------------*/
var sqSet = {
	titleText: 'Kujdes!',
	alertStart: 'Kujdes!\n\nJuaj '+ device_brand +' mund të ngadalësohet.',
	alertBack: 'Prisni!\n\nJuaj '+ device_brand +' mund të ngadalësohet.\n\nQëndroni në faqe dhe instaloni aplikacionin e rekomanduar për të pastruar menjëherë '+ device_brand +'.',
	header: 'Mund të kërkohet pastrim '+ device_brand +'!',
	text1: 'Juaj '+ device_brand +' mund të ngadalësohet. Bateria juaj mund të shkarkohet shpejt.',
	text2: 'Ju lutemi pastroni kujtesën tuaj '+ device_brand +' për të rritur shpejtësinë e telefonit.',
	text3: 'Instaloni '+ app_name +' FALAS për të pastruar menjëherë '+ device_brand +'!',
	button: 'Instaloje tani'
};

/*------------------HU----------------------*/
var huSet = {
	titleText: 'Figyelem!',
	alertStart: 'Figyelem!\n\nA '+ device_brand +' továbbra is lelassulhat.',
	alertBack: 'Várjon!\n\nA '+ device_brand +' továbbra is lelassulhat.\n\nMaradjon az oldalon, és telepítse az ajánlott alkalmazást az '+ device_brand +' azonnali megtisztításához.',
	header: 'A '+ device_brand +' tisztításra szükség lehet!',
	text1: 'A '+ device_brand +' lelassulhat. Az akkumulátor gyorsan lemerülhet.',
	text2: 'A telefon sebességének növelése érdekében tisztítsa meg a '+ device_brand +' memóriát.',
	text3: 'Telepítse INGYEN a '+ app_name +' alkalmazást, hogy azonnal megtisztítsa a '+ device_brand +' elemet!',
	button: 'Telepítés most'
};

/*------------------SK----------------------*/
var skSet = {
	titleText: 'Pozor!',
	alertStart: 'Pozor!\n\nVaše zariadenie '+ device_brand +' sa môže spomaliť.',
	alertBack: 'Počkať!\n\nVaše zariadenie '+ device_brand +' sa môže spomaliť.\n\nZostaňte na stránke a nainštalujte odporúčanú aplikáciu na okamžité vyčistenie zariadenia '+ device_brand +'.',
	header: 'Môže byť potrebné vyčistiť zariadenie '+ device_brand +'!',
	text1: 'Vaše '+ device_brand +' sa môže spomaliť. Vaša batéria sa môže rýchlo vybiť.',
	text2: 'Vyčistite pamäť '+ device_brand +', aby ste zvýšili rýchlosť telefónu.',
	text3: 'Nainštalujte '+ app_name +' ZADARMO a okamžite si vyčistite '+ device_brand +'!',
	button: 'Nainštalovať teraz'
};

/*------------------SL----------------------*/
var slSet = {
	titleText: 'Pozor!',
	alertStart: 'Pozor!\n\nVaš '+ device_brand +' je morda še vedno upočasnjen.',
	alertBack: 'Počakaj!\n\nVaš '+ device_brand +' je morda še vedno upočasnjen.\n\nOstanite na strani in namestite priporočeno aplikacijo, da takoj očistite svoj '+ device_brand +'.',
	header: 'Morda bo potrebno čiščenje '+ device_brand +'!',
	text1: 'Vaša '+ device_brand +' se lahko upočasni. Baterija se lahko hitro izprazni.',
	text2: 'Če želite povečati hitrost telefona, očistite pomnilnik '+ device_brand +'.',
	text3: 'Namestite '+ app_name +' BREZPLAČNO in takoj očistite svoj '+ device_brand +'!',
	button: 'Namestiti zdaj'
};

/*------------------SR----------------------*/
var srSet = {
	titleText: 'Пажња!',
	alertStart: 'Пажња!\n\nМожда ће ваш '+ device_brand +' и даље бити успорен.',
	alertBack: 'Чекати!\n\nМожда ће ваш '+ device_brand +' и даље бити успорен.\n\nОстаните на страници и инсталирајте препоручену апликацију како бисте одмах очистили свој '+ device_brand +'.',
	header: 'Можда ће бити потребно чишћење '+ device_brand +'!',
	text1: 'Можда ће вам се успорити '+ device_brand +'. Батерија се може брзо испразнити.',
	text2: 'Очистите своју '+ device_brand +' меморију да бисте повећали брзину телефона.',
	text3: 'Инсталирајте '+ app_name +' БЕСПЛАТНО да бисте очистили свој '+ device_brand +' одмах!',
	button: 'Инсталирај одмах'
};

/*------------------HR----------------------*/
var hrSet = {
	titleText: 'Pažnja!',
	alertStart: 'Pažnja!\n\nVaša '+ device_brand +' i dalje može usporiti.',
	alertBack: 'Čekati!\n\nVaša '+ device_brand +' i dalje može usporiti.\n\nOstanite na stranici i instalirajte preporučenu aplikaciju kako biste očistili svoj uređaj '+ device_brand +' odmah.',
	header: 'Možda će biti potrebno čišćenje '+ device_brand +'!',
	text1: 'Vaša '+ device_brand +' može se usporiti. Baterija se može brzo isprazniti.',
	text2: 'Očistite svoju '+ device_brand +' memoriju da biste povećali brzinu telefona.',
	text3: 'Instalirajte '+ app_name +' BESPLATNO da biste očistili svoj '+ device_brand +' odmah!',
	button: 'Sada instalirati'
};

/*------------------IT----------------------*/
var itSet = {
	titleText: 'Attenzione!',
	alertStart: 'Attenzione!\n\nIl tuo '+ device_brand +' potrebbe essere ancora rallentato.',
	alertBack: 'Aspettare!\n\nIl tuo '+ device_brand +' potrebbe essere ancora rallentato.\n\nRimani sulla pagina e installa l\'app consigliata per ripulire immediatamente '+ device_brand +'.',
	header: 'Potrebbe essere richiesta la pulizia '+ device_brand +'!',
	text1: ''+ device_brand +' potrebbe essere rallentato. La batteria potrebbe scaricarsi rapidamente.',
	text2: 'Pulisci la memoria '+ device_brand +' per aumentare la velocità del telefono.',
	text3: 'Installa '+ app_name +' GRATUITAMENTE per ripulire immediatamente '+ device_brand +'!',
	button: 'Installa ora'
};

/*------------------VI----------------------*/
var viSet = {
	titleText: 'Chú ý!',
	alertStart: 'Chú ý!\n\n'+ device_brand +' của bạn vẫn có thể bị chậm lại.',
	alertBack: 'Chờ đợi!\n\n'+ device_brand +' của bạn vẫn có thể bị chậm lại.\n\nỞ lại trang và cài đặt ứng dụng được đề xuất để dọn sạch '+ device_brand +' của bạn ngay lập tức.',
	header: 'Có thể cần phải dọn dẹp '+ device_brand +'!',
	text1: ''+ device_brand +' của bạn có thể bị chậm lại. Pin của bạn có thể nhanh hết.',
	text2: 'Vui lòng xóa bộ nhớ '+ device_brand +' của bạn để tăng tốc độ điện thoại.',
	text3: 'Cài đặt '+ app_name +' MIỄN PHÍ để dọn dẹp '+ device_brand +' của bạn ngay lập tức!',
	button: 'Cài đặt ngay'
};

/*------------------SV----------------------*/
var svSet = {
	titleText: 'Uppdatering!',
	alertStart: 'Uppdatering!\n\nDin '+ device_brand +' kan fortfarande bromsas ner.',
	alertBack: 'Vänta!\n\nDin '+ device_brand +' kan fortfarande bromsas ner.\n\nStäll in på sidan och installera rekommenderad app för att rensa upp din '+ device_brand +' omedelbart.',
	header: 'Uppdatering av Cleaner för '+ device_brand +' rekommenderas!',
	text1: 'Din' + device_brand + 'kan bromsas ner. Batteriet kan laddas snabbt',
	text2: 'Vänligen rengör ditt' + device_brand + 'minne för att öka telefonhastigheten.',
	text3: 'Installera' + app_name + 'GRATIS för att rensa upp din' + device_brand + 'omedelbart!',
	button: 'Uppdatera nu'
};