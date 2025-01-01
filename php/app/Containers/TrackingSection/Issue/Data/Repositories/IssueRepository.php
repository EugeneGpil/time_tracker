<?php

namespace App\Containers\TrackingSection\Issue\Data\Repositories;

use App\Containers\TrackingSection\Issue\Models\Issue;
use App\Ship\Parents\Repositories\Repository as ParentRepository;

/**
 * @template TModel of Issue
 *
 * @extends ParentRepository<TModel>
 */
class IssueRepository extends ParentRepository
{
    protected $fieldSearchable = [
        // 'id' => '=',
    ];
}
