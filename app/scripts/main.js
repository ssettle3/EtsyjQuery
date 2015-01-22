
var guns = $('.guns'), img_url, img_tag, login, price, stuff, currency;



etsy.results.forEach( function(item){
			img_url = item.Images[0].url_170x135;
			img_tag = "<img src='" + img_url + "'>";
			price = item.price;
			login = item.Shop.login_name;
			currency = item.currency_code;
			var stuff = '<div class="box">' + img_tag + '<h4>' + item.title + '</h4>' + '<span>' + item.Shop.login_name + '</span>' + '<span>' + '$' + item.price + " " + currency + '</span>' + '</div>'

			Finale = stuff
			
			guns.append(Finale)
		}); 




// ===================Re-organized =====================
/*


var = itemImage, itemPrice, itemTitle, itemMoney, itemLogin, itemGrab, guns, stuff;

var guns = $('.guns');

etsy.results.forEach( function(item){
	itemImage = "<img src='" + item.Images[0].url_170x135 + "'>";
	itemPrice = item.price;
	itemLogin = item.Shop.login_name;
	itemTitle = item.title;
	itemMoney = item.currency_code;

	var itemGrab = '<div class ="box">' + itemImage + '<h6>' + itemTitle + '</h6>' + '<span>' + itemLogin + '</span>' + '<span>' + '$' + itemPrice + '' + itemMoney + '</span>' + '</div>'
	
	stuff = itemGrab;

	guns.append(stuff);
});
*/


