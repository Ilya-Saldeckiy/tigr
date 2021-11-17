
function slowScroll(id) {
	let top = $(id).offset().top;
	$('html, body').animate({
		scrollTop: top
	}, {
		duration: 350,
		easing: "linear"
	});
}

$(document).ready(function(){
	$(":input").inputmask();

	//email mask
	$("#floatingInput3").inputmask({
		mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
		showMaskOnHover: false,
		showMaskOnFocus: true,
		greedy: false,
		onBeforePaste: function (pastedValue, opts) {
			pastedValue = pastedValue.toLowerCase();
			return pastedValue.replace("mailto:", "");
		},
		definitions: {
			'*': {
				validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
				casing: "lower"
			}
		}
	});

	$("#floatingInput2").inputmask({
		mask: '8-(999)-999-9999',
		placeholder: '8-(___)-___-____',
		showMaskOnHover: false,
		showMaskOnFocus: true,
		onBeforePaste: function (pastedValue, opts) {
			var processedValue = pastedValue;

//do something with it

			return processedValue;
		}
	});
	$("#floatingInput11").inputmask({
		mask: '8-(999)-999-9999',
		placeholder: '8-(___)-___-____',
		showMaskOnHover: false,
		showMaskOnFocus: true,
		onBeforePaste: function (pastedValue, opts) {
			var processedValue = pastedValue;

//do something with it

			return processedValue;
		}
	});
	$("#floatingInput6").inputmask({
		mask: '99.99.9999 - 99.99.9999',
		placeholder: '__.__.____ - __.__.____',
		showMaskOnHover: false,
		showMaskOnFocus: true,
		onBeforePaste: function (pastedValue, opts) {
			var processedValue = pastedValue;

//do something with it

			return processedValue;
		}
	});
// 	$("#floatingInput8").inputmask({
// 		mask: '*{1,20}',
// 		placeholder: '',
// 		showMaskOnHover: false,
// 		showMaskOnFocus: true,
// 		onBeforePaste: function (pastedValue, opts) {
// 			var processedValue = pastedValue;
//
// //do something with it
//
// 			return processedValue;
// 		}
// 	});
});




