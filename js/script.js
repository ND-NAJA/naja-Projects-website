
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

  var reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var heroMark=document.querySelector('.hero-mark');
  if(heroMark&&!reduceMotion){
    document.addEventListener('mousemove',function(e){
      var x=(e.clientX/window.innerWidth-0.5)*24;
      var y=(e.clientY/window.innerHeight-0.5)*24;
      heroMark.style.transform='translate('+x.toFixed(1)+'px,'+y.toFixed(1)+'px)';
    });
  }

  var intentToggle=document.querySelector('.intent-toggle');
  if(intentToggle){
    var answer=document.getElementById('intent-answer');
    var answers={
      coaching:'Start with a coaching call \u2014 we\u2019ll dig into where you\u2019re stuck and map next steps together. <a class="accent-link" href="coaching/">See how coaching works \u2192</a>',
      software:'Start with a Naja-ware demo \u2014 we\u2019ll walk through what we\u2019d build and how Naja Portal fits in. <a class="accent-link" href="tech/">See Naja-ware \u2192</a>'
    };
    intentToggle.querySelectorAll('button').forEach(function(btn){
      btn.addEventListener('click',function(){
        intentToggle.querySelectorAll('button').forEach(function(b){b.classList.remove('active')});
        btn.classList.add('active');
        if(answer){answer.innerHTML=answers[btn.dataset.intent]||'';}
      });
    });
  }

  var fanGrid=document.querySelector('.grid-fan');
  if(fanGrid){
    var fanCards=fanGrid.querySelectorAll('.card-venture');
    fanCards.forEach(function(card){
      card.addEventListener('mouseenter',function(){
        fanCards.forEach(function(c){
          if(c===card){c.style.flex='2.3 1 0%';c.classList.add('is-active')}
          else{c.style.flex='0.72 1 0%';c.classList.remove('is-active')}
        });
      });
      card.addEventListener('focus',function(){card.dispatchEvent(new Event('mouseenter'))});
    });
    fanGrid.addEventListener('mouseleave',function(){
      fanCards.forEach(function(c){c.style.flex='';c.classList.remove('is-active')});
    });
  }
});
