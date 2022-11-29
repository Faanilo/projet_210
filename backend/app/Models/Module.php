<?php

namespace App\Models;
use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;
    protected $table ='modules';
    protected $fillable=[
        'name',
        'code',
        'coefficient',
        'hour',
        'semestre'
    ];
    public function marks() 
    {
       return $this->hasMany(Mark::class, 'module_id');
    }


    //Relationship with teacher
    public function teachers()
    {
        return $this->belongsToMany(Teacher::class);
    }

}
