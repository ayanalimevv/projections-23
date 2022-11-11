const delay = ms => new Promise(res => setTimeout(res, ms));
const URL = "https://script.google.com/macros/s/AKfycbwNuls8YyoPgRDoSfU0p7LLK_lCs8uyK7YbKjik2tL5Yb-Irv_1bJtt1-g2d-cO5gCF/exec"
jQuery('#contactForm').on('submit',function(e){
e.preventDefault();
jQuery('#btnSubmit').html('Please wait...');
jQuery('#btnSubmit').attr('disabled',true);
$.ajax({
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