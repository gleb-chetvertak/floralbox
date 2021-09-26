$(document).ready(function () {

	$(function() {
	  Grid.init();
	  // adding more items
	  $('#og-additems').on( 'click', function() {
		var $items = $( '<li><a href="#og-grid" data-largesrc="img/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="img/thumbs/1.jpg" alt="img01"/></a></li><li><a href="#og-grid" data-largesrc="img/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="img/thumbs/1.jpg" alt="img01"/></a></li><li><a href="#og-grid" data-largesrc="img/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="img/thumbs/1.jpg" alt="img01"/></a></li><li><a href="#og-grid" data-largesrc="img/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="img/thumbs/1.jpg" alt="img01"/></a></li><li><a href="#og-grid" data-largesrc="img/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="img/thumbs/1.jpg" alt="img01"/></a></li><li><a href="#og-grid" data-largesrc="img/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="img/thumbs/1.jpg" alt="img01"/></a></li><li><a href="#og-grid" data-largesrc="img/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="img/thumbs/1.jpg" alt="img01"/></a></li><li><a href="#og-grid" data-largesrc="img/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="img/thumbs/1.jpg" alt="img01"/></a></li><li><a href="#og-grid" data-largesrc="img/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="img/thumbs/1.jpg" alt="img01"/></a></li><li><a href="#og-grid" data-largesrc="img/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="img/thumbs/1.jpg" alt="img01"/></a></li>' ).appendTo( $( '#og-grid' ) );
		
		Grid.addItems( $items );
		return false;
	  } );
	});

	function scrollToDiv(element,navheight){
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;

		$('body,html').animate({
			scrollTop: totalScroll
		}, 500);
	};

	$('#phoneNumber_callback').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);

		scrollToDiv(elWrapped,40);

		return false;
	});

	$('#primaryBannerText_btn').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);

		scrollToDiv(elWrapped,40);

		return false;
	});

});