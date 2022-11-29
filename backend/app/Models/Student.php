<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $table ='students';
    protected $fillable=[
        'name',
        'mail',
        'age',
        'phone',
        'grade',
        'groupe',
        'gender',
        'school_year',
    ];
    

    // Relation marks
    public function marks() 
    {
       return $this->hasMany(Mark::class, 'student_id');
    }
}
