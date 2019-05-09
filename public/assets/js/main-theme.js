(function ($) {
	'use strict';

	var main = {

		el: {
			$orderReview: $('#order-review'),
			$recipeFilter: $('.filter-container')
		},

		init: function () {
			this.mobileMenu();
			this.stickyOrderReview();
			this.stickyRecipeFilter();
		},

		mobileMenu: function () {

			$('.mobile-menu-container .menu-item-has-children > a').on('click', function () {
				var $li = $(this).parent(),
					$subMenu = $(this).next();

				if( $li.hasClass('open-submenu') ){
					$subMenu.slideUp('fast');
					$li.removeClass('open-submenu');
				} else {
					$subMenu.slideDown('fast');
					$li.addClass('open-submenu');
				}

				return false;
			});

		},

		stickyRecipeFilter: function () {
			let self = this;

			var sticky = self.el.$recipeFilter.stickySidebar({
				containerSelector: '.recipe-container-inner',
				innerWrapperSelector: '.filter-container-inner',
				topSpacing: 110,
				bottomSpacing: 20,
				resizeSensor: true,
				minWidth: 880
			});

			$('.recipe-container-inner').find('.thb-lazyload').bind('lazyloaded', function() {
				sticky.trigger('update.sticky');

				setTimeout(function(){
					sticky.trigger('update.sticky');
				}, 500);
			});
		},

		stickyOrderReview: function () {
			this.el.$orderReview.stickySidebar({
				containerSelector: '.woocommerce-checkout',
				innerWrapperSelector: '.order-review-inner',
				topSpacing: 110,
				bottomSpacing: 20,
				resizeSensor: true,
				minWidth: 880
			});
		}
	};

	var slickSliders = {

		el: {
			$latestSlider: $('ul.latest-slider'),
			$popularSlider: $('ul.popular-slider'),
			$sliderOnSinglePage: $('.slider-on-singlepage')
		},

		init: function () {
			this.initLatestSlider();
			this.initPopularSlider();
			this.initSliderOnSinglePage();
			this.initMainHomeSlider.init();
		},

		initMainHomeSlider: {

			el: {
				$mainHomeSlider: $('div.custom-slider'),
				$entryContainer: $(".entry-container-main"),
				$descriptionContainer: $(".entry-container-main .entry-container")
			},

			init: function () {
				var self = this;

				this.el.$mainHomeSlider.on('init', function (event, slick) {
					self.copySliderContent($(slick.$slides[0]).find('.entry-container'));
				});

				this.el.$mainHomeSlider.slick({
					infinite: true,
					speed: 600,
					dots: false,
					arrows: true,
					prevArrow: $('div.large-slider-prev'),
					nextArrow: $('div.large-slider-next'),
				});

				this.el.$mainHomeSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
					self.el.$entryContainer.addClass('switching');
				});

				this.el.$mainHomeSlider.on('afterChange', function (event, slick, currentSlide) {
					self.el.$entryContainer.removeClass('switching');
					self.copySliderContent($(slick.$slides[currentSlide]).find('.entry-container'));
				});
			},

			copySliderContent: function ($sliderContainer) {
				this.el.$descriptionContainer.html($sliderContainer.html());

				let height = this.el.$entryContainer
					.find('.entry-container .entry-wrapper')
					.outerHeight();

				this.el.$entryContainer.find('.entry-container').css('height', height);
			}

		},

		initLatestSlider: function () {
			let self = this;
			// section 2 slider
			self.el.$latestSlider.imagesLoaded(function () {
				self.el.$latestSlider.removeClass('thb-loading');

				self.el.$latestSlider.slick({
					infinite: true,
					speed: 600,
					dots: false,
					arrows: true,
					prevArrow: $('div.latest-prev'),
					nextArrow: $('div.latest-next'),
					adaptiveHeight: true
				});
			});
		},

		initPopularSlider: function () {
			let self = this;
			// section 7 slider
			self.el.$popularSlider.imagesLoaded(function () {
				self.el.$popularSlider.slick({
					slidesToShow: 3,
					speed: 300,
					prevArrow: $('div.popular-prev'),
					nextArrow: $('div.popular-next'),
					adaptiveHeight: true,
					responsive: [
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1
							}
						}
					]
				});
			});
		},

		initSliderOnSinglePage: function () {
			this.el.$sliderOnSinglePage.slick({
				infinite: true,
				slidesToShow: 3,
				speed: 600,
			});
		}
	};

	var blogPosts = {
		init: function () {
			this.initShopThePost();
			this.initComments();
			this.submitComment();
		},

		initShopThePost: function () {
			var self = this,
				$slider = $('.affiliate-slider');

			if ($slider.length > 0) {
				self.initSlick($slider);
			}

			$(document.body).bind('thb_after_infinite_load', function () {

				$('.affiliate-slider:not(.slick-initialized)').each(function () {
					var $slider = $(this);

					$slider.imagesLoaded(function () {
						self.initSlick($slider);
					});
				});
			});
		},

		initSlick: function ($slider) {
			if ($slider.hasClass('slick-initialized')) {
				return false;
			}

			var $sliderNav = $slider.prev();

			$slider.slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				appendArrows: $sliderNav,
				prevArrow: $sliderNav.find('.prev'),
				nextArrow: $sliderNav.find('.next'),
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
		},


		initComments: function () {
			var el = {
				commentBtnToggle: '.comment-button-toggle',
				commentForm: 'form.comment-form'
			};

			$(document.body).on('click', el.commentBtnToggle, function () {
				let container = $(this);

				if (container.hasClass('disabled')) {
					return false;
				}

				if (container.hasClass('toggled')) {
					container.removeClass("toggled");
					container.find('span').text(container.data('open-text'));
				} else {
					container.data('open-text', container.find('span').text());
					container.find('span').text(container.data('hide-text'));
					container.addClass("toggled");
				}

				return false;
			});
		},

		submitComment: function () {
			$(document.body).on('submit', 'form.comment-form', function () {
				var $form = $(this),
					$commentlist = $form.closest('.commentlist_parent'),
					errors = 0;

				$('.comment-errors').remove();

				// if user is logged in, do not validate author and email fields
				if ($form.find('#author').length && !$form.find('#author').validate()) {
					errors++;
				}

				if ($form.find('#email').length && !$form.find('#email').validateEmail()) {
					errors++;
				}

				// validate comment in any case
				if (!$form.find('#comment').validate()) {
					errors++;
				}

				if (errors > 0) {
					return false;
				}

				$commentlist.addClass('sending');

				$.ajax({
					method: "post",
					url: $form.attr('action'),
					data: $form.serialize()
				}).done(function (response) {
					var $response = $(response);

					if ($response.find('.commentlist_container').length > 0) {
						$commentlist.find('.commentlist_container').html($response.find('.commentlist_container').html());
						$commentlist.find('.comment-leave-reply-form').html($response.find('.comment-leave-reply-form').html());
						$commentlist.find('.comment-count').html($response.find('.comment-count').html());
						$commentlist.find('.comment-leave-reply-form').find('.form-submit').after('<div class="comment-success">Kommentar tilføjet</div>');
					} else {
						//$form.find('.form-submit').after('<div class="comment-errors">' + $response.html() + '</div>');
						$form.find('.form-submit').after('<div class="comment-errors">Fejl! Kommentar ikke tilføjet</div>');
					}

					$commentlist.removeClass('sending');

				}).fail(function (response) {
					var $response = $(response.responseText);
					$form.find('.form-submit').after('<div class="comment-errors">Fejl! Kommentar ikke tilføjet</div>');
					//console.log(response.responseText);
					$commentlist.removeClass('sending');
				});

				return false;
			});
		}

	};

	var shopPages = {

		init: function () {
			this.initMiniCart();
			this.addToCartSinglePage.init();
			this.initShowMoreInfo();
			this.gallery();
		},

		initMiniCart: function () {
			var el = {
				showMiniCartTimer: false,
				$miniCart: $('.cart-container .cart')
			};

			$(document.body).bind('added_to_cart', function () {
				el.$miniCart.addClass('open');

				el.showMiniCartTimer = setTimeout(function () {
					el.$miniCart.removeClass('open');
				}, 5000);
			});
		},

		addToCartSinglePage: {

			init: function () {
				var self = this;
				let singleProduct = document.querySelector('.single-product');

				if (singleProduct == null) {
					return false;
				}

				$(document).on('click', '.single_add_to_cart_button', function (e) {
					e.preventDefault();
					self.addToCart($(this));
					return false;
				});
			},

			addToCart: function ($this) {
				var $thisbutton = $this,
					$form = $thisbutton.closest('form.cart'),
					id = $thisbutton.val(),
					product_qty = $form.find('input[name=quantity]').val() || 1,
					product_id = $form.find('input[name=product_id]').val() || id,
					variation_id = $form.find('input[name=variation_id]').val() || 0;

				$thisbutton.removeClass('added');
				$thisbutton.addClass('loading');

				var data = {
					action: 'woocommerce_add_to_cart',
					product_id: product_id,
					quantity: product_qty,
					variation_id: variation_id,
					show_message: 0
				};

				$(document.body).trigger('adding_to_cart', [$thisbutton, data]);

				$.ajax({
					type: 'post',
					url: wc_add_to_cart_params.ajax_url,
					data: data,
					beforeSend: function (response) {
						$thisbutton.removeClass('added').addClass('loading');
					},
					complete: function (response) {
						$thisbutton.addClass('added').removeClass('loading');
					},
					success: function (response) {
						if (response.error & response.product_url) {
							window.location = response.product_url;
							return;
						} else {
							$(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
						}
					},
				});
			}
		},

		initShowMoreInfo: function () {
			let moreInfo = document.querySelector('.more-info-title');

			if (moreInfo != null) {
				moreInfo.addEventListener('click', function () {
					this.parentElement.classList.toggle('open');
					$(moreInfo).next().slideToggle();
				});
			}
		},

		gallery: function () {
			let $gallery = $('.woocommerce-product-gallery__wrapper'),
				$galleryThumb = $('.product-thumbnails'),
				galleryThumbCount = $galleryThumb.find('.product-thumbnail').length,
				minGalleryThumbCount = 3;

			$gallery.imagesLoaded(function () {
				$gallery.removeClass('thb-loading');

				$gallery.slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true,
					// prevArrow: '<button type="button" class="slick-nav slick-prev">'+themeajax.svg.prev_arrow +'</button>',
					// nextArrow: '<button type="button" class="slick-nav slick-next">'+ themeajax.svg.next_arrow+'</button>',
					asNavFor: galleryThumbCount <= minGalleryThumbCount ? false : $galleryThumb,
				}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
					if( galleryThumbCount > minGalleryThumbCount ) {
						return;
					}

					let $currentThumb = $galleryThumb.find('.product-thumbnail:eq('+ nextSlide +')');

					if($currentThumb.hasClass('slick-current') === false){
						$galleryThumb.find('.product-thumbnail').removeClass('slick-current');
						$currentThumb.addClass('slick-current')
					}
				});
			});

			$galleryThumb.imagesLoaded(function () {
				$galleryThumb.removeClass('thb-loading');

				$galleryThumb.on('init', function (e, slick) {
					if( slick.$slides.length === 2 ) {
						slick.$slider.find('.slick-track').css('margin', '0')
					}
				});

				$galleryThumb.slick({
					infinite: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					asNavFor: $gallery,
					focusOnSelect: true,
					swipeToSlide: galleryThumbCount > minGalleryThumbCount,
					arrows: false,
					dots: false,
					variableWidth: galleryThumbCount > minGalleryThumbCount,
					centerMode: galleryThumbCount <= minGalleryThumbCount,
					centerPadding: '62px',
				});
			});
		}
	};

	var recipePages = {

		init: function () {
			this.initRecipePage();

		},

		initRecipePage: function () {
			var $recipePage = $('.recipe-container');

			if ($recipePage.length === 0) {
				return;
			}

			var $container = $('.recipe-index-archive'),
				$pagination = $('.pagination'),
				infiniteScrollParams = {
					append: '.post-container',
					path: '.pagination > .load-more-button',
					button: '.pagination > .load-more-button',
					status: '.scroller-status',
					scrollThreshold: false,
					history: false,
				};

			if ($(document).find('.pagination > .load-more-button').length) {
				$container.infiniteScroll(infiniteScrollParams);
			}

			$(document).bind('filter_response_load', function (event, response) {
				var infScroll = $container.data('infiniteScroll');

				if (infScroll !== undefined) {
					$container.infiniteScroll('destroy');
				}

				if ($(response).find('.pagination > .load-more-button').length !== 0) {
					$container.infiniteScroll(infiniteScrollParams);
					$pagination.show();
				} else {
					$pagination.hide();
				}
			});


			$(document.body).on('click', '.filter-button-toggle', function () {
				var $btn = $(this),
					$taxFilter = $btn.closest('form');

				if ($taxFilter.hasClass('toggled')) {
					$taxFilter.removeClass("toggled");
				} else {
					$taxFilter.addClass("toggled");
				}

				return false;
			});
		}

	};

	let applyCouponOnCheckoutPage = { 
		init: function () {
			this.errorWrap = '.nm-coupon-error';
			this.orderReviewWrap = '.woocommerce-checkout-review-order-table';
			this.couponInput = 'input#nm-coupon-code';

			$('.woocommerce-checkout').on('click', 'button#nm-apply-coupon-btn', function (e) {
				e.stopPropagation();
				applyCouponOnCheckoutPage.sendRequest();
			});
		},

		sendRequest: function(){
			let self = this;

			$(self.errorWrap).text('');

			$(self.orderReviewWrap).block({
				message: null,
				overlayCSS: {
					background: '#fff',
					opacity: 0.6
				}
			});

			var data = {
				security:		wc_checkout_params.apply_coupon_nonce,
				coupon_code:	$(self.couponInput).val()
			};

			$.ajax({
				type:		'POST',
				url:		wc_checkout_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'apply_coupon' ),
				data:		data,
				success:	function( response ) {
					$(self.orderReviewWrap).unblock();
					
					if( $(response).find('.woocommerce-error').length || $(response).hasClass('woocommerce-error') ){
						$(self.errorWrap).text( $(response).text().trim() );
					} else {
						$( document.body ).trigger( 'update_checkout', { update_shipping_method: false } );
					}
				},
				dataType: 'html'
			});
		}
	};

	$(document).ready(function () {
		/**
		 * Main js for all site
		 */
		main.init();
		slickSliders.init();
		blogPosts.init();
		shopPages.init();
		recipePages.init();
		applyCouponOnCheckoutPage.init();
	});

	$(window).load(function () {

	});
}(jQuery));