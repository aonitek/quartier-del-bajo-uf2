(function(){
  var nav=document.getElementById('nav');
  function onScroll(){ nav.classList.toggle('stuck', window.scrollY>60); }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  var tabs=document.querySelectorAll('.tab');
  tabs.forEach(function(t){
    t.addEventListener('click',function(){
      document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});
      document.querySelectorAll('.panel').forEach(function(p){p.classList.remove('active')});
      t.classList.add('active');
      var el=document.getElementById(t.getAttribute('data-panel'));
      if(el){el.classList.add('active')}
    });
  });

  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          var d=Array.prototype.indexOf.call(e.target.parentNode.children,e.target);
          e.target.style.transitionDelay=(Math.min(d,4)*90)+'ms';
          e.target.classList.add('in'); io.unobserve(e.target);
        }
      });
    },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){io.observe(el)});
  } else { els.forEach(function(el){el.classList.add('in')}); }
})();