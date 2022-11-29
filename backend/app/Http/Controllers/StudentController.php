<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Models\Grade;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $student =Student::all();


        return $student;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'nullable',
            'mail' => 'nullable',
            'age' => 'nullable',
            'phone' => 'nullable',
            'grade' => 'nullable',
            'groupe' => 'nullable',
            'gender' => 'nullable',
            'scho' => 'nullable',
        ]);
        $student = Student::create($request->all());
        $grade= Grade::create([
            'student_id' => $student->id            ,
            'name' => $request->grade               ,
            'group' => $request->groupe              ,
            'school_year' => $request->school_year  ,
       ]);

        return response()->json([
            'success' => 'Student Added',
            'etat' => 1
        ]);
        //return response()->json(['etat' => 1]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        /*$student = Student::find($id);    
        $student -> delete();
        return response () ->json([
            'status' =>200,
            'message' =>'Etudiant supprimer',
        ]);*/
        $student = Student::find($student->id);
        $grade = Grade::all()->where('student_id', $student->id);
        if (Grade::destroy($grade) && Student::destroy($student->id)) 
        {
            return response () ->json([
                'status' =>200,
                'message' =>'Etudiant supprimer',
            ]);   
        }
        else {
            return response () ->json([
                'status' =>200,
                'message' =>'Etudiant supprimer',
            ]);   
        }
      
    }
    
    public function get_student_by_grade_year(string $grade,int $year)
    {
        $students = Student::all()->where('grade',$grade)-> where('school_year',$year);
        $data= [];
        foreach($students as $student){
            $data []=[
                "student"=>$student
            ];
        }
        
       return $data;
    }
}
