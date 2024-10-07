import { Routes, Route } from 'react-router-dom';
import Index from './Page/Index';
import Singinpage from './Page/Singinpage'
import Loginpage from './Page/Loginpage';
import Profilepage from './Page/Profilepage';
import FromBookingpage from './Page/FromBookingpage';
import Culturepage from './Page/Culturepage';
import Beachpage from './Page/Beachpage';
import Naturepage from './Page/Naturepage';
import Hikingpage from './Page/Hikingpage';
import Villapage from './Page/Villapage';
import DeskripsiBeratanpage from './Page/DeskripsiBeratanpage'
import DeskripsiUluwatupage from './Page/DeskripsiUluwatupage'
import DeskripsiTanahlotpage from './Page/DeskripsiTanahlotpage'
import DeskripsiTrunyanpage from './Page/DeskripsiTrunyanpage'
import DeskripsiPengelipuranpage from './Page/DeskripsiPengelipuranpage'
import DeskripsiTirthaempulpage from './Page/DeskripsiTirthaempulpage'
import DeskripsiKelingkingpage from "./Page/DeskripsiKelingkingpage";
import DeskripsiBalanganpage from "./Page/DeskripsiBalanganpage";
import DeskripsiKutapage from "./Page/DeskripsiKutapage";
import DeskripsiDreamlandpage from "./Page/DeskripsiDreamlandpage";
import DeskripsiJatiluwihpage from "./Page/DeskripsiJatiluwihpage";
import DeskripsiGitgitpage from './Page/DeskripsiGitgitpage';
import DeskripsiMonkeypage from './Page/DeskripsiMonkeypage';
import DeskripsiBaturpage from './Page/DeskripsiBaturpage';
import DeskripsiAbangpage from './Page/DeskripsiAbangpage';
import DeskripsiTerunyanpage from './Page/DeskripsiTerunyanpage';
import Aavatarpage from './Page/Aavatarpage';
// villa
import DeskripsiVillaSuryapage from './Page/DeskripsiVillaSuryapage';
import DeskripsiVillaSaktipage from './Page/DeskripsiVillaSaktipage'
import Acountpage from './Page/Acountpage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} /> {/* Route utama "/" untuk halaman Index */}
        <Route path="/index" element={<Index />} /> {/* Opsional, jika ingin rute "/index" juga menuju halaman Index */}
        <Route path="/Singinpage" element={<Singinpage/>} />
        <Route path="/Acountpage" element={<Acountpage/>} />
        <Route path="/Loginpage" element={<Loginpage/>} />
        <Route path="/Profilepage" element={<Profilepage/>} />
        <Route path="/FromBookingpage" element={<FromBookingpage/>} />
        <Route path="/culture" element={<Culturepage />} /> {/* Route untuk halaman destibeach */}
        <Route path="/beach" element={<Beachpage/>} /> {/* Route untuk halaman destibeach */}
        <Route path="/nature" element={<Naturepage/>} /> {/* Route untuk halaman destibeach */}
        <Route path="/hiking" element={<Hikingpage/>} /> {/* Route untuk halaman destibeach */}
        <Route path="/villa" element={<Villapage />} />
        <Route path="/DeskripsiBeratanpage" element={<DeskripsiBeratanpage />} />
        <Route path="/DeskripsiUluwatupage" element={<DeskripsiUluwatupage />} />
        <Route path="/DeskripsiTanahlotpage" element={<DeskripsiTanahlotpage  />} />
        <Route path="/DeskripsiTrunyanpage" element={<DeskripsiTrunyanpage />} />
        <Route path="/DeskripsiPengelipuranpage" element={<DeskripsiPengelipuranpage />} />
        <Route path="/DeskripsiTirthaempulpage" element={<DeskripsiTirthaempulpage />} />
        <Route path="/DeskripsiKelingkingpage" element={<DeskripsiKelingkingpage />} />
        <Route path="/DeskripsiBalanganpage" element={<DeskripsiBalanganpage />} />
        <Route path="/DeskripsiKutapage" element={<DeskripsiKutapage />} />
        <Route path="/DeskripsiDreamlandpage" element={<DeskripsiDreamlandpage />} />
        <Route path="/DeskripsiJatiluwihpage" element={<DeskripsiJatiluwihpage />} />
        <Route path="/DeskripsiGitgitpage" element={<DeskripsiGitgitpage />} />
        <Route path="/DeskripsiMonkeypage" element={<DeskripsiMonkeypage/>} />
        <Route path="/DeskripsiBaturpage" element={<DeskripsiBaturpage/>} />
        <Route path="/DeskripsiAbangpage" element={<DeskripsiAbangpage/>} />
        <Route path="/DeskripsiTerunyanpage" element={<DeskripsiTerunyanpage/>} />
        <Route path="/DeskripsiTerunyanpage" element={<DeskripsiTerunyanpage/>} />
        <Route path="/Avatarpage" element={<Aavatarpage/>} />
        <Route path="/DeskripsiVillaSuryapage" element={<DeskripsiVillaSuryapage/>} />
        <Route path="/DeskripsiVillaSaktipage" element={<DeskripsiVillaSaktipage/>} />
      </Routes>
    </div>
  );
}

export default App;
