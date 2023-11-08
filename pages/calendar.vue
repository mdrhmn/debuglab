<script lang="ts" setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import multiMonthPlugin from '@fullcalendar/multimonth'
import listPlugin from '@fullcalendar/list'

// Initialise client
const client = useSupabaseClient();
const { data: coderData, error: coderError } = await client
    .from('coders')
    .select("full_name, date_of_birth")

Object.entries(coderData).forEach(([key, value], index) => {
    coderData[index].full_name = `🎂 ${coderData[index].full_name}'s Birthday`

    // Extract the year, month, and day from the original date string
    const [originalYear, month, day] = coderData[index].date_of_birth.split('-');
    coderData[index].date_of_birth = `${new Date().getFullYear()}-${month}-${day}`;
});

// Function to change the key within the array of objects
const changeKeyInArray = (arr: any[], oldKey: string, newKey: string): any[] => {
    return arr.map(obj => {
        if (Object.prototype.hasOwnProperty.call(obj, oldKey)) {
            obj[newKey] = obj[oldKey];
            delete obj[oldKey];
        }
        return obj;
    });
}

// Update the keys in the array
let newCoderData = changeKeyInArray(coderData, "full_name", "title");
newCoderData = changeKeyInArray(coderData, "date_of_birth", "date");

const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, multiMonthPlugin, listPlugin],
    initialView: 'dayGridMonth',

    headerToolbar: {
        start: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        center: 'title', // will normally be on the left. if RTL, will be on the right
        end: 'today prev,next'
    },

    footerToolbar: {
        center: 'prev,next'
    },

    selectable: true,
    selectMirror: true,
    weekNumbers: true,
    businessHours: true,
    eventColor: "#f97316",
    firstDay: 1,
    buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day',
        list: 'List'
    },

    events: newCoderData,
}
</script>

<template>
    <div>
        <!-- Card Section -->
        <div class="w-11/12 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <!-- Title -->
            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our <span
                        class="text-orange-500 dark:text-orange-600">Calendar</span></h2>
                <p class="mt-1 text-gray-600 dark:text-gray-400">Keeping track of our busy schedule.</p>
            </div>
            <!-- End Title -->

            <!-- Card -->
            <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                <FullCalendar :options="calendarOptions" />
            </div>
        </div>
    </div>
</template>