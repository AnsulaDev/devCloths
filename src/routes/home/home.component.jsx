import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import ParticlesBg from 'particles-bg'
const Home = () => {
    return (
        <div>
            <>
        
                <ParticlesBg type="cobweb" bg={true} />
            </>
            <Directory />
            <Outlet/>
        </div>
        
    );
};

export default Home;