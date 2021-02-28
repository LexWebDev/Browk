import $ from 'jquery'
window.jQuery = $
window.$ = $
import select2 from 'select2'
require('../libs/hc-offcanvas-nav/js/hc-offcanvas-nav.js')


document.addEventListener('DOMContentLoaded', () => {

	$('ul.auth-tabs__caption').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.auth-tabs').find('div.auth-tabs__content').removeClass('active').eq($(this).index()).addClass('active')
	});

	$('.select').select2({
		placeholder: 'Your country',
		width: '100%',
		allowClear: true,
		minimumResultsForSearch: Infinity
	});

	$('#menu').hcOffcanvasNav({
		disableAt: 800,
		position: 'right',
		labelClose: 'Закрыть',
		labelBack: 'Назад'
	});

})
