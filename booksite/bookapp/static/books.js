function decrementValue(inputId)
{
    var value = parseInt(document.getElementById(inputId).value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById(inputId).value = value;
    }

}
function incrementValue(inputId)
{
    var value = parseInt(document.getElementById(inputId).value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById(inputId).value = value;
    }
}
function test(a){
if (document.getElementById(a).checked == true){
    document.getElementById("test"+a).style.background = " #e6ffe6";
}
else{
    document.getElementById("test"+a).style.background = "white";
}
}


 var openmodal = document.querySelectorAll('.modal-open')
    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener('click', function(event){

      debugger;
      var arr = []
      var a = $('input:checked');
      for (let i = 0; i < a.length; i++) {
            var l = {}

        l['name'] = a[i].value
        l['quantity'] = document.getElementById(a[i].value).value
        arr.push(l)
        };
        str = "";
        for (let i = 0; i < arr.length; i++) {
        if (str == ""){
            str = arr[i].name.concat(" Quantity ",arr[i].quantity);
            }
        else{
            str = str + arr[i].name.concat(" Quantity ",arr[i].quantity);
            }
        }
        document.getElementById('order_details').value =str;
    	event.preventDefault()
    	toggleModal()
      })
    }

    const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', toggleModal)

    var closemodal = document.querySelectorAll('.modal-close')
    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener('click', toggleModal)
    }

    document.onkeydown = function(evt) {
      evt = evt || window.event
      var isEscape = false
      if ("key" in evt) {
    	isEscape = (evt.key === "Escape" || evt.key === "Esc")
      } else {
    	isEscape = (evt.keyCode === 27)
      }
      if (isEscape && document.body.classList.contains('modal-active')) {
    	toggleModal()
      }
    };


    function toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    }

function myFunction(){
var csrf_token;
debugger;
$name =  document.getElementById("username").value;
$address =  document.getElementById("address").value
$phone =  document.getElementById("phone").value
$order_details =  document.getElementById("order_details").value

data = {name: $name, address: $address,phone:$phone,order_details:$order_details}
   $.ajax({
    url: "http://127.0.0.1:8000/save/",
    type: 'post',
    data:data,
    headers: {
            'X-CSRFToken': csrf_token
       },
    success: function(){
      $(this).addClass("done");
    }
});

}

