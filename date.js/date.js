function myDate(year, month, day, weekDay) {
  this.year = year;
  this.month = month;
  this.day = day;
  this.weekDay = weekDay;

  this.getFullYear = function () {
    if (!this.year) {
      return new Date().getFullYear();
    }
    return this.year;
  };

  this.getMonth = function () {
    if (!this.month) {
      return new Date().getMonth();
    }
    return this.month;
  };

  this.getDate = function () {
    if (!this.day) {
      return new Date().getDate();
    }
    return this.day;
  };

  this.setDate = function (day) {
    if (day <= 30) {
      this.day = day;
    } else {
      const month = Math.floor(day / 30);
      const mod = day % 30;
      this.day = mod;
      this.month += month;
      if (this.month > 12) {
        const year = Math.round(month / 12);
        this.year += year;
        this.month -= 12;
      }
    }
  };
  this.getWeekDay = function () {
    if (!this.weekDay) {
      return new Date().getDay();
    }
    return this.weekDay;
  };
}

const date = new myDate(2010, 12, 01);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getWeekDay());
date.setDate();

