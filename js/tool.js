
class Tool {

  // randomize

  static randomize(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }

  // colorize

  colorize() { return '#' + (Math.random() * 0xFFFFFF << 0).toString(16); }

  // alertize

  alertize(message) { window.alert(message); }

  // logize

  logize(message) { console.log(message); }

  // countize

  countize() { for (let i = 0 ; i < 10000000; i++); }

  // waitize

  waitize(message, time) {

    console.log(message);

    setTimeout(

      function() { window.alert(message); }, // dialog
      time * 1000); // in s
  }
}

// instance

tool = new Tool;