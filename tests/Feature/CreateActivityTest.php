<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CreateActivityTest extends TestCase
{
  use DatabaseMigrations;

  /** @test */
  function it_saves_detailed_activity_type_reference_based_on_sparse_user_input()
  {
    $this->post('/api/activities', [
      'cars' => [
        'emissions' => 9000000000,
        'distance' => 25000,
        'unit' => 'miles'
      ]
    ]);

    $this->assertDatabaseHas('activities', [
      'type' => '\App\ActivityTypes\Driving',
      'amount' => 25000,
      'unit' => 'miles',
      'rate' => 25,
      'rate_unit' => 'mpg'
    ]);
  }
}
