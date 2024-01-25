
// <span class='date_day_week'></span>
var array_day = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

 // <span class='date_day_number'></span>
 // <span class='date_month'></span>
 var array_month = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"); // <span class='date_year'></span>
 
// general
var win = '<b>$1,000 Sheng Siong Voucher</b>'; // Prize
var win_brand = ''; // Prize
var win_box = 'ixs_box.png'; // Prize in box
var title = 'Find the $1,000 Sheng Siong Voucher'; // Title
var o = '#00a0d6'; // favicon color
var a = "o.png"; // logo relative path (o.png)
var a2 = "m_w.png"; // header right icon relative path (m_w.png -> white menu) (m_b.png -> black menu) (s_w.png -> white cart) (s_b.png -> black cart)
var b = "Sponsored competition, only today: <span class='date_month'></span><span class='date_day_number'></span> "; // subtitle
var d = "Dear user,"; //
var e = "Every <span class = 'date_day_week'></span> we select 6 lucky users who get the chance to win a <span class = 'w'></span>."; //
var g = "Choose the right gift box to win."; //
var h = "Find <span class='w'></span>"; //
 
// social
var j = "Like"; // Like
var k = 4281; // page likes
var m_l = ""; // Like for comments
var l = ''; // Reply
var w = ""; // thousand separator for numbers
 
// modal 1
var m_1_i = 'images/ixs.png'; // Modal 1 image
var m_1_t = 'Sponsored Competition'; // Modal 1 title
var m_1_d = [{ // Modal 1 description
    "1": "Congratulations!",
	"2": "As a sponsored promotion, you can win a <strong> <span class = 'w'> </span> </strong>.",
	"3": "All you have to do is choose the right gift box.",
	"4": "<strong> You have 3 attempts, good luck! </strong>",
}];
var m_1_b = 'OK'; // Modal 1 button
 
// modal 2
var m_2_i = 'images/s.png'; // Modal 2 image
var m_2_d_2 = '(2) attempt';
var m_2_d_1 = '(1) attempt';
var m_2_d = 'Sorry, but this gift box is empty. You still have <span id = "try"> </span> left. Good luck!'; // Modal 2 description
var m_2_b = 'OK'; // Modal 2 button
 
// modal 3
var m_3_i = 'images/ixs.png'; // Modal 3 image
var m_3_t = 'Congratulations!'; // Modal 3 title
var m_3_s = '(1) <span class = "w_b"> </span> <span class = "w"> </span> has been reserved '; // Modal 3 title
var m_3_d = [{ // Modal 3 description
	"1": "1. Click the button below.",
	"2": "2. Carefully fill out the next page of shipping and contact information.",
	"3": "3. Your <strong> <span class = 'w'> </span> </strong> will be sent within 2 business days."
}];
var m_3_b = 'Claim gift'; // Modal 3 button
 
// comments
var i = [{
    "1": {
        "name": "Xin Yi",
        "likes": "43",
	    "time": "4 Minutes",
		"comment": {
			"1": "I got my <span class = 'w_b'> </span> <span class = 'w'> </span> today, I'm so happy!",		}
    },
    "2": {
        "name": "Zhao AnTi",
        "likes": "32",
	"time": "5 Minutes",
		"comment": {
			"1": "Man, I didn't get it right... can I get another chance?",
        }
    },
    "3": {
        "name": "Chen YY",
        "likes": "21",
	"time": "11 Minutes",
		"comment": {
			"1": "Got mine today, thanks!",
        }
    },
    "4": {
        "name": "Lei",
        "likes": "16",
     	"time": "15 Minutes",
		"comment": {
			"1": "I won a <span class='w_b'></span> <span class='w'></span>! Wooooooo",
        }
    },
    "5": {
        "name": "Tabby Eriksen",
        "likes": "9",
	"time": "38 Minutes",
		"comment": {
			"1": "This is great, I can't wait to use it!",
        }
    },
    "6": {
        "name": "Ma Li",
        "likes": "5",
	"time": "42 Minutes",
		"comment": {
			"1": ":(:( I really wanted one! Not fair!",
        }
    }
}];