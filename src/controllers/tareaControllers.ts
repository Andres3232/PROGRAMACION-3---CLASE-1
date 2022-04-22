
import { Request, Response, NextFunction } from 'express';
import {Tarea} from '../models/tareaModels'

let tareas:Tarea[] = [

    {id:1, nombre: 'uno'},
    {id:2, nombre: 'dos'},
    {id:3, nombre: 'tres'},
]

const getAllTareas = (req: Request, res: Response,)=> {
    
    try {

         res.status(200).json({tareas});
        
    } catch (error) {
        console.log(error);
    };

};
const getTareaForId =async (req: Request, res: Response)=> {
    
    try {

        const { id } = req.params;

        if (!id) {
            res.status(400).json({message: 'se debe ingresar un id'})
        }

        const tarea = tareas.find(tarea => tarea.id === Number(id))

        if (!tarea) {
            res.status(400).json({message: 'La tarea no esta existe'})
            
        }

         res.status(200).json({tarea});
        
    } catch (error) {
        console.log(error);
    }

};

const postTarea =async (req: Request, res: Response)=> {
    
    try {

       const nuevaTarea =  req.body as Tarea;

       if (!nuevaTarea?.nombre) {
        res.status(400).json({message: 'Debe colocar un nombre a la tarea'})
           
       }

       nuevaTarea.id = tareas[tareas.length - 1].id + 1

       tareas = [...tareas,nuevaTarea]

       res.status(200).json({message:'tarea creada con exito',nuevaTarea});

        
    } catch (error) {
        console.log(error);
    }

};

const putTarea =async (req: Request, res: Response)=> {
    
    try {

        const { id } = req.params;

        if (!id) {
            res.status(400).json({message: 'se debe ingresar un id'})
        }

        let tareaActualizar:any = tareas.find(tarea => tarea.id === Number(id))

        if (!tareaActualizar) {
            res.status(400).json({message: 'La tarea no esta existe'})
            
        }

        tareaActualizar = {
            
            id: tareaActualizar.id, 
            ...req.body
        };

        if (!tareaActualizar?.nombre) {
            res.status(400).json({message: 'Debe colocar un nombre a la tarea'})
               
           }

        let nuevasTareas = tareas.map(tarea =>{
            
            if(tarea.id === tareaActualizar.id){
                return tarea = {...tareaActualizar}
            }
            return tarea
            
        })

        res.status(200).json({nuevasTareas});
        
    } catch (error) {
        console.log(error);
    }

};

const deleteTarea =async (req: Request, res: Response)=> {
    
    try {

        const { id } = req.params;

        if (!id) {
            res.status(400).json({message: 'se debe ingresar un id'})
        }

        const tarea = tareas.find(tarea => tarea.id === Number(id))

        if (!tarea) {
            res.status(400).json({message: 'La tarea no esta existe'})
            
        }

        let tareasFinales = tareas.filter(tarea => tarea.id != Number(id))
        
        tareas = tareasFinales

         res.status(200).json({tareasFinales});
        
    } catch (error) {
        console.log(error);
    }

};


export {getAllTareas,getTareaForId,postTarea,putTarea,deleteTarea};