$(document).ready(function() {
    const calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        selectable: true,
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        dateClick: function(info) {
            // alert('clicked ' + info.dateStr);
        },
        select: function(info) {
            // alert('selected ' + info.startStr + ' to ' + info.endStr);
        },
        dayCellClassNames: function(arg) {
            if (arg.date.getDate() === new Date().getDate() &&
                arg.date.getMonth() === new Date().getMonth() &&
                arg.date.getFullYear() === new Date().getFullYear()) {
                return ['current-day'];
            }
        }
    });

    // Render the calendar initially
    calendar.render();

    $('#nav-calendar-tab').on('click', function() {
        setTimeout(function() {
            calendar.updateSize();
        }, 500);
    })
});