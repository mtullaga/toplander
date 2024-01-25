/*------------------Setting-----------------*/

//Проверка на используемые языки
if ((languageParam == 'en')
|| (languageParam == 'ru')
|| (languageParam == 'es')
|| (languageParam == 'ja')
|| (languageParam == 'ar')
|| (languageParam == 'de')
|| (languageParam == 'fr')
|| (languageParam == 'id')
|| (languageParam == 'pt')
|| (languageParam == 'tr')
|| (languageParam == 'zh')
|| (languageParam == 'ko')
|| (languageParam == 'ro')
|| (languageParam == 'bg')
|| (languageParam == 'el')
|| (languageParam == 'pl')
|| (languageParam == 'th')
|| (languageParam == 'hw')
|| (languageParam == 'cs')
|| (languageParam == 'nl')
|| (languageParam == 'sq')
|| (languageParam == 'hu')
|| (languageParam == 'sk')
|| (languageParam == 'sr')
|| (languageParam == 'si')
|| (languageParam == 'hr')
|| (languageParam == 'it')
|| (languageParam == 'vi')
|| (languageParam == 'sv')
|| (languageParam == 'sl')
|| (languageParam == 'fi')
|| (languageParam == 'da')
 ) {

var languageSelector={};
$.extend(true,languageSelector,eval(languageParam+'Set'));
}

else {

var languageSelector={};
$.extend(true,languageSelector,eval(enSet));
}