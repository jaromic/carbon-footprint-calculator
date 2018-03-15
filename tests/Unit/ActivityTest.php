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

    $this->signIn();

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
  function an_activity_has_an_emissions_level_in_grams()
  {
    $this->assertEquals(4500000,  $this->activity->emissions);
  }

  /** @test */
  function an_activity_can_belong_to_a_user()
  {
    $this->assertEquals(null, $this->activity->user_id);

    $this->activity->update(['user_id' => auth()->id()]);

    $this->assertEquals(auth()->id(), $this->activity->fresh()->user->id);
  }

  /** @test */
  function an_activity_has_optional_fields_for_amount_unit_rate_and_unit_rate()
  {
    $this->assertEquals(null, $this->activity->amount);
    $this->assertEquals(null, $this->activity->unit);
    $this->assertEquals(null, $this->activity->rate);
    $this->assertEquals(null, $this->activity->rate_unit);

    $this->activity->update([
      'amount' => 25000,
      'unit' => 'miles',
      'rate' => 25,
      'rate_unit' => 'mpg',
    ]);

    $updatedActivity = $this->activity->fresh();

    $this->assertEquals(25000, $updatedActivity->amount);
    $this->assertEquals('miles', $updatedActivity->unit);
    $this->assertEquals(25, $updatedActivity->rate);
    $this->assertEquals('mpg', $updatedActivity->rate_unit);    
  }
}
