
// import { data } from "../../data/cars.json"

$(document).ready(function () {

    $.ajax({
        url: "data", success: function (data) {
            for (const key in data) {

                var continer = $(`<div class="continer col-lg-4 d-flex justify-content-center px-4 py-4"></div>`);
                var card = $(`<div class="card" style="width: 90%;"></div>`);
                var img = $(` <img src=car${key} class="card-img-top" alt="fig-car">`);
                var card_body = $(`<div class="card-body"></div>`);
                var card_titel = $(`<h5 class="card-title">${data[key]["Name"]}</h5>`);
                var card_text = $(`<p class="card-text">${data[key]["text"]}</p>`);
                var list_grup = $(`<ul class="list-group list-group-flush"></ul>`);
                var list_grup_itme = $(`<li class="list-group-item">${data[key]["company"]}</li>`);
                var card_buttm = $(`<div class="card-body"></div>`);
                var btn = $(`<a href="car_info${key}" class="btn btn-primary">more info</a>`)

                // append childs to the parents and set them to the page
                card_body.append(card_titel, card_text)
                list_grup.append(list_grup_itme)
                card_buttm.append(btn)
                card.append(img, card_body, list_grup, card_buttm)
                continer.append(card)
               
                // send the main wraper to the page
                $(".bodycards").append(continer);
                // ------------------------------------------
                // console.log(data[key]);
            }


        }
    });

})



