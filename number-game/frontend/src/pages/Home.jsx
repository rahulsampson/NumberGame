
import Cards from '../components/Cards'
import Images from '../assets/images'


export default function Home() {
  const students = [
    {
      name: "Rahul Sampson",
      img: Images.Rahul,
      rollNo: "33401221057"
    },
    {
      name: "Tanisha Dutta",
      img: Images.Tanisha,
      rollNo: "33401221047"
    },
    {
      name:"Souryadeep Akhuli",
      img: Images.Souryadeep,
      rollNo: "33401221050"

    },

    {
      name:"Diya Neogi",
      img: Images.Diya,
      rollNo: "33401221067"
    }

  ]
  return (
    <>
    <div className='bg-slate-400 h-full grow'> 
      <div className='flex item-center justify-center gap-5 my-10 '>
      {
        students.map((student, index) => (
          <Cards name={student.name} description="We have made this Number gussing game using react" image={student.img} rollNo={student.rollNo}
           key={index}/>
        )
        )
      }
    </div>
    </div>
   
    </>
  )
}