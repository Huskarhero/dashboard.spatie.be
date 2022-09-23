<?php

namespace App\Console\Components\Calendar;

use App\Events\Calendar\EventsFetched;
use Carbon\Carbon;
use DateTime;
use Illuminate\Console\Command;
use Spatie\GoogleCalendar\Event;

class FetchCalendarEvents extends Command
{
    protected $signature = 'dashboard:fetch-calendar-events';

    protected $description = 'Fetch events from a Google Calendar';

    public function handle()
    {
        $events = collect(Event::get())
            ->map(function (Event $event) {
                $sortDate = $event->getSortDate();

                return [
                    'name' => $event->name,
                    'date' => Carbon::createFromFormat('Y-m-d H:i:s', $sortDate)->format(DateTime::ATOM),
                ];
            })
            ->unique('name')
            ->toArray();

        event(new EventsFetched($events));
    }
}
