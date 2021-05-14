import logo from './assets/ajarlogo.png';
import mainbanner from './assets/mainbanner.jpeg';
import sampleone from './assets/sampleone.jpg';
import sampletwo from './assets/sampletwo.jpg';
import {CollapseComponent} from './components/collapse';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <meta name="viewport" content="width-device-width, initial-scale=1"></meta>
      <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
      </header>
      <body>
        <div >
          <div className="topnav">
            <div className="topnavlogo">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="topnavbutton">
              <a class="active" href="#home">Home</a>
              <a class="active" href="#about">About</a>
              <a class="active" href="#news">Detail</a>
              <a class="active" href="#contact">Contact</a>
              
            </div>

            
          </div>
   
          {/* <div className="banner" style={{ backgroundImage: `url(${mainbanner})` }}>
            <h2>A Leading NGO in Education & Volunteerism</h2>
            <p>You & Me Can Create a Brighter Future</p>
          </div> */}

          <div id="about" className="App-logo-center-container">
           
              <img src={logo} className="App-logo-center" alt="logo" />
              <h2>Educate . Inspire . Empower</h2>
              <p>A Free Tuition Project for Underprivileged Children</p>
          </div>

          <div class="blankDiv"/>
          <div class="outerDiv">
            <article class="articleInfo">
              <h2>WHAT is Ajar-Ajar Malaysia?</h2>
              <p>
              Ajar-Ajar Malaysia is a humanitarian based initiative committed to educate, inspire and empower scholars from poor and underserved communities. We provide free education and social empowerment programmes to scholars of underserved multiracial communities.

                
              </p>

              <p>
              This service project name “Ajar- ajar” meaning that while the teacher (mengajar) the kids, they are at the same time (belajar) . What do they learn? They learn how to deliver the knowledge to the kids, learn how to be patience, learn how to manage time, learn to share love and etc….

              </p>

              <p>
                
                We focus not only the academic wise, but as well as behavioral and character education. As the children here come from poor family, single parent family, some even are under relatives supervision.
              </p>

              <p>
              Proper education will bring fortune for the kids future, therefore a better and more developed future of Malaysia. We hope more undergraduates and young people can join us together in this project. Just spend only 3 hours, we can create miracles. Let us share our love out together!!!
              </p>

            </article>
            <div class="articleImg">
              <img  src={sampleone} alt="logo" />
              <img  src={sampletwo}  alt="logo" />
            </div>		
            
          </div>
          <div class="blankDiv2"/>
          <div id= "news" class="outerDiv">
            <div class="leftDiv2">
              <h1>OUR INVOLVEMENT</h1>
              <p>
              Ajar-Ajar Malaysia have serve the nation with various programmes as below:
              </p>
              
              <p>
              <i class="fa fa-university" aria-hidden="true"></i> Education Empowerment Programmes <span class="spanText">– Free weekly tuition Project</span> 
              </p>
              <p>
              <i class="fa fa-dot-circle-o" aria-hidden="true"></i> Character Education Initiative (CEI) <span class="spanText">– Developing positive mindset and attitude</span> 
              </p>
              <p>
              <i class="fa fa-rocket" aria-hidden="true"></i> Youth Leadership Training Workshop <span class="spanText">– A self-development programme where the youth gain confidence and are trained to strive for excellence through hands-on experience.</span>
              </p>
              <p>
              <i class="fa fa-users" aria-hidden="true"></i> Social Engagement <span class="spanText">– Community services and cultural exchange give a platform for volunteer to explore their potential.</span>
              </p>
              

            </div>
            <div class="rightDiv2">
              <h1>OUR VALUES</h1>
              <CollapseComponent />
             
            </div>		
            
          </div>
          <div class="blankDiv3"/>
          <div id= "contact" class="contactContainer">
            <h1>Contact</h1>
            <div class="grid-container">
              <div class="grid-child-container">

                <h2>Headquarter</h2>
                
                <p><i class="fa fa-user" aria-hidden="true"></i> Mrs Goh Ping In</p>
                <p><i class="fa fa-mobile" aria-hidden="true"></i> Contact Number: 0125227461</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Mail Address: 25 Jalan SS2/32, 47300 Petaling Jaya, Selangor</p>

              </div>

              <div class="grid-child-container"> 
                <h2>Sungai Way Center</h2>
                <p><i class="fa fa-user" aria-hidden="true"></i> Mrs Wong Fui Sin</p>
                <p><i class="fa fa-mobile" aria-hidden="true"></i>  Contact Number: 0127838916</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i>   Mail Address: Sungai Way</p>

              </div>

              <div class="grid-child-container">
                <h2>Sungai Long Center</h2>
                <p><i class="fa fa-user" aria-hidden="true"></i> Mr Chan Yan Wei</p>
                <p><i class="fa fa-mobile" aria-hidden="true"></i> Contact Number: 0149245501</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Mail Address: Sungai Long</p>
              </div>

              <div class="grid-child-container">
                <h2>Johor Bahru Center</h2>
                <p><i class="fa fa-user" aria-hidden="true"></i> Mr X</p>
                <p><i class="fa fa-mobile" aria-hidden="true"></i> Contact Number: Mr X Number</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Mail Address: Mr Y Address</p>
              </div>

              <div class="grid-child-container"> 
                <h2>Penang Center</h2>
                <p><i class="fa fa-user" aria-hidden="true"></i> Mr Y</p>
                <p><i class="fa fa-mobile" aria-hidden="true"></i> Contact Number: Mr Y Number</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Mail Address: Mr Y Address</p>
              </div>

              <div class="grid-child-container">
                <h2>Sarawak Center</h2>
                <p><i class="fa fa-user" aria-hidden="true"></i> Mr Z</p>
                <p><i class="fa fa-mobile" aria-hidden="true"></i> Contact Number: Mr Z Number</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Mail Address: Mr Z Address</p>
              </div>

              <div class="grid-child-container">
                <h2>Yong Peng Center</h2>
                <p><i class="fa fa-user" aria-hidden="true"></i> Mr L</p>
                <p><i class="fa fa-mobile" aria-hidden="true"></i> Contact Number: Mr L Number</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Mail Address: Mr L Address</p>
              </div>

            </div>
          </div>



        </div>
       

      </body>
      {/* <footer class="footer">
        <div>Copyright by Ajar-Ajar Malaysia @ 2021</div>
      </footer> */}

    </div>
  );
}

export default App;
