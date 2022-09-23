<?php

namespace App\Console\Components\Trains;

use App\Services\Trains\Trains;
use Illuminate\Console\Command;
use App\Events\Trains\TrainsFetched;

class FetchTrainsInfoCommand extends Command
{
    protected $signature = 'dashboard:fetch-trains-info';

    protected $description = 'Fetch Trains Information';

    public function handle(Trains $trains)
    {
        $this->info('Fetching Trains information...');

        $liveboard = $trains->getLiveboard();

        event(new TrainsFetched($liveboard));

        $this->info('All done!');
    }
}
