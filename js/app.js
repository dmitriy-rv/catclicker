var cats = [
	{'name':'Greeny', 'img':'img/cat_1.jpg', 'count':0},
	{'name':'Pussy', 'img':'img/cat_2.jpg', 'count':0},
	{'name':'Mary', 'img':'img/cat_3.jpg', 'count':0},
	{'name':'Killy', 'img':'img/cat_4.jpg', 'count':0},
	{'name':'Feelly', 'img':'img/cat_5.jpg', 'count':0}
];

var elements = $('.names');
var item = 0;

for (var i = 0; i < elements.length; i++){
	var element = elements[i];
	
	var name = element.textContent;

	for (var j = 0; j < cats.length; j++){
		if (name == cats[j].name){
			var id = j;
		}
	}

    element.addEventListener('click', (function(name, id) {
        return function() {
            $('#count').text(cats[id].count);
            $('.name').text(cats[id].name);
            $('#img_cat').attr('src', cats[id].img);
            item = id;
        };
    })(name, id));
}



$('#img_cat').click( function(){
	var count = $('#count').text();
	cats[item].count = +count+1;
	$('#count').text(+count+1);
});
