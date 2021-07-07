import './App.css';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Projects from './components/Projects';
import GaulakshmiInfraTownships from './components/Project/type1/GaulakshmiInfraTownships';
import RainbowCounty from './components/Project/type1/RainbowCounty.js';
import MauliPride from './components/Project/type1/MauliPride';
import S3EcoCity from './components/Project/type1/S3EcoCity';
import BestOldColony from './components/Project/type1/BestOldColony';
import VardhmanFlora from './components/Project/type2/VardhmanFlora';
import UrbanWaves from './components/Project/type2/UrbanWaves';
import EastInfinityResidential from './components/Project/type3/EastInfinityResidential';
import NenseyColony from './components/Project/type3/NenseyColony';
import Solaris1 from './components/Project/type3/Solaris1';
import KhandelwalResidential from './components/Project/type3/KhandelwalResidential';
import MauliOmkar from './components/Project/type3/MauliOmkar';
import DGSResidential from './components/Project/type3/DGSResidential';
import TejKiran from './components/Project/type3/TejKiran';
import SagarPark from './components/Project/type3/SagarPark';
import Daffodil from './components/Project/type3/Daffodil';
import TheHamletResidential from './components/Project/type3/TheHamletResidential';
import TheBigTree from './components/Project/type3/TheBigTree';
import SocietyResidential from './components/Project/type3/SocietyResidential';
import MalaCHS from './components/Project/type3/MalaCHS';
import PrabhuDarshan from './components/Project/type3/PrabhuDarshan';
import MatruMandir from './components/Project/type3/MatruMandir';
import MotiwalaHotel from './components/Project/type4/MotiwalaHotel';
import SaiSakshiHotel from './components/Project/type4/SaiSakshiHotel';
import FernForestBathResort from './components/Project/type4/FernForestBathResort';
import HotelatReva from './components/Project/type4/HotelatReva';
import HotelExpressINN from './components/Project/type4/HotelExpressINN';
import ShreeShyaamHeritage from './components/Project/type4/ShreeShyaamHeritage';
import MhadaCovidHospital from './components/Project/type5/MhadaCovidHospital';
import VidyaVardhakSamatiSchool from './components/Project/type6/VidyaVardhakSamatiSchool';
import ThakurCollege from './components/Project/type6/ThakurCollege';
import KanhaLodge from './components/Project/type7/KanhaLodge';
import IORAResidence from './components/Project/type7/IORAResidence';
import CloverWindermereVilla from './components/Project/type7/CloverWindermereVilla';
import SanjayGoyalBungalow from './components/Project/type7/SanjayGoyalBungalow';
import BhagwatiNiwas from './components/Project/type7/BhagwatiNiwas';
import ChetanTarwaniBungalow from './components/Project/type7/ChetanTarwaniBungalow';
import AmazonValshindWarehouse from './components/Project/type8/AmazonValshindWarehouse';
import DataCenter from './components/Project/type8/DataCenter';
import NavMartMall from './components/Project/type9/NavMartMall';
import HSBCBank from './components/Project/type9/HSBCBank';
import OilIndiaLtd from './components/Project/type9/OilIndiaLtd';
import GuardiansOffice from './components/Project/type9/GuardiansOffice';
import NavMartHall from './components/Project/type9/NavMartHall';
import ChetanTarwaniOffice from './components/Project/type9/ChetanTarwaniOffice';
import FacilityCenter from './components/Project/type10/FacilityCenter';
import MCGMGymkhana from './components/Project/type10/MCGMGymkhana';
import SBUTCluster from './components/Project/type10/SBUTCluster';
import BanquetHall from './components/Project/type10/BanquetHall';
import ScrollToTop from './ScrollToTop';
function App() {
  return (
    <div className="App">
      
        <Router>
        <ScrollToTop />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about-us" exact component={About} />
              <Route path="/services" exact component={Services} />
              <Route path="/careers" exact component={Careers} />
              <Route path="/gallery" exact component={Gallery} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/clients" exact component={Clients} />
              <Route path="/testimonials" exact component={Testimonials} />
              <Route path="/contact" exact component={Contact} />

              /* Type1 */
              <Route path="/projects/Gaulakshmi-Infra-Townships" exact component={GaulakshmiInfraTownships} />
              <Route path="/projects/Rainbow-County" exact component={RainbowCounty} />
              <Route path="/projects/Mauli-Pride" exact component={MauliPride} />  
              <Route path="/projects/S3EcoCity" exact component={S3EcoCity} /> 
              <Route path="/projects/BestOldColony" exact component={BestOldColony} />             

              /* Type2 */
              <Route path="/projects/VardhmanFlora" exact component={VardhmanFlora} />            
              <Route path="/projects/UrbanWaves" exact component={UrbanWaves} />   


              /* Type3 */
              <Route path="/projects/EastInfinityResidential" exact component={EastInfinityResidential} />            
              <Route path="/projects/NenseyColony" exact component={NenseyColony} />    
              <Route path="/projects/Solaris1" exact component={Solaris1} /> 
              <Route path="/projects/KhandelwalResidential" exact component={KhandelwalResidential} /> 
              <Route path="/projects/MauliOmkar" exact component={MauliOmkar} /> 
              <Route path="/projects/DGSResidential" exact component={DGSResidential} /> 
              <Route path="/projects/TejKiran" exact component={TejKiran} /> 
              <Route path="/projects/SagarPark" exact component={SagarPark} /> 
              <Route path="/projects/Daffodil" exact component={Daffodil} /> 
              <Route path="/projects/TheHamletResidential" exact component={TheHamletResidential} /> 
              <Route path="/projects/TheBigTree" exact component={TheBigTree} /> 
              <Route path="/projects/SocietyResidential" exact component={SocietyResidential} /> 
              <Route path="/projects/MalaCHS" exact component={MalaCHS} /> 
              <Route path="/projects/MatruMandir" exact component={MatruMandir} /> 
              <Route path="/projects/PrabhuDarshan" exact component={PrabhuDarshan} /> 


              /* Type4 */
              <Route path="/projects/MotiwalaHotel" exact component={MotiwalaHotel} />            
              <Route path="/projects/HotelExpressINN" exact component={HotelExpressINN} />  
              <Route path="/projects/FernForestBathResort" exact component={FernForestBathResort} />            
              <Route path="/projects/SaiSakshiHotel" exact component={SaiSakshiHotel} />   
              <Route path="/projects/HotelatReva" exact component={HotelatReva} />            
              <Route path="/projects/ShreeShyaamHeritage" exact component={ShreeShyaamHeritage} />    
              
              /* Type5 */
              <Route path="/projects/MhadaCovidHospital" exact component={MhadaCovidHospital} /> 

              /* Type6 */
              <Route path="/projects/VidyaVardhakSamatiSchool" exact component={VidyaVardhakSamatiSchool} /> 
              <Route path="/projects/ThakurCollege" exact component={ThakurCollege} /> 


              /* Type7 */
              <Route path="/projects/KanhaLodge" exact component={KanhaLodge} /> 
              <Route path="/projects/IORAResidence" exact component={IORAResidence} /> 
              <Route path="/projects/CloverWindermereVilla" exact component={CloverWindermereVilla} /> 
              <Route path="/projects/SanjayGoyalBungalow" exact component={SanjayGoyalBungalow} /> 
              <Route path="/projects/BhagwatiNiwas" exact component={BhagwatiNiwas} /> 
              <Route path="/projects/ChetanTarwaniBungalow" exact component={ChetanTarwaniBungalow} /> 


              /* Type8 */
              <Route path="/projects/AmazonValshindWarehouse" exact component={AmazonValshindWarehouse} /> 
              <Route path="/projects/DataCenter" exact component={DataCenter} /> 


              /* Type9 */
              <Route path="/projects/NavMartMall" exact component={NavMartMall} /> 
              <Route path="/projects/HSBCBank" exact component={HSBCBank} /> 
              <Route path="/projects/OilIndiaLtd" exact component={OilIndiaLtd} /> 
              <Route path="/projects/GuardiansOffice" exact component={GuardiansOffice} /> 
              <Route path="/projects/NavMartHall" exact component={NavMartHall} /> 
              <Route path="/projects/ChetanTarwaniOffice" exact component={ChetanTarwaniOffice} /> 

              /* Type10 */
              <Route path="/projects/FacilityCenter" exact component={FacilityCenter} /> 
              <Route path="/projects/MCGMGymkhana" exact component={MCGMGymkhana} /> 
              <Route path="/projects/SBUTCluster" exact component={SBUTCluster} /> 
              <Route path="/projects/BanquetHall" exact component={BanquetHall} /> 


          </Switch>
        </Router>
    </div>
  );
}

export default App;
