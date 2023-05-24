import { useContext } from 'react';
import Switch from 'react-switch';
import { ContainerGlobal } from '../../styles/globalStyle';
import { ThemeContext } from '../../App';
import './user.css'
import { Link } from 'react-router-dom';

const User = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main>
      <ContainerGlobal>
        <div className='userData-perfil'>
          <img src='https://media.licdn.com/dms/image/C4D03AQEhmcMX2gFB_A/profile-displayphoto-shrink_800_800/0/1652203988772?e=1690416000&v=beta&t=l6dJcIg8ui102sfnP4M7v-EUtNrf-O2DHZr1aZzMTsw'alt=''/>
          <h1>
            Vitor Aguiar
          </h1>
        </div>
        <div className="userData-config">
          <Link to={'/'} >
            <div className='userData-config_account'>
              <h2>
                Sua conta
              </h2>
              <div className='userData-config_account container-info'>
              <svg width={50} height={50} fill="#a3a3a3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
                <path d="M8 13.25A3.75 3.75 0 0 0 4.25 17v1.188c0 .754.546 1.396 1.29 1.517 4.278.699 8.642.699 12.92 0a1.537 1.537 0 0 0 1.29-1.517V17A3.75 3.75 0 0 0 16 13.25h-.34c-.185 0-.369.03-.544.086l-.866.283a7.251 7.251 0 0 1-4.5 0l-.866-.283a1.752 1.752 0 0 0-.543-.086H8Z" />
              </svg>
                <span className='userData-config_account container-info info'>
                  <strong>
                    Meus dados
                  </strong>
                  <p>
                    Gerencie seus dados de perfil, senha e outros
                  </p>
                </span>
                <svg width={38} height={38} fill="none" stroke="#a3a3a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m8.625 5.25 6.75 6.75-6.75 6.75" />
                </svg>
              </div>
            </div>
          </Link>
          <div className='userData-config_app'>
            <h2>
              Seu app
            </h2>
            <div className='userData-config_app container-info'>
              <svg width={50} height={50} fill="#a3a3a3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth={1.2}>
                <path d="M12 16a4 4 0 0 0 0-8v8Z" />
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 2v4a4 4 0 1 0 0 8v4a8 8 0 1 0 0-16Z" clipRule="evenodd" />
              </svg>
              <span className='userData-config_app container-info info'>
                <strong>
                  Alternar tema
                </strong>
              </span>
              <Switch
                onChange={toggleTheme}
                checked={theme.title === 'darkTheme'}
                checkedIcon={true}
                uncheckedIcon={true}
                height={20}
                width={40}
                handleDiameter={25}
                onHandleColor={'#c7c7c7'}
                offHandleColor={'#c7c7c7'}
                offColor={theme.colors.secondary}
                onColor={theme.colors.secondary}
              />
            </div>
          </div>
        </div>

      </ContainerGlobal>
    </main>
  );
};

export default User;
