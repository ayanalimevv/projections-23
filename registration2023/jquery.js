const delay = ms => new Promise(res => setTimeout(res, ms));

const URL = "https://script.google.com/macros/s/AKfycbw3HuePWAHR704zkdWtv4SpSRGePE8dM5t9YRtOgY8J0UNBtU-xhPnmtre7G14DIy7u/exec"

jQuery('#contactForm').on('submit',function(e){
e.preventDefault();
jQuery('#btnSubmit').html('Please wait...');
jQuery('#btnSubmit').attr('disabled',true);
jQuery.ajax({
  url: URL,
  type:'POST',
  data:jQuery('#contactForm').serialize(),
  success: async function(result){
    jQuery('#contactForm')[0].reset();
    jQuery('#btnSubmit').html('Thank You');
    jQuery('#btnSubmit').attr('disabled',false);
    await delay(5000)
    jQuery('#btnSubmit').html('Submit');
    //window.location.href='';
  }
});
});