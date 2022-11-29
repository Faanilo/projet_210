<?php

namespace App\Models;
use App\Models\Module;
use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mark extends Model
{
    use HasFactory;
    protected $fillable = [  'score', 'module_id', 'student_id', 'retake'];

    // Relations with modules
    public function module() 
    {
       return $this->belongsTo(Module::class, 'module_id');
    }

    // Relation with students
    public function students() 
    {
       return $this->belongsTo(Student::class, 'student_id');
    }
}
