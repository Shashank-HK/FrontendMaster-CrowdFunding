function toggleScroll(scroll){
    if (scroll===true){
        document.body.style.overflow = "auto";
    }
    else {
        document.body.style.overflow = "hidden";
    }
}

function bookMark(bookmarked){
    if (bookmarked){
        document.getElementById("bookmark-button-default").style.display = "none";
        document.getElementById("bookmark-button-selected").style.display = "inline";
    }
    else {
        document.getElementById("bookmark-button-selected").style.display = "none";
        document.getElementById("bookmark-button-default").style.display = "inline"; 
    }
}

function openModal(){
    toggleScroll(false);
    var modal = document.getElementById("pledge-modal");
    var content = document.getElementsByClassName("modal_content")[0];
    modal.style.display = "block";
    content.style.top = '';
   
}

function openSuccess(e, type){
    e.preventDefault();
    closeModal();
    toggleScroll(false);
    var success_modal = document.getElementById("success-modal");
    success_modal.style.display = "block";
    var amount = 0;
    var out_stock = false;
    if (type=="bamboo"){
        amount = Number(document.getElementById("bamboo-input").value);
        document.getElementById("bamboo-input").value = '';
        var quants = document.getElementsByClassName("bamboo_quant");
        for (i=0;i<quants.length;i++){
            let cur = Number(quants[i].innerText);
            cur = cur-1;
            if (cur==0){
                out_stock = true;
            }
            quants[i].innerText = ''+cur;
        }

        if(out_stock){
            var card = document.getElementById("bamboo-div")
            card.classList.add("out_stock_card");
            document.querySelector("#bamboo-div>.pledge_div>button").classList.add("out_stock_btn");
            var pledge = document.getElementById("bamboo-pledge-div");
            pledge.classList.add("out_stock_card_modal");
            pledge.style.pointerEvents = 'none';
            card.style.pointerEvents = 'none';
        }
    }
    else if(type=="black"){
        amount = Number(document.getElementById("black-input").value);
        document.getElementById("black-input").value = '';
        var quants = document.getElementsByClassName("black_quant")
        for (i=0;i<quants.length;i++){
            let cur = Number(quants[i].innerText);
            cur = cur-1;
            if (cur==0){
                out_stock = true;
            }
            quants[i].innerText = ''+cur;
        }

        if(out_stock){
            var card = document.getElementById("black-div")
            card.classList.add("out_stock_card");
            document.querySelector("#black-div>.pledge_div>button").classList.add("out_stock_btn");
            var pledge = document.getElementById("black-pledge-div");
            pledge.classList.add("out_stock_card_modal");
            pledge.style.pointerEvents = 'none';
            card.style.pointerEvents = 'none';
        }
    }
    if (!isNaN(amount)){
        var backers = document.getElementById("backers")
        var raised_amount = document.getElementById("raised-amount");
        var new_backers = parseInt(backers.innerText.replace(/,/g, ''))+1
        var new_amount =  parseInt(raised_amount.innerText.replace(/[,\$]/g, ''))+Number(amount)
        backers.innerText = new_backers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        raised_amount.innerText = new_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        var progress = parseInt(new_amount/1000)
        document.getElementById("progress-bar").style.width = progress+'%';
    }
}

function openMenu(){
    toggleScroll(false);
    document.getElementById("menu-modal").style.display = "block";
    document.getElementById("menu").style.display = "none";
}

function closeModal(){
    toggleScroll(true);
    var modal = document.getElementById("pledge-modal");
    if (document.querySelector("input:checked")!=null) {
        document.querySelector("input:checked").checked = false;
    }
    modal.style.display = "none";
}

function closeSuccess(){
    toggleScroll(true);
    var modal = document.getElementById("success-modal");
    modal.style.display = "none";
}

function closeMenu(){
    toggleScroll(true);
    document.getElementById("menu-modal").style.display = "none";
    document.getElementById("menu").style.display = "inline";
}

function selectPledge(ele){
    ele.firstElementChild.checked = true;
}

window.onclick = function(event) {
    
    var pledge_modal = document.getElementById("pledge-modal");
    var success_modal = document.getElementById("success-modal");
    var menu_modal = document.getElementById("menu-modal");

    if (event.target == pledge_modal) {
        toggleScroll(true); 
        if (document.querySelector("input:checked")!=null) {
            document.querySelector("input:checked").checked = false;
        }
        pledge_modal.style.display = "none";
    }
    else if (event.target == success_modal) {
        toggleScroll(true); 
        success_modal.style.display = "none";
    }
    else if (event.target == menu_modal) {
        toggleScroll(true); 
        menu_modal.style.display = "none";
  }

}