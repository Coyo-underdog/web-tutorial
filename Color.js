
var Links={
  SetColor:function(color){
    var alist = document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
      alist[i].style.color=color;
      i=i+1;
  }
 }
}

var Body={
  SetColor:function(color){
    document.querySelector('body').style.color=color;
  },
  SetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}


function nightDayHandler(self){

if(self.value === 'night'){
Body.SetBackgroundColor('black');
Body.SetColor('white');
self.value = 'day';
Links.SetColor('powderblue');
} else {
  Body.SetBackgroundColor('white');
  Body.SetColor('black');
  self.value = 'night';
  Links.SetColor('blue');
 }
}
