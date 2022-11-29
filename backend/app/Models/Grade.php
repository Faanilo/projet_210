<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'school_year', 'group', 'end', 'quit', 'student_id'];

     // Relationship with student
     public function student() 
     {
         return $this->belongsTo(Student::class, 'student_id');
     }
}
