<?php

namespace App\Http\Controllers;

use App\Models\Mark;
use Illuminate\Http\Request;
use App\Models\Module;
use App\Models\Grade;
use Illuminate\Support\Facades\DB;
use App\Models\Student;

class MarkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $request ->validate([
            'score' =>'required'    , 
            'module' => 'required'     ,
            'name' => 'required'      ,
        ]);
        
        $module= Module::all()->where('code', $request->module)->first();
        $etudiant= Student::all()->where('name', $request->name)->first();
        if ($request -> score < 10) {
             Mark::create([
                'score'=>$request->score,   
                'module_id'=>$module["id"]      ,
                'student_id'=>$etudiant["id"]   ,
                'retake' => 1,
            ]);
            return response()->json(['etat' => 1]);
        }else{
            Mark::create([
                'score'=>$request->score,
                'semestre'=>$request->semestre  ,   
                'module_id'=>$module ["id"]      ,
                'student_id'=>$etudiant ["id"]   ,
                'retake' => 0,
            ]);
        };
       
        return response()->json(['etat' => 1]);


    }
    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Mark  $mark
     * @return \Illuminate\Http\Response
     */
    public function show(Mark $mark)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Mark  $mark
     * @return \Illuminate\Http\Response
     * @var string[]|false $mIds
     */
    public function update(Request $request, Mark $mark)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Mark  $mark
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mark $mark)
    {
        //
    }
    public function get_mark(Int $id)
    {
        $note = Mark::all()->where('student_id',$id);
        $notes = [];
        foreach ($note as $n) {
            $module= $n->module->name;
            $notes[] = [
                'mark'=>$n
            ];
        }
        return $notes;
        
    }

    public function get_avg($id)
    {
        $avg = DB::table ('marks')
            ->select(DB::raw('avg(score) as avg , student_id'))
            ->groupBy('student_id')
            ->where('student_id',$id)
            ->get();
        return $avg;
    }   

    public function get_all_avg(string $grade){
        $students = Student::all()->where('grade',$grade);
        $all_stud=[];
        
        foreach($students as $student){
            $all_stud[]=[
                'student'=>$student,
                'moyenne'=>$this->get_avg($student->id)
                ];
        }

        return $all_stud;
    }
}
