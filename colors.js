const Link = {
  setColor: function (color) {
    const aList = document.querySelectorAll('a');
    let i = 0;
    while (i < aList.length) {
      aList[i].style.color = color;
      i = i + 1;
    }
  },
};
const Body = {
  setColor: function (color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  },
};
const Button = {
  setColor: function (color) {
    document.querySelector('#night_day').style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector('#night_day').style.backgroundColor = color;
  },
};
function nightDayHandler(self) {
  const target = document.querySelector('body');
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Link.setColor('powderblue');
    Button.setBackgroundColor('white');
    Button.setColor('black');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Link.setColor('black');
    Button.setBackgroundColor('black');
    Button.setColor('white');
  }
}
