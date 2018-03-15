<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$types = [
  '\App\ActivityTypes\Driving',
  '\App\ActivityTypes\Electricity',
  '\App\ActivityTypes\Flying',
  '\App\ActivityTypes\Waste'
];

$factory->define(App\Activity::class, function (Faker\Generator $faker) {
  return [
    'type' => $faker->words,
  ];
});