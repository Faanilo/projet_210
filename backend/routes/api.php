<?php

use App\Http\Controllers\MarkController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\TeacherController;



//get Moyenne
Route::get('student/average/{grade}/{id}',[MarkController::class, 'get_average_student']);
Route::get('student/avg/{grade}/{year}/{id}',[MarkController::class, 'get_average_point_of_all_students_by_grade']); 
    
//get mark student
Route::get('student/marks/{id}',[MarkController::class, 'get_mark']);
//get number module
Route::get('module/number/{grade}',[ModuleController::class,'get_number_mods']);

//route note
Route::apiResource('mark',MarkController::class);
//route teacher
Route::apiResource('teacher',TeacherController::class);
//MODS BY GRADE 
Route::get('module/list/{grade}',[ModuleController::class, 'get_mods_bygrade']);
//route etudiants
Route::apiResource('student',StudentController::class);
//etudiants by grade and year
Route::get('student/list/{grade}/{year}',[StudentController::class,'get_student_by_grade_year']);
//Route avg
Route::get('student/all/avg/{grade}',[MarkController::class,'get_all_avg']);
Route::get('student/avg/{id}',[MarkController::class,'get_avg']);
//Route Modules
Route::apiResource('module',ModuleController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
