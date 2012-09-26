/* Author: Kevin R. Smith

*/

LiveLayer = {
	Video: {
		init: function(){
			// Video code here
			
			LiveLayer.Elements.init();
		}
	},
	Elements: {
		init: function(){
			$.getJSON('assets/json/data.json', function(data) {
			  $.each(data.LiveData.mark, function(i, mark) {
				LiveLayer.Elements.element(
					mark.name,
					mark.id,
					mark.cssClass,
					mark.width,
					mark.height,
					mark.posX,
					mark.posY,
					mark.timeIn,
					mark.timeOut,
					mark.action
				);
			  });
			  $("video").bind("timeupdate", function() {
				var vid = this;
				$.each(data.LiveData.mark, function(i, mark){
					if(vid.currentTime > mark.timeIn && vid.currentTime < mark.timeOut){
						$("#"+mark.id+"").fadeIn('slow');
				    }else{
						$("#"+mark.id+"").fadeOut('slow');   
				    }
				});
			  });
			});
		},
		element: function(name, id, cssClass, width, height, posX, posY, timeIn, timeOut, action){
			$("<div/>", {
				'id': id,
				'class': cssClass,
				'css': {
					'position': 'absolute',
					'width': width,
					'height': height,
					'top': posY,
					'left': posX
				}
			}).appendTo("#interactive-layer");
		}
	}
}

//LiveLayer.Video.init()
