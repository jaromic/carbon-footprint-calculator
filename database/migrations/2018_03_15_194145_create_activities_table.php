<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->increments('id');

            $table->string('type')->index();
            $table->biginteger('emissions')->index();

            $table->unsignedInteger('user_id')->nullable()->index();

            $table->integer('amount')->nullable()->index();
            $table->string('unit')->nullable();
            $table->decimal('rate')->nullable();
            $table->string('rate_unit')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activities');
    }
}
