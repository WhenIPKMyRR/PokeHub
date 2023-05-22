import { useContext } from 'react';
import Switch from 'react-switch';
import { ContainerGlobal } from '../../styles/globalStyle';
import { ThemeContext } from '../../App';

const User = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main>
      <ContainerGlobal>
        <Switch
          onChange={toggleTheme}
          checked={theme.title === 'darkTheme'} 
          checkedIcon={false}
          uncheckedIcon={false}
          height={25}
          width={50}
          handleDiameter={30}
          onHandleColor={'#c7c7c7'}
          offHandleColor={'#c7c7c7'}
          offColor={theme.colors.secondary}
          onColor={theme.colors.secondary}
        />
      </ContainerGlobal>
    </main>
  );
};

export default User;
