<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
  protected $fillable = ['user_id', 'emissions'];

  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
