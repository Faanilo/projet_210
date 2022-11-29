<?php

namespace App\Http\Controllers;

use App\Models\Module;
use App\Models\Teacher;
use App\Models\Grade;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = [];
        $modules = Module::all();
        foreach($modules as $module){
           $data[] = [
            "module" => $module,
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
        $validatedData = $request->validate([
            'name' => 'nullable',
            'code' => 'nullable',
            'hour' => 'nullable',
            'coefficient' => 'nullable',
        ]);
        if ($request->teacher_id) 
        {
            $module = Module::create($request->except('teacher_id'));  
            $teacher = Teacher::findOrFail($request->teacher_id);
    
            $module_insert = $module->teachers()->save($teacher);
        }
        else
        {
            $module_insert = Module::create($request->all());
        }
        if ($module_insert){

            return response()->json([
                'success' => 'Module Added',
                'etat' => 1
            ]);
        }


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Module  $module
     * @return \Illuminate\Http\Response
     */
    public function show(Module $module)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Module  $module
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Module $module)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Module  $module
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $module = Module::find($id);    
        $module -> delete();
        return response () ->json([
            'status' =>200,
            'message' =>'Module supprimer',
        ]);
    }

    public function get_mods_bygrade(String $grade){
        
        $list_module = [];
        $modules = Module::all();
        $module_number = 0;
        foreach ($modules as $module)
        {
            $teacher = $module->teachers;
            $code = explode('_', $module->code)[1];
            switch ($grade) {
                case 'L1':
                    if ($code < 300) {
                        $list_module[] = 
                        [
                            'module' => $module,
                        ];
                        $module_number++;           
                    }
                    break;
                case 'L2':
                    if ($code < 500 && $code >= 300) {
                        $list_module[] = 
                        [
                            'module' => $module
                        ];  
                        $module_number++;                    
                    }
                    break;
                case 'L3':
                    if ($code < 700 && $code >= 500) {
                        $list_module[] = 
                        [
                            'module' => $module
                        ];  
                        $module_number++;                    
                    }
                    break;
                case 'M1':
                    if ($code < 900 && $code >= 700) {
                        $list_module[] = 
                        [
                            'module' => $module
                        ];  
                        $module_number++;                    
                    }
                    break;
                case 'M2':
                    if ($code < 1000 && $code >= 900) {
                        $list_module[] = 
                        [
                            'module' => $module
                        ];         
                        $module_number++;             
                    }
                    break;
            }
        }
        //return ['list'=>$list_module, 'module_number'=>$module_number];
        return $list_module;
    }
}
