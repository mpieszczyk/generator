(function($) {

	// hide/show sidebar menu
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	});

	$("#goBack").click(function() {
		window.history.back();
	});

	// add "active" class in clicked menu element & show specific parts of form assigned to id
	$(".form-type").each(function() {
		$(this).on("click", function() {
			$(".form-type").removeClass("active");
			$(this).addClass("active");

			if ($("#cent").hasClass("active") || $("#navCent").hasClass("active")) {
				$("#salonData").addClass('d-none')
				$("#cCrew").removeClass('d-none')
				$("#cFax").removeClass('d-none')
			} else if ($("#salOwn").hasClass("active") || $("#navSalOwn").hasClass("active")) {
				$("#salonData").removeClass('d-none')
				$("#cCrew").addClass('d-none')
				$("#cFax").addClass('d-none')
			} else if ($("#salFr").hasClass("active") || $("#navSalFr").hasClass("active")) {
				$("#salonData").removeClass('d-none')
				$("#sFb").removeClass('d-none')
				$("#cCrew").addClass('d-none')
				$("#cFax").addClass('d-none')
			} else {
				$("#salonData").addClass('d-none')
				$("#sFb").addClass('d-none')
			}

		})

	})

	$("#formData").on("click", function(e) {
		e.preventDefault();

		var $fname = $('#fname').val()
		var $lname = $('#lname').val()
		var $mail = $('#mail').val()

		var $pos = $('#pos').val()
		var $crew = $('#crew').val()
		var $section = $('#section').val()
		var $mphone = $('#mphone').val()
		var $phone = $('#phone').val()
		var $fax = $('#fax').val()

		var $scity = $('#scity').val()

		var $saddr = $('#saddr').val()
		var $sphone = $('#sphone').val()
		var $sfax = $('#sfax').val()
		var $shours = $('#shours').val()

		var $spage = $('#spage').val()

		// +++++++++++++++++++++++++++++++++++

		if ($('#fname').val() !== "") {
			$('.person strong .fname').html($fname)
		} else {
			$('.person strong .fname').html()
		}

		if ($('#lname').val() !== "") {
			$('.person strong .lname').html($lname + '<br>')
		} else {
			$('.person strong .lname').html()
		}

		if ($('#mail').val() !== "") {
			$('.p-mail').attr("href", 'mailto:' + $mail).html($mail)
		} else {
			$('.p-mail').html()
		}

		if ($('#pos').val() !== "") {
			$('.p-data .pos').html($pos + '<br>')
		} else {
			$('.p-data .pos').html()
		}

		if ($('#crew').val() !== "") {
			$('.p-data .crew').html($crew + '<br>')
		} else {
			$('.p-data .crew').html()
		}

		if ($('#section').val() !== "") {
			$('.p-data .section').html($section + '<br>')
		} else {
			$('.p-data .section').html()
		}

		if ($('#mphone').val() !== "") {
			$('.p-data .mphone').html($mphone + '<br>')
		} else {
			$('.p-data .mphone').html()
		}

		if ($('#phone').val() !== "") {
			$('.p-data .phone').html($phone + '<br>')
		} else {
			$('.p-data .phone').html()
		}

		if ($('#fax').val() !== "") {
			$('.p-data .fax').html($fax + '<br><br>')
		} else {
			$('.p-data .fax').html()
		}

		if ($('#scity').val() !== "") {
			$('.kt-name').html("Salon Komputronik " + $scity)
		} else {
			$('.kt-name').html('Komputronik S.A. w restrukturyzacji')
		}

		if ($('#saddr').val() !== "") {
			$('.kt-adr .saddr').html($saddr)
		} else {
			$('.kt-adr .saddr').html("ul. Wołczyńska 37, 60-003 Poznań")
		}

		if ($('#sphone').val() !== "") {
			$('.kt-adr .sphone').html($sphone + '<br>')
		} else {
			$('.kt-adr .sphone').html()
		}

		if ($('#sfax').val() !== "") {
			$('.kt-adr .sfax').html($sfax + '<br>')
		} else {
			$('.kt-adr .sfax').html()
		}

		if ($('#shours').val() !== "") {
			$('.kt-adr .shours').html($shours + '<br>')
		} else {
			$('.kt-adr .shours').html()
		}

		if ($('#spage').val() !== "") {
			$('.kt-adr .spage').html($spage)
		} else {
			$('.kt-adr .spage').html()
		}

		if ($('#shours').val() !== "") {
			$('.kt-adr .shours').html($shours + '<br>')
		} else {
			$('.kt-adr .shours').html()
		}

		if ($('#spage').val() !== "") {
			$('.kt-adr .spage').html($spage)
		} else {
			$('.kt-adr .spage').html()
		}


		$("#dataModal").modal('show')

	})

	$("#modalClose").on("click", function() {
		$("#dataModal").modal('hide')
	})

})(jQuery);
