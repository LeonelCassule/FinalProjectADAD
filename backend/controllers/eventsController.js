const {Events: EventsModel} = require("../models/events");

const eventsController = {

    create: async(req, res)=> {
        try{
            const events = {
                
                TituloPortugal: req.body.TituloPortugal,
                TituloOriginal: req.body.TituloOriginal,
                Licenciador: req.body.Licenciador,
                NumeroRegisto: req.body.NumeroRegisto,
                DataAutenticacao: req.body.DataAutenticacao,
                Tipo:req. body.Tipo,
                Classificacao: req.body.Classificacao,
                Distribuidor: req.body.Distribuidor,
            
                 
            };
            
            const response = await EventsModel.create(events);
            res.status(201).json({response, msg:"Evento criado com sucesso!"});

        } catch(error){
            console.log(error)
        }
    },

    getAll: async(req, res) =>{
        try{
           //Paginacao
           const page = req.query.p || 0;
           const eventsPerPage = 10;
           const events = await EventsModel.find()
           .skip(page*eventsPerPage)
           .limit(eventsPerPage);

            // const events = await EventsModel.find()

           res.json(events);
        }catch(error){
            console.log(error);
        }
    },
    get: async (req, res)=>{
        try{
            const id = req.params.id;
            const events = await EventsModel.findById(id);

            if(!events){
                res.status(404).json({msg:"Evento não encontrado!"});
                return;
            }

            res.json(events);

        } catch(error) { 
            console.log(error)
        }
    },
    delete: async(req,res)=>{
        try{
            const id = req.params.id;
            const events = await EventsModel.findById(id);

            if(!events){
                res.status(404).json({msg:"Evento não encontrado!"});
                return;
            }

            const deleteEvents= await EventsModel.findByIdAndDelete(id);
            
            res
            .status(200)
            .json({deleteEvents, msg: "Evento excluido com sucesso!"});

        }catch(error){
            console.log(error)
        }
    },

   update: async(req, res)=>{
    const id = req.params.id;

    const events = {
        TituloPortugal: req.body.TituloPortugal,
        TituloOriginal: req.body.TituloOriginal,
        Licenciador: req.body.Licenciador,
        NumeroRegisto: req.body.NumeroRegisto,
        DataAutenticacao:req.body.DataAutenticacao,
        Tipo:req.body.Tipo,
        Classificacao:req.body.Classificacao,
        Distribuidor:req.body.Distribuidor
            
    };

    const updateEvents = await EventsModel.findByIdAndUpdate(id,events);

     if(!events){
                res.status(404).json({msg:"Evento não encontrado!"});
                return;
            }
        res.status(200).json({events, msg: "Evento atualizado com sucesso!"});
   } 


};

module.exports = eventsController;