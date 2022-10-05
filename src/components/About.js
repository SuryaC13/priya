import React from "react";

const About = () => {
  return (
    <div name="about" id="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div id="abthead">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500" >About</p>
        </div>

        <p className="text-xl mt-5">
             <h2 className="text-blue-700">Course certification</h2>
             <p>Certified as frontend developer with React js</p>
             <h2 className="text-blue-700">Experience</h2>
             <p>I have 2 years and 4 month of Experience in Mphasis private limited, Bangalore (July 2019-Nov 2021).</p>
             <h2 className="text-blue-700">Education Qualification</h2>
             <p>I have Completed Bsc., Mathematics with 84.8% in Muthayammal college of arts and science, Periyar university (2016-2019).</p>
             <p>I have Completed HSC with 93.5% in Jayarani girl's higher secondary school(2015-2016).</p>                                                    
             <p>I have Completed SSLC with 95.4% in Jayarani girl's higher secondary school (2013-2014).</p>                
        </p>

      </div>
    </div>
  );
};

export default About;
