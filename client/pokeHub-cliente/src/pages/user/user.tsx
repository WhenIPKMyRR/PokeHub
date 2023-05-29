import React, { ReactNode } from 'react';
import { useContext } from 'react';
import Switch from 'react-switch';
import { ContainerGlobal } from '../../styles/globalStyle';
import { ThemeContext } from '../../App';
import './user.css'
import { Link } from 'react-router-dom';

interface IOptionUserProps{
  category?: string;
  title: string;
  icon: ReactNode;
  description?: string;
  button:ReactNode;
}

const OptionUser: React.FC<IOptionUserProps> = (props) =>{

  return(
    <div className='userData-config_account'>
      <h2>
        {props.category}
      </h2>
      <div className='userData-config_account container-info'>
        {props.icon}
        <span className='userData-config_account container-info info'>
          <strong>
            {props.title}
          </strong>
          <p>
            {props.description}
          </p>
        </span>
          {props.button}
      </div>
    </div>
  )
}


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
          <div className='userData-config_account'>
            <Link to={'/'} >
              <OptionUser category='Sua conta' title='Meus dados' description='Seus dados de perfil, email e senha'
                icon={
                  <svg width={45} height={45} fill="#a3a3a3" viewBox="0 0 24 24">
                    <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm.094 4.5a3.375 3.375 0 1 1 0 6.75 3.375 3.375 0 0 1 0-6.75ZM12 20.25a8.23 8.23 0 0 1-6.055-2.653C6.359 15.45 10.08 15 12 15s5.64.45 6.055 2.596A8.228 8.228 0 0 1 12 20.25Z" />
                  </svg>
                } 
                button={
                  <svg width={35} height={35} fill="#a3a3a3" viewBox="0 0 24 24">
                      <path d="M10.586 6.344 12 4.93 19.071 12l-7.07 7.072-1.415-1.414L16.243 12l-5.657-5.657Z" />
                  </svg>
                }
              />
            </Link>
            <Link to={'/'}>
              <OptionUser  title='Meus pokemons' description='Seus pokemons capturados' 
                icon={
                  <svg width={50} height={50} fill="#a3a3a3" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm2.07 1a7.002 7.002 0 0 0 13.86 0h-4.1a3.001 3.001 0 0 1-5.66 0h-4.1Zm13.86-2a7.001 7.001 0 0 0-13.86 0h4.1a3.001 3.001 0 0 1 5.66 0h4.1ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                  </svg>
                } 
                button={
                  <svg width={35} height={35} fill="#a3a3a3" viewBox="0 0 24 24">
                    <path d="M10.586 6.344 12 4.93 19.071 12l-7.07 7.072-1.415-1.414L16.243 12l-5.657-5.657Z" />
                  </svg>
                }
              />
            </Link>
          </div>
          <div className='userData-config_app'>
            <OptionUser category='Seu app' title='Alterar tema' 
              icon={
                <svg width={45} height={45} fill="#a3a3a3" viewBox="0 0 24 24">
                  <path d="M12 16a4 4 0 0 0 0-8v8Z" />
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 2v4a4 4 0 1 0 0 8v4a8 8 0 1 0 0-16Z" clipRule="evenodd" />
                </svg>
              } 
              button={
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
              }
            />
          </div>
        </div>

      </ContainerGlobal>
    </main>
  );
};

export default User;
