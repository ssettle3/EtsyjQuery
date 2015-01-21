
var guns = $('.guns'),
img_url, img_tag;



/* etsy.results.forEach( function(item){
			img_url = item.Images[0].url_170x135;
			img_tag = "<img src='" + img_url + "'>";
			classs = item.title;
			price = item.price;
			login = item.Shop.login_name;
			div = img_tag + classs + price + login;
			
			guns.append(div)
		});
*/

// var theClass = '<div class="box"><img src="item.Images[0].url_170x135"><h6>item.title</h6><span>item.price</span><span>item.Shop.login_name</span></div>'

etsy.results.forEach( function(item){
			img_url = item.Images[0].url_170x135;
			img_tag = "<img src='" + img_url + "'>";
			price = item.price;
			login = item.Shop.login_name;
			var theClass = '<div class="box">' + img_tag + '<h6>' + item.title + '</h6><span>' + item.Shop.login_name + '</span><span>' + '$' + item.price + '</span></div>'

			coup = theClass
			
			guns.append(coup)
		}); 