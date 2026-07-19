
document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.site-nav');
  if(toggle&&nav){toggle.addEventListener('click',function(){nav.classList.toggle('open')});}

  document.querySelectorAll('.nav-dropdown').forEach(function(dd){
    var caret=dd.querySelector('.nav-caret');
    if(!caret)return;
    caret.addEventListener('click',function(e){
      e.preventDefault();e.stopPropagation();
      var isOpen=dd.classList.toggle('open');
      caret.setAttribute('aria-expanded',isOpen?'true':'false');
    });
  });
  document.addEventListener('click',function(e){
    document.querySelectorAll('.nav-dropdown.open').forEach(function(dd){
      if(!dd.contains(e.target))dd.classList.remove('open');
    });
  });

  document.querySelectorAll('.feature-item > button').forEach(function(btn){
    btn.addEventListener('click',function(){btn.parentElement.classList.toggle('open')});
  });

  var banner=document.getElementById('cookie-banner');
  var reopen=document.getElementById('cookie-reopen');
  var requiredMsg=document.getElementById('cookie-required-msg');
  var alreadyAccepted=sessionStorage.getItem('naja-cookies-accepted')==='1';
  function showBanner(){if(banner){banner.classList.add('shown')}}
  function hideBanner(){if(banner){banner.classList.remove('shown')}}
  if(!alreadyAccepted){
    document.body.classList.add('cookie-gate');
    showBanner();
  }
  document.getElementById('cookie-accept')?.addEventListener('click',function(){
    hideBanner();
    document.body.classList.remove('cookie-gate');
    if(requiredMsg){requiredMsg.style.display='none'}
    sessionStorage.setItem('naja-cookies-accepted','1');
  });
  document.getElementById('cookie-decline')?.addEventListener('click',function(){
    if(requiredMsg){requiredMsg.style.display='block'}
  });
  reopen?.addEventListener('click',function(e){e.preventDefault();showBanner()});

  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){entry.target.classList.add('in-view');io.unobserve(entry.target);}
      });
    },{threshold:0.15,rootMargin:'0px 0px -60px 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in-view');});
  }


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
      software:'Start with a Naja-ware demo \u2014 we\u2019ll walk through what we\u2019d build and how Portal fits in. <a class="accent-link" href="tech/">See Naja-ware \u2192</a>'
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
