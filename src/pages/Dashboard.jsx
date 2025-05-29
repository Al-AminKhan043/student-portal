
import Card from "../components/Card";






export default function Dashboard({student, onRemove, onUpdate}) {
    

    
   const hasStudents = student.length > 0;

    return (
        <>  <div className={`flex flex-col  items-center ${hasStudents ? 'py-42' : 'min-h-screen'}`}>
             <h2 className="text-xl font-bold text-amber-700 ">Students Dashboard</h2>
            <p className="text-lg font-semibold text-amber-700">Browse all the students that we have</p>
           </div>
           <div className="flex flex-wrap gap-4 justify-center py-16 mb-30">
            {student.map((s)=>  <Card key={s.id} student={s}  onRemove={ ()=> onRemove(s.id)} onUpdate={ onUpdate }></Card>  )}
           </div>

            

        </>
    )
}