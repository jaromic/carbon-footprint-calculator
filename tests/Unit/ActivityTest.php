<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ActivityTest extends TestCase
{
  use DatabaseMigrations;

  public function setUp()
  {
    parent::setUp();

    $this->activity = create('App\Activity', [
      'type' => '\App\ActivityTypes\Driving',
      'emissions' => 4500000
    ]);
  }

  /** @test */
  function an_activity_has_a_type()
  {
    $this->assertEquals('\App\ActivityTypes\Driving',  $this->activity->type);
  }

  /** @test */
  function an_activity_has_an_emissions_level_in_kg()
  {
    $this->assertEquals(4500000,  $this->activity->emissions);
  }  
}
