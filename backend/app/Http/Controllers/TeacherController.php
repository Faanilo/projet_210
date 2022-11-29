<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Models\Module;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = [];
        $teachers = Teacher::all();
        foreach($teachers as $teacher){
            $modules = $teacher->modules;
           $data[] = [
            "teacher" => $teacher,
           ];
        }
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' =>'required'      ,
            'email' => 'required'    ,
            'diploma'=>'required'    ,
            'module_id' => 'required'
        ]
        );

        $teacher = Teacher::create($request->except('module_id'));  
        $module = Module::findOrFail($request->module_id);

        if($teacher->modules()->save($module))
        {
            return response()->json([
                'success' => 'Teachers Added',
                'etat' => 1
            ]);
        };

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function show(Teacher $teacher)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Teacher $teacher)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $teacher = Teacher::find($id);    
        $teacher -> delete();
        return response () ->json([
            'status' =>200,
            'message' =>'Module supprimer',
        ]);
    }

}
