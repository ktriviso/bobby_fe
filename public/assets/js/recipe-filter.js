(function ($) {
	'use strict';

	var setting = {
		blockUiOpt: {
			message: null,
			overlayCSS: {
				background: '#fff',
				opacity: 0.6
			}
		}
	};

	var filter = {

		el: {
			$filterForm: $('form.filter-form'),
			actionUrl: $('form.filter-form').attr('action'),
			contentWrapper: '.recipe-index-archive',
			pagination: '.pagination',
			filterTerms: '.filter-terms',
			taxonomyTermsValue: '.taxonomy-terms-value',
			termCheckBox: 'input[type="checkbox"]',
			searchValue: '.filter-search input.search-value',
			searchButton: '.filter-search button.search-button'
		},

		init: function () {
			var self = this;

			self.el.$filterForm.on('submit', function () {
				self.onSubmit($(this).serialize(), true);

				return false;
			});

			self.el.$filterForm.on('click', self.el.searchButton, function () {
				self.propSearch();
				$(this).closest('form').trigger('submit');
				return false;
			});

			$(self.el.filterTerms).on('change', this.el.termCheckBox, function () {
				self.onChangeCheckBox($(this));
			});

			$(self.el.filterTerms).on('click', 'h3', function () {
				var $filter = $(this).closest(self.el.filterTerms);

				$(self.el.filterTerms)
					.filter('.active')
					.not($filter)
					.removeClass('active');

				$filter.toggleClass('active');
			});

			$(document.body).on('click', function (e) {
				if ($(e.target).closest(self.el.filterTerms).length === 0) {
					$(self.el.filterTerms)
						.filter('.active')
						.removeClass('active');
				}
			});

			window.onpopstate = function (event) {
				if (event.state !== null && event.state.filter !== undefined) {
					self.onSubmit(event.state.filter, false);

					$(self.el.filterTerms).find(self.el.termCheckBox).prop('checked', false);

					$.each(self.getQueryParameters(decodeURIComponent(event.state.filter)), function (key, val) {
						if (key === 'paged') {
							return;
						}

						if (key === 'search') {
							$(self.el.searchValue).val(val);
						}
						/* else {
													$(self.el.searchValue).val('');
												}*/

						$.each(val.split(','), function (k, v) {
							$('#' + key).find('input[value="' + v + '"]').prop('checked', true);
						});
					});

				} else {
					location.href = document.location;
				}
			};
		},

		onSubmit: function (actionData, pushState) {
			var self = this,
				historyUrl = self.el.actionUrl;

			$(self.el.contentWrapper).block(setting.blockUiOpt);

			$.get(self.el.actionUrl, actionData).done(function (response) {
				$(self.el.contentWrapper).html($(response).find(self.el.contentWrapper).html());
				$(self.el.pagination).html($(response).find(self.el.pagination).html());
				$(self.el.contentWrapper).unblock();

				$(document).trigger('filter_response_load', [response]);

				if (actionData !== 'paged=1') {
					historyUrl = '?' + actionData;
				}

				if (pushState === true) {
					history.pushState({'filter': actionData}, false, removeURLParameter(historyUrl, 'paged'));
				}

				self.propSearch(false);
			});
		},

		onChangeCheckBox: function ($this) {
			var $form = $this.closest('form'),
				$taxonomy = $this.closest('.filter-terms'),
				$taxonomyTermsValue = $taxonomy.find(this.el.taxonomyTermsValue),
				values = this.prepareValues($taxonomy);

			if (values.length === 0) {
				$taxonomyTermsValue.prop('disabled', true);
			} else {
				$taxonomyTermsValue.prop('disabled', false);
			}

			this.propSearch();

			$taxonomyTermsValue.val(values.join(','));
			$form.trigger('submit');
		},

		prepareValues: function ($taxonomy) {
			let values = [];

			$taxonomy.find(this.el.termCheckBox + ':checked').filter(function () {
				values.push(this.value);
			});

			return values;
		},

		getQueryParameters: function (str) {
			return (str || document.location.search).replace(/(^\?)/, '').split("&").map(function (n) {
				return n = n.split("="), this[n[0]] = n[1], this
			}.bind({}))[0];
		},

		propSearch: function (state) {
			if (state !== undefined) {
				document.querySelector(this.el.searchValue).disabled = state;
				return;
			}

			if (document.querySelector(this.el.searchValue).value === '') {
				document.querySelector(this.el.searchValue).disabled = true;
			} else {
				document.querySelector(this.el.searchValue).disabled = false;
			}
		}

	};

	$(document).ready(function () {
		/**
		 * Main js for all site
		 */
		filter.init();
	});

	$(window).load(function () {

	});
}(jQuery));

function updateQueryStringParameter(uri, key, value) {
	var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
	var separator = uri.indexOf('?') !== -1 ? "&" : "?";
	if (uri.match(re)) {
		return uri.replace(re, '$1' + key + "=" + value + '$2');
	}
	else {
		return uri + separator + key + "=" + value;
	}
}

function removeURLParameter(url, parameter) {
	//prefer to use l.search if you have a location/link object
	var urlparts = url.split('?');
	if (urlparts.length >= 2) {

		var prefix = encodeURIComponent(parameter) + '=';
		var pars = urlparts[1].split(/[&;]/g);

		//reverse iteration as may be destructive
		for (var i = pars.length; i-- > 0;) {
			//idiom for string.startsWith
			if (pars[i].lastIndexOf(prefix, 0) !== -1) {
				pars.splice(i, 1);
			}
		}

		url = urlparts[0] + '?' + pars.join('&');
		return url;
	} else {
		return url;
	}
}