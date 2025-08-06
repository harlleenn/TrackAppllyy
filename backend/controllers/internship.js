const db = require('../database/db')

exports.getInternship = async(req,res) => {
    try{
        const[rows] = await db.execute("Select * from Internships")
        console.log(rows)
        res.status(200).json({
            success: true,
            message : 'All internships have been fetched',
            data: rows
        })
    }catch (err){
        res.status(404).json({
            success: false,
            message: " There was an error fethcing all the Internships"
        })
         
    }
}
