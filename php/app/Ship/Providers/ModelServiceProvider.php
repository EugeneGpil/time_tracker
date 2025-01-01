<?php

namespace App\Ship\Providers;

use App\Ship\Parents\Models\Model;
use App\Ship\Parents\Providers\LaravelServiceProvider;

class ModelServiceProvider extends LaravelServiceProvider
{
    public function boot(): void
    {
        Model::preventLazyLoading();

        Model::preventSilentlyDiscardingAttributes();
    }
}
