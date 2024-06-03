const router = require ("express").Router();

const User = require('../models/taskModule')

router.post("/task",async(req,res) => {
  const newTask = new User({
    task :req.body.task,
    priority :req.body.priority,
    date :new Date(req.body.date)
  });
  try{
    const task = await newTask.save();
    res.status(201).json(task);
  }
  catch{
    res.status(500).json();
  }
});

router.get("/get-task",async(req,res)=>{
  try{
    const tasks = await User.find().sort({createdAt:-1})
    res.status(200).json(tasks)
  }catch(error){
    res.status(500).json({message:'server error'})
  }
})
router.delete("/delete-task/:id",async(req,res)=>{
  const {id} = req.params;
  User.findByIdAndDelete(id)
  .then((task)=>{
res.status(200).json({message:"task deleted"})
  })
  .catch((err)=>{
    res.status(500).json({message:'server error'})
  })
})
module.exports= router;
