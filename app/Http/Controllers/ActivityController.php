<?php

namespace App\Http\Controllers;

use App\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
  public function store(Request $request)
  {
    if(array_key_exists('cars', $request->all())) {
      $activity = new Activity();

      $activity->type = '\App\ActivityTypes\Driving';
      $activity->emissions = request('cars')['emissions'];
      $activity->amount = request('cars')['distance'];
      $activity->unit = request('cars')['unit'];

      if ($activity->unit == 'miles') {
        $gallons = $activity->emissions / (9000000);

        $mpg = $activity->amount / $gallons;

        $activity->rate = $mpg;
        $activity->rate_unit = 'mpg';
      }

      $activity->save();

      return $activity;
    }
  }
}
