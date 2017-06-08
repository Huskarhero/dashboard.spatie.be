<?php

namespace App\Http\Controllers;

use Artisan;
use Illuminate\Routing\Controller;

class GitHubWebhookController extends Controller
{
    public function gitRepoReceivedPush()
    {
        abort_unless($this->requestSignatureIsValid(), 403);

        Artisan::call('dashboard:fetch-tasks');

        echo 'ok';
    }

    protected function requestSignatureIsValid(): bool
    {
        $gitHubSignature = request()->header('X-Hub-Signature');

        var_dump(compact('gitHubSignature'));

        [$usedAlgorithm, $gitHubHash] = explode('=', $gitHubSignature, 2);

        $payload = file_get_contents('php://input');

        var_dump(compact('payload'));

        $calculatedHash = hash_hmac($usedAlgorithm, $payload, config('services.github.hook_secret'));

        var_dump(compact('gitHubHash', 'calculatedHash'));

        return $calculatedHash === $gitHubHash;
    }
}
