<?php

namespace App\Console\Components\TeamMember;

use Illuminate\Console\Command;
use App\Services\Forecast\ForecastApi;
use App\Events\TeamMember\TasksFetched;

class FetchTasksCommand extends Command
{
    protected $signature = 'dashboard:fetch-tasks';

    protected $description = 'Fetch team members tasks from Forecast';

    public function handle(ForecastApi $forecast)
    {
        $this->info('Fetching tasks from Forecast...');

        $tasks = $forecast->getThisWeeksTasksFor(
            explode(',', config('services.forecast.people'))
        );

        event(new TasksFetched($tasks->toArray()));

        $this->info('All done!');
    }
}
