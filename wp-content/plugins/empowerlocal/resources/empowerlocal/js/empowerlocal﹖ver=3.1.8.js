// Load meter on 
function emp_loaderon(){
    document.querySelector('#empl-overlay').style.display = 'block';
}

// Load meter off 
function emp_loaderoff(){
    document.querySelector('#empl-overlay').style.display = 'none';
}

// Utility cookie lookup function
function emp_getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

// Utility toggle class
function emp_toggleClass(element, toggleClass){
   var currentClass = element.className;
   var newClass;
   if(currentClass.split(" ").indexOf(toggleClass) > -1){ //has class
      newClass = currentClass.replace(new RegExp('\\b'+toggleClass+'\\b','g'),"");
   }else{
      newClass = currentClass + " " + toggleClass;
   }
   element.className = newClass.trim();
}

// Show alert modal
function emp_callalert(alert, message){
    
    var $emp_modal = document.getElementById('empl-modal');
    var $emp_modalheader = document.getElementsByClassName('empl-modal-body')[0].innerHTML = message;
    var $emp_modalbody = document.getElementsByClassName('empl-modal-header-h2')[0].innerHTML = alert;
    
    $emp_modal.style.display = "block";
    document.getElementById('empl-modal-overlay').style.display = 'block';
}

// Remove alert
function emp_removeAlert(){
    
    document.getElementById('empl-modal-overlay').style.display = 'none';
    document.getElementById('empl-modal').style.display = 'none';
}

function emp_hide_elementid(i) {
    document.getElementById(i).style.display='none';
}

function emp_call_job_click(type, uid, amt){
    // Send create user
    jQuery.ajax({
        url : empowerlocal_ajax.ajax_url,
        type : 'post',
        data : {
            action : 'empowerlocal_job_click_track',
            uid: uid,
            type: type,
            amt: amt,
        },
        success : function( response ) {
            console.log(response);
            return true;
        }
    });
}

function emp_call_deal_click(type, uid, amt){
    // Send create user
    jQuery.ajax({
        url : empowerlocal_ajax.ajax_url,
        type : 'post',
        data : {
            action : 'empowerlocal_deal_click_track',
            uid: uid,
            type: type,
            amt: amt,
        },
        success : function( response ) {
           console.log(response);
            return true;
        }
    });
}