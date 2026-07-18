
document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.site-nav');
  if(toggle&&nav){toggle.addEventListener('click',function(){nav.classList.toggle('open')});}

  document.querySelectorAll('.feature-item > button').forEach(function(btn){
    btn.addEventListener('click',function(){btn.parentElement.classList.toggle('open')});
  });

  var banner=document.getElementById('cookie-banner');
  var reopen=document.getElementById('cookie-reopen');
  function showBanner(){if(banner){banner.classList.add('shown')}}
  function hideBanner(){if(banner){banner.classList.remove('shown')}}
  setTimeout(showBanner,600);
  document.getElementById('cookie-accept')?.addEventListener('click',hideBanner);
  document.getElementById('cookie-decline')?.addEventListener('click',hideBanner);
  reopen?.addEventListener('click',function(e){e.preventDefault();showBanner()});
});
