import React ,{useEffect}from "react";
import './home.css'

const Home = () => {

    

    return(
        <div style={{color:'#fff'}}>
            <video autoplay muted loop id="myVideo">
                <source src="space_vid.mp4" type="video/mp4"/>
            </video>
            <section className="screen-section">
                <div className="page-1">
                    <h1>Labelx</h1>
                    <p>LabelX is an advanced image labeling platform catering to diverse industries. With precision and efficiency, it offers tailored solutions for image training data needs. From object recognition to semantic segmentation, LabelX streamlines the process, enabling businesses to create accurate AI models while ensuring the highest standards of data quality and annotation.</p>
                </div>
            </section>
            <section className="screen-section">
                <div className="page-1">
                    <h1>Labelx</h1>
                    <p>LabelX is an advanced image labeling platform catering to diverse industries. With precision and efficiency, it offers tailored solutions for image training data needs. From object recognition to semantic segmentation, LabelX streamlines the process, enabling businesses to create accurate AI models while ensuring the highest standards of data quality and annotation.</p>
                </div>
            </section>
            <section className="screen-section">
                 <div className="page-1">
                    <h1>Labelx</h1>
                    <p>LabelX is an advanced image labeling platform catering to diverse industries. With precision and efficiency, it offers tailored solutions for image training data needs. From object recognition to semantic segmentation, LabelX streamlines the process, enabling businesses to create accurate AI models while ensuring the highest standards of data quality and annotation.</p>
                </div>
            </section>
        </div>
    )
}

export default Home