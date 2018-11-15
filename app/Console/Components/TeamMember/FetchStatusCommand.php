<?php

namespace App\Console\Components\TeamMember;

use App\Services\Slack\Slack;
use App\Services\Slack\Member;
use Illuminate\Console\Command;
use App\Events\TeamMember\UpdateStatus;

class FetchStatusCommand extends Command
{
    protected $signature = 'dashboard:fetch-team-member-status';

    protected $description = 'Determine team user statuses';

    protected $slackMembers = [
        'seb',
        'adriaan',
        'freek',
        'willem',
        'alex',
        'ruben',
        'brent',
        'jef',
        'wouter',
    ];

    public function handle(Slack $slack)
    {
        $slack
            ->getMembers($this->slackMembers)
            ->each(function (Member $member) {
                event(new UpdateStatus(strtolower($member->name), $member->statusEmoji));
            });
    }
}
