(function () {
	$(document).ready(function () {
		var count, rotateY, setValueFunc, value, zero;
		zero = 0;
		rotateY = 180;
		value = 0;
		count = 0;
		setValueFunc = function () {
			if (count % 2 === 0) {
				return $(".value_front").text(value);
			} else {
				return $(".value_back").text(value);
			}
		};
		$(".increment").on("mousedown", function () {
			count++;
			$(".container").css({
				"transform": "rotateY(" + (zero = zero + rotateY) + "deg)"
			});
			value++;
			setValueFunc();
		});
		return $(".decrement").on("mousedown", function () {
			count++;
			$(".container").css({
				"transform": "rotateY(" + (zero = zero - rotateY) + "deg)"
			});
			value--;
			setValueFunc();
		});
	});

}).call(this);