var cont_chats = document.getElementById("chats"); //Container for dialogs
var cont_msg = document.getElementById("messages"); //Container for messages

//Adding dialogs

var counter = 0;
for (var i = 0; i <= 9; i++) {
    counter++;
    var chat_btn = document.createElement("div");
    chat_btn.className = "chat-btn";
    chat_btn.setAttribute("id", "chat-" + counter);
    chat_btn.setAttribute("onClick", "getId(this)");
    chat_btn.innerHTML = "<div class=info>" +
        "<p class='name' id='chat-item-" + counter + "'>Doge - " + counter + "</p>" +
        "<p class='message'>Lorem...</p>" +
        "<div class='image'></div>" +
        "</div>";
    cont_chats.appendChild(chat_btn);
}

//Loading messages

function getId(elem) {
    pressed_btn = elem.id;
    switch (pressed_btn) {
        case "chat-1":
            changeHeader('chat-item-1');
            createMessages();
            break;
        case "chat-2":
            changeHeader('chat-item-2');
            createMessages();
            break;
        case "chat-3":
            changeHeader('chat-item-3');
            createMessages();
            break;
        case "chat-4":
            changeHeader('chat-item-4');
            createMessages();
            break;
        case "chat-5":
            changeHeader('chat-item-5');
            createMessages();
            break;
        case "chat-6":
            changeHeader('chat-item-6');
            createMessages();
            break;
        case "chat-7":
            changeHeader('chat-item-7');
            createMessages();
            break;
        case "chat-8":
            changeHeader('chat-item-8');
            createMessages();
            break;
        case "chat-9":
            changeHeader('chat-item-9');
            createMessages();
            break;
        case "chat-10":
            changeHeader('chat-item-10');
            createMessages();
            break;
    }

}

//Change the header according to the selected dialog

function changeHeader(value) {
    var name = document.getElementById(value).innerHTML;
    document.getElementById("chat_name").innerHTML = name;
}

//Clear history

function clearMessages() {
    while (cont_msg.firstChild) {
        cont_msg.removeChild(cont_msg.firstChild);
    }
}

//Generation of messages

function createMessages() {

    let string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    clearMessages();
    let msg_number = Math.floor((Math.random() * 9) + 2);
    for (let i = 0; i < msg_number; i++) {
        var point_rec = Math.floor(Math.random() * 300);
        output_rec = string.slice(0, point_rec);

        var point_sent = Math.floor(Math.random() * 300);
        output_sent = string.slice(0, point_sent);

        let rec_msg = document.createElement("div");
        rec_msg.className = "msg received";
        rec_msg.innerHTML = "<img src='Resources/doge.png'>" +
            "<p>" + output_rec + "</p>" +
            "<span class='timestamp'>" + "00:0" + i + "</span>"

        let sent_msg = document.createElement("div");
        sent_msg.className = "msg sended";
        sent_msg.innerHTML = "<img src='Resources/doge.png'>" +
            "<p>" + output_sent + "</p>" +
            "<i class='material-icons readStatus'>done_all</i>" +
            "<span class='timestamp'>" + "00:0" + i + "</span>"

        cont_msg.appendChild(rec_msg);
        cont_msg.appendChild(sent_msg);
    }
}


$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".overlay, .menuWrap").fadeIn(180);
        $(".menu").animate({
            opacity: '1',
            left: '0px'
        }, 180);
    });

    $(".settings").click(function () {
        $(".config").animate({
            opacity: '1',
            right: '0px'
        }, 180);
        $(".menuWrap").fadeOut(180);
        $(".menu").animate({
            opacity: '0',
            left: '-320px'
        }, 180);
    });

});

$(".overlay").click(function () {
    $(".overlay, .menuWrap").fadeOut(180);
    $(".menu").animate({
        opacity: '0',
        left: '-320px'
    }, 180);
    $(".config").animate({
        opacity: '0',
        right: '-200vw'
    }, 180);
});