// ===== Scroll to Top ====
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});

//================================================

//======= Modal letiant 1 ===========

console.clear();

let body = document.body;
let modal = createModal(document.querySelector(".modal"));
let openButton = document.querySelectorAll(".open-button");

openButton.forEach(function (elem) {
    elem.addEventListener("click", function () {
        modal.open();
    })
});
//
// openButton.addEventListener("click", function () {
//     modal.open();
// });

function createModal(container) {

    let content = container.querySelector(".modal__content");
    let dialog = container.querySelector(".modal__dialog");
    let polygon = container.querySelector(".modal__polygon");
    let svg = container.querySelector(".modal__svg");

    let point1 = createPoint(45, 45);
    let point2 = createPoint(55, 45);
    let point3 = createPoint(55, 55);
    let point4 = createPoint(45, 55);

    let animation = new TimelineMax({
        onReverseComplete: onReverseComplete,
        onStart: onStart,
        paused: true
    })
        .to(point1, 0.3, {
            x: 15,
            y: 30,
            ease: Power4.easeIn
        }, 0)
        .to(point4, 0.3, {
            x: 5,
            y: 80,
            ease: Power2.easeIn
        }, "-=0.1")
        .to(point1, 0.3, {
            x: 0,
            y: 0,
            ease: Power3.easeIn
        })
        .to(point2, 0.3, {
            x: 100,
            y: 0,
            ease: Power2.easeIn
        }, "-=0.2")
        .to(point3, 0.3, {
            x: 100,
            y: 100,
            ease: Power2.easeIn
        })
        .to(point4, 0.3, {
            x: 0,
            y: 100,
            ease: Power2.easeIn
        }, "-=0.1")
        .to(container, 1, {
            autoAlpha: 1
        }, 0)
        .to(content, 1, {
            autoAlpha: 1
        })

    let modal = {
        animation: animation,
        container: container,
        content: content,
        dialog: dialog,
        isOpen: false,
        open: open,
        close: close
    };

    body.removeChild(container);

    function onClick() {

        if (modal.isOpen) {
            close();
        }
    }

    function onStart() {
        body.appendChild(container);
        container.addEventListener("click", onClick);
    }

    function onReverseComplete() {
        container.removeEventListener("click", onClick);
        body.removeChild(container);
    }

    function open() {
        modal.isOpen = true;
        animation.play().timeScale(2);
    }

    function close() {
        modal.isOpen = false;
        animation.reverse().timeScale(2.5);
    }

    function createPoint(x, y) {
        let point = polygon.points.appendItem(svg.createSVGPoint());
        point.x = x || 0;
        point.y = y || 0;
        return point;
    }

    return modal;
}


//=============== Modal Sec VARIANT ========
$('.button').click(function () {
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
})

$('#modal__close').click(function () {
    $('#modal-container').addClass('out');
    $('body').removeClass('modal-active');
});


//==========test for form


// function sendMail() {
//
//     let link = "mailto:" + formData["email"]
//         + "&subject=" + escape("Hire us")
//         + "&body=" + escape(formData["message"]);
//
// }
