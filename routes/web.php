<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GitHubWebhookController;
use App\Http\Controllers\UpdateTemperatureController;

Route::group(['middleware' => 'auth.basic'], function () {
    Route::get('/', DashboardController::class);

    Route::post('temperature', UpdateTemperatureController::class);
});

Route::post('/webhook/github', [GitHubWebhookController::class, 'gitRepoReceivedPush']);

Route::ohDearWebhooks('/oh-dear-webhooks');
