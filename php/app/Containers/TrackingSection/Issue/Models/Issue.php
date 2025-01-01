<?php

namespace App\Containers\TrackingSection\Issue\Models;

use App\Ship\Parents\Models\Model as ParentModel;

/**
 * @property string $code
 * @property string $title
 */
class Issue extends ParentModel
{
    public $incrementing = false;

    protected $primaryKey = 'code';

    protected $keyType = 'string';

    protected $fillable = [
        'code',
        'title',
    ];
}
