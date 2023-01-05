$(function () {
  init();

  // Event listener for saving content
  $('.saveBtn').on('click', saveToStorage);

  function init() {
    // Add background colors to time blocks
    colorTimeBlocks();

    // Load saved content
    readStorage();

    // Add date to top of calendar
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

  function readStorage() {
    let timeBlocks = $('.time-block');
    $.each(timeBlocks, (i) => {
      let id = $(timeBlocks[i]).attr('id');
      let storedVal = localStorage.getItem(id);
      if (storedVal !== null) {
        let timeSlot = $(timeBlocks[i]);
        let textArea = $(timeSlot.children()[1]);
        textArea.val(storedVal);
      };
    })
  }

  function saveToStorage(event) {
    let button = $(event.target);
    if (button.parent().attr('id') === undefined) button = button.parent();
    // Grab id from parent div
    let id = button.parent().attr('id');
    // Grab text from textarea
    let text = $(button.siblings()[1]).val();
    // Save text to local storage
    localStorage.setItem(id, text);
  }
});
