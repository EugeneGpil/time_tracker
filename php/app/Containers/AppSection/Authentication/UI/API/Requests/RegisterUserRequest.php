<?php

namespace App\Containers\AppSection\Authentication\UI\API\Requests;

use App\Containers\AppSection\User\Enums\Gender;
use App\Ship\Parents\Requests\Request as ParentRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class RegisterUserRequest extends ParentRequest
{
    protected array $access = [
        'permissions' => null,
        'roles' => null,
    ];

    protected array $decode = [];

    protected array $urlParameters = [];

    public function rules(): array
    {
        return [
            'name' => 'min:2|max:50',
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                Password::default(),
                'confirmed',
            ],
            'gender' => Rule::enum(Gender::class),
            'birth' => 'date',
            'verification_url' => [
                'url',
                Rule::requiredIf(static fn (): bool => config('appSection-authentication.require_email_verification')),
                Rule::in(config('appSection-authentication.allowed-verify-email-urls')),
            ],
        ];
    }

    public function authorize(): bool
    {
        return $this->hasAccess();
    }
}
