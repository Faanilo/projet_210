<?php

namespace App\Models;
use App\Models\Module;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;
    protected $table ='teachers';
    protected $fillable=[
        'name',
        'email',
        'diploma',
    ];
    // Relationship with modules
    public function modules() 
    {
       return $this->belongsToMany(Module::class);
    }
}
