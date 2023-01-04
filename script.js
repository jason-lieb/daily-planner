$(function () {
  init();

  function init() {
    // Add Background Colors to Time Blocks
    colorTimeBlocks();

    // Add Date to top of Calendar
    $('#currentDay').text(dayjs(new Date()).format('dddd[,] MMMM D[,] YYYY'))
  }

  function colorTimeBlocks() {
    let timeBlocks = $('.time-block');
    $.each(timeBlocks, (i) => {
      let time = $(timeBlocks[i]).attr('id').split('-')[1];
      $(timeBlocks[i]).addClass(checkTime(time))
    })
  }

  function checkTime(time) {
    let current = dayjs().hour();
    if (time < current) {
      return 'past'
    } else if (time > current) {
      return 'future'
    } else {
      return 'present'
    }
  }


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
