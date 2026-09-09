(function(){
  var nav=document.getElementById('nav');
  function onScroll(){ nav.classList.toggle('stuck', window.scrollY>60); }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e,i){
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