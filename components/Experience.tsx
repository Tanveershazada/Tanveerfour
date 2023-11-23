import Title from './Title'
import {MdWork} from "react-icons/md"
import {SiFiverr, SiFreelancer, SiReactivex, SiToptal} from "react-icons/si"
import ExperieceCard from './ExperieceCard'
const Experience = () => {
  return (
    <div className='wrapper'>
        <Title text='Experience' icon={<MdWork/>}/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <ExperieceCard
            title="ReactBD.com"
            subTitle="Web Developer 2019 - present"
            icon={<SiReactivex/>}
            />
           
           <ExperieceCard
            title="Toptal"
            subTitle="Frontend Developer 2020 - present"
            icon={<SiToptal/>}
            />

            <ExperieceCard
            title="Freelancer"
            subTitle="Frontend Developer 2021 - present"
            icon={<SiFreelancer/>}
            />

            <ExperieceCard
            title="Fiverr"
            subTitle="Frontend Developer 2019 - present"
            icon={<SiFiverr/>}
            />

        </div>
    </div>
  )
}

export default Experience