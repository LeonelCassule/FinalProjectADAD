const UsersModel = require("../models/users");


const usersController = {

    create: async(req, res)=> {
        try{
            const users = {
                name: req.body.name,
                gender: req.body.gender,
                age: req.body.age,
                occupation: req.body.occupation,
                               
            }
                       
            //const response = await UsersModel.create(events);
            const response = await UsersModel.create(users);
            res.status(201).json({response, msg: "Utilizador criada com sucesso"});
            
            
        } catch(error){
            console.log(error)
        }
    },

    getAll: async(req, res) =>{
        try{
           
           const users = await UsersModel.find().limit(7);

           res.json(users);

        }catch(error){
            console.log(error);
        }
    },
    get: async (req, res)=>{
        try{
            const id = req.params.id;
            const users = await UsersModel.findById(id);

            if(!users){
                res.status(404).json({msg:"Usuario não encontrado!"});
                return;
            }

            res.json(users);

        } catch(error) { 
            console.log(error)
        }
    },
    delete: async(req,res)=>{
        try{
            const id = req.params.id;
            const users = await UsersModel.findById(id);

            if(!users){
                res.status(404).json({msg:"Usuario não encontrado!"});
                return;
            }

            const deleteUsers = await UsersModel.findByIdAndDelete(id);
            
            res
            .status(200)
            .json({deleteUsers, msg: "Usuario excluido com sucesso!"});

        }catch(error){
            console.log(error)
        }
    },

   update: async(req, res)=>{
    const id = req.params.id;

   const users = {
                name: req.body.name,
                gender: req.body.gender,
                age: req.body.age,
                occupation: req.body.occupation,
                               
            }

    const updateUsers = await UsersModel.findByIdAndUpdate(id,users);

     if(!updateUsers){
                res.status(404).json({msg:"Usuario não encontrado!"});
                return;
            }
        res.status(200).json({users, msg: "Usuario atualizado com sucesso!"});
   } 


};

module.exports = usersController;
