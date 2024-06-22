import "./Home.css"
import { siteDetails,features,theme} from '../../data/data'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import Footer from "../../components/Footer/Footer"



function Home() {
  return (
    <div>
        <p className="site-title" style={{color:theme.text, backgroundColor:theme.primaryColor}}>{siteDetails.title}</p>
        <p className="site-description">{siteDetails.description}</p>
        {siteDetails.showFeatures ?
        <div className='features'>
            {
                features.map((feature, i)=>{
                    const {title,img} = feature

                    return(
                        <FeatureCard key={i} title={title} img={img}/>
                    )
                })
            }
        </div>
        : null}
       <Footer/>
    </div>
   
  )
}

export default Home